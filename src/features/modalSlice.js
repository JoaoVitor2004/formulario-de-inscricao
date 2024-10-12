import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        show: false
    },
    reducers: {
        showForm: (state) => {
            state.show = true
        },
        hideForm: (state) => {
            state.show = false
        }
    }
})

export const {showForm, hideForm} = modalSlice.actions

export default modalSlice.reducer