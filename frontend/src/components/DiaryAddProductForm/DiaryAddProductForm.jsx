import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addProduct } from '../../redux/diary/diaryOperations';
import { selectDiaryDate } from '../../redux/diary/diarySelectors';
import axiosInstance, {
  getErrorMessage,
} from '../../services/api/axiosInstance';
import styles from './DiaryAddProductForm.module.css';

const DiaryAddProductForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const date = useSelector(selectDiaryDate);
  const [query, setQuery] = useState('');
  const [grams, setGrams] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const searchErrorShownRef = useRef(false);

  useEffect(() => {
    if (query.length < 2) {
      searchErrorShownRef.current = false;
      return;
    }

    const fetchProducts = async () => {
      try {
        const { data } = await axiosInstance.get(
          `/api/product/search?q=${encodeURIComponent(query)}`,
        );
        const productsArray = data?.data?.data || data?.data || [];
        setSuggestions(productsArray);
        searchErrorShownRef.current = false;
      } catch (error) {
        setSuggestions([]);
        if (
          !searchErrorShownRef.current &&
          (!navigator.onLine || error.code === 'ERR_NETWORK')
        ) {
          toast.error(getErrorMessage(error));
          searchErrorShownRef.current = true;
        }
      }
    };

    const timeoutId = setTimeout(() => {
      fetchProducts();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query]);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setQuery(product.title);
    setSuggestions([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedProduct || !grams) return;

    const amountNumber = Number(grams);
    if (
      !Number.isFinite(amountNumber) ||
      amountNumber < 1 ||
      amountNumber > 5000
    ) {
      return;
    }

    const calculatedCalories = Math.round(
      (selectedProduct.calories / 100) * amountNumber,
    );

    try {
      await dispatch(
        addProduct({
          date: date,
          productId: selectedProduct._id,
          amount: amountNumber,
          calories: calculatedCalories,
        }),
      ).unwrap();

      setQuery('');
      setGrams('');
      setSelectedProduct(null);

      if (closeModal) {
        closeModal();
      }
    } catch {
      // Toast is shown in diaryOperations
    }
  };

  return (
    <form className={styles.diaryForm} onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          id="productName"
          name="productName"
          autoComplete="off"
          className={styles.input}
          placeholder="Enter product name"
          value={query}
          onChange={(e) => {
            const value = e.target.value;
            setQuery(value);
            setSelectedProduct(null);
            if (value.length < 2) {
              setSuggestions([]);
            }
          }}
          required
        />
        {/* Arama Sonuçları Dropdown */}
        {suggestions.length > 0 && (
          <ul className={styles.suggestionsDropdown}>
            {suggestions.map((product) => (
              <li key={product._id}>
                <button
                  type="button"
                  className={styles.suggestionItem}
                  onClick={() => handleSelectProduct(product)}
                >
                  {product.title}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={styles.inputWrapper}>
        <input
          type="number"
          id="grams"
          name="grams"
          placeholder="Grams"
          className={styles.inputGrams}
          value={grams}
          onChange={(e) => {
            const value = e.target.value;

            if (Number(value) > 5000) {
              return;
            }

            setGrams(value);
          }}
          required
          min="1"
          max="5000"
          step="1"
        />
      </div>

      <button
        type="submit"
        className={styles.addBtn}
        disabled={
          !selectedProduct ||
          !grams ||
          Number(grams) < 1 ||
          Number(grams) > 5000
        }
      >
        <span className={styles.desktopPlus}>+</span>
        <span className={styles.mobileAddText}>Add</span>
      </button>
    </form>
  );
};

export default DiaryAddProductForm;
