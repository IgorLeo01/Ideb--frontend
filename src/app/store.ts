import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authReducer from "../services/auth/authSlice";
import uiSliceReducer from "../services/ui/UiSlice";
import { apiSlice } from './api/apiSlice';
import payloadReducer from '../services/payment/payloadSlice';

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  uiSlice: uiSliceReducer,
  payment: payloadReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
