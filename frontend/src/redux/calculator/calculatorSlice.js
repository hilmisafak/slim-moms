import { createSlice } from '@reduxjs/toolkit';
import { calculateDailyCalories } from '../calculator/calculatorOperations.js';

const savedCalculatorResult = JSON.parse(
  localStorage.getItem('calculatorResult') || 'null',
);

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    dailyCalories: savedCalculatorResult?.dailyCalories || null,
    notRecommendedProducts: savedCalculatorResult?.notRecommendedProducts || [],
    isLoading: false,
    error: null,
  },
  reducers: {
    clearResult(state) {
      state.dailyCalories = null;
      state.notRecommendedProducts = [];
      localStorage.removeItem('calculatorResult');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(calculateDailyCalories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(calculateDailyCalories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dailyCalories = action.payload.dailyCalories;
        state.notRecommendedProducts = action.payload.notRecommendedProducts;

        localStorage.setItem(
          'calculatorResult',
          JSON.stringify({
            dailyCalories: action.payload.dailyCalories,
            notRecommendedProducts: action.payload.notRecommendedProducts,
          }),
        );
      })
      .addCase(calculateDailyCalories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearResult } = calculatorSlice.actions;
export default calculatorSlice.reducer;
