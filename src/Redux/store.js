import { configureStore } from '@reduxjs/toolkit'

import TodosReducer from './todosService/todosSlice';

export const store = configureStore({
    reducer: {
        todos: TodosReducer,
    }
});