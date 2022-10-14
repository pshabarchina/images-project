import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Main from './routes/main';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  let likedImgs = [];
  function saveLikedImg(e) {
    let spanEl = e.target.closest('.imgSpan');
    if (!likedImgs.includes(spanEl.id)) 
      likedImgs.push(spanEl.id);
    console.log(likedImgs);
    return likedImgs;
  }

  const images = data.map(entry => (<p className='imgSpan' id={entry.url}><img src={entry.url} key={entry.id} height='200' /><button className='likeBtn' onClick={saveLikedImg}>Like</button><span>      </span></p>));
    return (
    <div className="App">
      <ul>
        <li><Link to="/main" state={data}>Main</Link></li>
        <li><Link to="/liked-images" state={likedImgs}>Liked Images</Link></li>
      </ul>
      <Outlet />
      <span>
        {images}
      </span>
    </div>
  );
}

export default App;
