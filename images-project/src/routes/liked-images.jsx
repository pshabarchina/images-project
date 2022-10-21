export default function LikedImages(props) {
 
  const images = props.likedImgs.map(entry => (<span><img src={entry} height='350'/><span>  </span></span>));

  return (
    <main>
      <h2>Liked Images</h2>
      <span>{images}</span>
    </main>
  );
}
