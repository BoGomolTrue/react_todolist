import {createSlice} from '@reduxjs/toolkit'

const randomString = require("randomstring");

const TodosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [],
        filter: "SHOW_ALL"
    },
    reducers: {
        setTask(state, action) {
            let unique = !state.todos.find(task => task.title === action.payload);
            if (unique) {
                state.todos = [
                    ...state.todos,
                    {
                        id: randomString.generate(4),
                        title: action.payload,
                        isCompleted: false
                    }
                ]
                localStorage.setItem('todos', JSON.stringify(state.todos))
            }
        },
        completedTask(state, action) {
            const neededTodo = state.todos.filter(todo => todo.id === action.payload);
            neededTodo[0].isCompleted = !neededTodo[0].isCompleted;
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        removeTask(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        setFilter(state, action) {
            state.filter = action.payload;
        }
    }
})

export const {
    setTask,
    completedTask,
    removeTask,
    setFilter,
} = TodosSlice.actions
export default TodosSlice.reducer;