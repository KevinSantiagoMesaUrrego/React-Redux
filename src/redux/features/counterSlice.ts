import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0, nombre: '' }
export const counterSlice = createSlice({
    name: 'counter',

    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
            
        },
        decrement: (state) => {
            state.value -= 1
        },
        reset: (state) => {
            state.value = 0
        },
        imprimir:(state,value)=> {
            state.nombre = value.payload
        }
    }
})
export const { increment, decrement, reset, imprimir } = counterSlice.actions
export default counterSlice.reducer