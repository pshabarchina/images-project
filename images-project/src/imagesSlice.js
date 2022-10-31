import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        imageAdded(state, action) {
            state.push(action.payload)
        }
    }
})

export const { imageAdded } = imagesSlice.actions;

export default imagesSlice.reducer;

