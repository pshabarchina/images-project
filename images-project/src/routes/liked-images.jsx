import { useSelector } from 'react-redux';

export default function LikedImages(props) {
  const likedImages = useSelector(state => state.likedImages);
  const images = likedImages.map(entry => (<span><img src={entry} height='350'/><span>  </span></span>));

  return (
    <main>
      <h2>Liked Images</h2>
      <span>{images}</span>
    </main>
  );
}
