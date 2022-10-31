import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Main from './routes/main';
import LikedImages from './routes/liked-images';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //const [likedImgs, setLikedImages] = useState([]);
  const [imageWasDeleted, setImageWasDeleted] = useState(false);

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

  useEffect(() => {
       const getOneImage = async () => {
        try {
          const response = await fetch(
            'https://api.thecatapi.com/v1/images/search?limit=1'
          );
  
          if (!response.ok) {
            throw new Error(`This is an HTTP error: The status is ${response.status}`);
          }
  
          let actualData = await response.json();
          const updatedData =  data.concat(actualData);
          setData(updatedData);
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
      getOneImage();
      setImageWasDeleted(false);
    }, [imageWasDeleted]);

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
      <Route path="/" element={<Main removeDislikedImage={removeDislikedImage} data={data} setImageWasDeleted={setImageWasDeleted}/>} />
      <Route path="liked-images" element={<LikedImages />}/>
    </Routes>
    </div>
  );
}

export default App;
