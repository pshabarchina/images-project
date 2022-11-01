import { configureStore } from '@reduxjs/toolkit';

import imagesReducer from '../imagesSlice';
import dataReducer from '../dataSlice';


export default configureStore({
    reducer: {
        images: imagesReducer,
        data: dataReducer,
    }
});