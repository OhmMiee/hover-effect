import react, {useEffect} from 'react';
import './App.css';
import hoverEffect from 'hover-effect';
import image from './images/image.jpeg'
import overay from './images/overlay.png'
function App() {
  useEffect(()=>{
    var image_animate = new hoverEffect({
      parent: document.querySelector('.image'),
      intensity: .3,
      image1: image,
      image2: image,
      displacementImage: overay
    })
  })
  return (
    <div className="App">
      <div className="container">
        <div className="item">
          <div className="header">
            <div className="heading-1">Mouthwash</div>
            <div className="heading-2">02/03</div>
          </div>
          <div className="image"></div>
          <div className="footer">
            Being so stupid!
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
