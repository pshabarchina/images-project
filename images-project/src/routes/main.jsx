import React from 'react';

export default function Main(props) {
  
  function handleLikeClick(e) {
    let spanEl = e.target.closest('.imgSpan');
    if (!props.likedImgs.includes(spanEl.id)) 
      props.addLikedImage(spanEl.id);
  }

  function handleDislikeLikeClick(e) {
    let spanEl = e.target.closest('.imgSpan');
    
    if (props.likedImgs.includes(spanEl.id)) 
      props.removeFromLikedImages(spanEl.id);

    props.removeDislikedImage(spanEl.id);
    props.setImageWasDeleted(true);
  }

  const images = props.data.map(entry => 
    (<p className='imgSpan' id={entry.url}>
      <img src={entry.url} height='350' />
        <button className={props.likedImgs.includes(entry.url)?"likeBtn likeBtn-clicked":"likeBtn"} onClick={handleLikeClick}>Like</button>
        <button className="dislikeBtn" onClick={handleDislikeLikeClick}>Dislike</button>
    </p>));

  return (
    <main>
      <h2>Main</h2>
      <span>{images}</span>
    </main>
  );
}
