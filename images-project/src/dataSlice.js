import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        dataLoaded(state, action) {
            state.push(action.payload)
        },
    }
})

export const { dataLoaded } = dataSlice.actions;

export default dataSlice.reducer;

