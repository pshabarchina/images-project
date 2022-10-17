import './App.css';
import { Link, Outlet, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Main from './routes/main';
import LikedImages from './routes/liked-images';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [likedImgs, setLikedImages] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          'https://api.thecatapi.com/v1/images/search?limit=10'
        );

        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`);
        }

        let actualData = await response.json();
        setData(actualData);
        setError(null);
      }
      catch (err) {
        setError(err.message);
        setData(null);
      }
      finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

    function addLikedImage(url) {
      setLikedImages([...likedImgs, url]);
    }

    return (
    <div className="App">
      <ul>
        <li><Link to="/main" state={data}>Main</Link></li>
        <li><Link to="/liked-images" state={likedImgs}>Liked Images</Link></li>
      </ul>
      <Routes>
      <Route path="/main" element={<Main addLikedImage={addLikedImage} likedImgs={likedImgs} />} />
      <Route path="liked-images" element={<LikedImages />}/>
    </Routes>
    
    </div>
  );
}

export default App;
