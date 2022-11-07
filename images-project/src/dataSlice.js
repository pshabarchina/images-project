import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    images: [],
    status: 'idle',
    error: null
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        dataLoaded(state, action) {
            state.images.push(action.payload)
        },
        dataRemoved(state, action) {
            return {...state, images: state.images.filter(entry => entry.url !== action.payload)}
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchData.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.images = state.images.concat(action.payload);
            })
            .addCase(fetchOneImage.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchOneImage.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.images = state.images.concat(action.payload);
            })
    }
});

export const { dataLoaded, dataRemoved } = dataSlice.actions;

export default dataSlice.reducer;

export const selectAllImages = state => state.data;

export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const response = await fetch(
        'https://api.thecatapi.com/v1/images/search?limit=5'
      );
    const actualData = await response.json();
    console.log(actualData);
    return actualData;
});

export const fetchOneImage = createAsyncThunk('data/fetchOneImage', async () => {
    const response = await fetch(
        'https://api.thecatapi.com/v1/images/search?limit=1'
    );
    const actualData = await response.json();
    return actualData;
});
