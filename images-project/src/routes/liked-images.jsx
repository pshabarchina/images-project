import { useSelector } from 'react-redux';

export default function LikedImages(props) {
  const likedImages = useSelector(state => state.images);
  const images = likedImages.map(entry => (<span><img src={entry} height='350'/><span>  </span></span>));
 
  //const images = props.likedImgs.map(entry => (<span><img src={entry} height='350'/><span>  </span></span>));

  return (
    <main>
      <h2>Liked Images</h2>
      <span>{images}</span>
    </main>
  );
}
