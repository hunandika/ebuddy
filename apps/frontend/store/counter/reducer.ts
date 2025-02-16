import { createReducer } from '@reduxjs/toolkit';
import { increment, decrement, incrementByAmount } from './actions';
import { CounterState } from './types';

const initialState: CounterState = {
  value: 0,
};

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.value += 1;
    })
    .addCase(decrement, (state) => {
      state.value -= 1;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload;
    });
});

export default counterReducer;
