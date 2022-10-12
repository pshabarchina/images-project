import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Main() {
  const location = useLocation();
  // useEffect(() => {
  //   console.log(location);
  // }, [])
  
  const images = location.state.map(entry => (<p className='imgSpan' id={entry.url}><img src={entry.url} key={entry.id} height='200' /><button className='likeBtn' onClick={saveLikedImg}>Like</button><span>      </span></p>));
  
  let likedImgs = [];
  function saveLikedImg(e) {
  let spanEl = e.target.closest('.imgSpan');
  if (!likedImgs.includes(spanEl.id)) 
    likedImgs.push(spanEl.id);
  console.log(likedImgs);
  return likedImgs;
}

  return (
    <main>
      <h2>Main</h2>
      <p>{images}</p>
    </main>
  );
}
