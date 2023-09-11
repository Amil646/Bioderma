  import Carousel from 'react-bootstrap/Carousel';
  import sekil9 from  '../photos/image40.png'
import Caption from './caption.js'
import '../css/caption.css'

function Carousell() {
  return (
    <Carousel controls={false} id="carousel1" >
      <Carousel.Item  >
          <Caption/>
        </Carousel.Item>

      <Carousel.Item interval={1000}>
          <Caption/>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
          <Caption/>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default Carousell;