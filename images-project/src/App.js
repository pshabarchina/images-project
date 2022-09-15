import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let imagesArray = [];


  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          'https://api.thecatapi.com/v1/images/search'
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
    // for (let i=0; i<5; i++) {
    //   getData();
    //   imagesArray.push(data);
    // };
  }, []);

  const images = data.map(entry => (<p><img src={entry.url} key={entry.id} height='300' /></p>));
  console.log(images);

  return (
    <div className="App">
      <ul>
        <li><Link to="/main">Main</Link></li>
        <li><Link to="/liked-images">Liked Images</Link></li>
      </ul>
      <Outlet />
      <span>
        {images}
      </span>
    </div>
  );
}

export default App;
