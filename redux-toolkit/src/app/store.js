import {configureStore} from '@reduxjs/toolkit';
import todoReducers from '../features/TodoSlice';

export const store = configureStore({
    reducer : todoReducers
})