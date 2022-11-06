import { applyMiddleware, configureStore } from '@reduxjs/toolkit';

import imagesReducer from '../imagesSlice';
import dataReducer from '../dataSlice';

export default configureStore({
    reducer: {
        likedImages: imagesReducer,
        data: dataReducer,
    }
});