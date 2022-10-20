import React from 'react';

export default function Main(props) {
  
  function handleLikeClick(e) {
    let spanEl = e.target.closest('.imgSpan');
    if (!props.likedImgs.includes(spanEl.id)) 
      props.addLikedImage(spanEl.id);
    else {
      props.removeLikedImage(spanEl.id);
    }
  }

  const images = props.data.map(entry => 
    (<p className='imgSpan' id={entry.url}>
      <img src={entry.url} height='200' />
        <button className={props.likedImgs.includes(entry.url)?"likeBtn likeBtn-clicked":"likeBtn"} onClick={handleLikeClick}>Like</button>
    </p>));

  return (
    <main>
      <h2>Main</h2>
      <span>{images}</span>
    </main>
  );
}
