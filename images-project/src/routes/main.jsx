import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function Main() {
  const location = useLocation();
  // useEffect(() => {
  //   console.log(location);
  // }, [])
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
    <main>
      <ul>
        <li><Link to="/liked-images" state={likedImgs}>Liked Images</Link></li>
      </ul>
      <h2>Main</h2>
      <span>{images}</span>
    </main>
  );
}
