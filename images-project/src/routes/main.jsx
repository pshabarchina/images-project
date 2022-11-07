import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { imageAdded, imageRemoved } from '../imagesSlice';

import { dataRemoved } from '../dataSlice';

export default function Main(props) {

  const dispatch = useDispatch();
  const likedImages = useSelector(state => state.likedImages);
  const allImages = useSelector(state => state.data.images);

  function handleLikeClick(e) {
    let spanEl = e.target.closest('.imgSpan');
    if (!likedImages.includes(spanEl.id))
      dispatch(imageAdded(spanEl.id));
  }

  function handleDislikeLikeClick(e) {
    let spanEl = e.target.closest('.imgSpan');
    
    if(likedImages.includes(spanEl.id)){
      dispatch(imageRemoved(spanEl.id))
    }

    //props.removeDislikedImage(spanEl.id);
    dispatch(dataRemoved(spanEl.id));
    props.setImageWasDeleted(true);
  }

  const images = allImages.map(entry => 
    (<p className='imgSpan' id={entry.url} key={nanoid()}>
      <img src={entry.url} height='350' />
        <button className={likedImages.includes(entry.url)?"likeBtn likeBtn-clicked":"likeBtn"} onClick={handleLikeClick}>Like</button>
        <button className="dislikeBtn" onClick={handleDislikeLikeClick}>Dislike</button>
    </p>));

  return (
    <main>
      <h2>Main</h2>
      <span>{images}</span>
    </main>
  );
}
