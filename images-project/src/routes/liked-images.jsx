export default function LikedImages(props) {
 
  const images = props.likedImgs.map(entry => (<p><img src={entry} height='200'/></p>));

  return (
    <main>
      <h2>Liked Images</h2>
      <span>{images}</span>
    </main>
  );
}
