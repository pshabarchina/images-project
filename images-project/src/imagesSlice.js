import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const imagesSlice = createSlice({
    name: 'likedImages',
    initialState,
    reducers: {
        imageAdded(state, action) {
            state.push(action.payload)
        },
        imageRemoved(state, action) {
            return state.filter(img => img !== action.payload);
        }
    }
})

export const { imageAdded, imageRemoved } = imagesSlice.actions;

export default imagesSlice.reducer;

