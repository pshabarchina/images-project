import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

export default function LikedImages() {
  const likedImages = useSelector(state => state.likedImages);
  const images = likedImages.map(entry => (<span key={nanoid()}><img src={entry} height='350'/><span>  </span></span>));

  return (
    <main>
      <h2>Liked Images</h2>
      <span>{images}</span>
    </main>
  );
}
