import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./routes/main";
import LikedImages from './routes/liked-images';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Routes>
        <Route path='/' element={<App />}>
          <Route path='main' element={<Main />} />
          <Route path ='liked-images' element={<LikedImages />} />
        </Route> */}
        <App />
      {/* </Routes> */}
    </BrowserRouter>
  </React.StrictMode>
);