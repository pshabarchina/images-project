import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Main from './routes/main';
import LikedImages from './routes/liked-images';
import { fetchData, selectAllImages, fetchOneImage } from './dataSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageWasDeleted, setImageWasDeleted] = useState(false);
  
  const dispatch = useDispatch();
  const dataStatus = useSelector(state => state.data.status);
  console.log(dataStatus);

  useEffect(() => {
    if (dataStatus === 'idle') {
      dispatch( fetchData() );
    }
  }, [dataStatus, dispatch]);

  useEffect(() => {
    if (imageWasDeleted) {
      dispatch( fetchOneImage() );
    }
    setImageWasDeleted(false);
    }, [imageWasDeleted, dispatch]);

  function removeDislikedImage(url) {
    const updatedData = data.filter(entry => entry.url !== url);
    setData(updatedData);
  }

  return (
    <div className="App">
      <ul>
        <li><Link to="/">Main</Link></li>
        <li><Link to="/liked-images">Liked Images</Link></li>
      </ul>
      <Routes>
      <Route path="/" element={<Main setImageWasDeleted={setImageWasDeleted}/>} />
      <Route path="liked-images" element={<LikedImages />}/>
    </Routes>
    </div>
  );
}

export default App;
