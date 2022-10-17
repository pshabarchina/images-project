import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function Main(props) {
  const location = useLocation();
  // useEffect(() => {
  //   console.log(location);
  // }, [])
  
  console.log(props);
  function saveLikedImg(e) {
    let spanEl = e.target.closest('.imgSpan');
    if (!props.likedImgs.includes(spanEl.id)) 
      props.addLikedImage(spanEl.id);
    console.log(props.likedImgs);
    return props.likedImgs;
  }

  const images = location.state.map(entry => (<p className='imgSpan' id={entry.url}><img src={entry.url} height='200' /><button className='likeBtn' onClick={saveLikedImg}>Like</button></p>));
    
  return (
    <main>
      <h2>Main</h2>
      <span>{images}</span>
    </main>
  );
}
