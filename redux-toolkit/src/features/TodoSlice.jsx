import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Add tasks"}]
}

//properties names are already mentioned in the redux toolkit so follow it properly
//reducers contains functions and those functions always have state(give the access of the present state) 
//and actions(gives the value on which func is to performed ,like: id)

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => { //here action has text
            const todo = {
                id: nanoid(), //gives unique id 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => { //here action has id 
            state.todos = state.todos.filter ((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => { //fucntion to write the update todos
            state.todos = state.todos.map((prevTodo) => (prevTodo.id === action.payload.id? action.payload : prevTodo ))
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions
export default todoSlice.reducer

//both reducers functions and the reducers object needs to be exported
