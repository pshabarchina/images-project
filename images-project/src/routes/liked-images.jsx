import { useLocation } from 'react-router-dom';

export default function LikedImages() {
  let location = useLocation();
 
  const images = location.state.map(entry => (<p><img src={entry} height='200' key={entry} /><span>      </span></p>));

  return (
    <main>
      <h2>Liked Images</h2>
      <span>{images}</span>
    </main>
  );
}
