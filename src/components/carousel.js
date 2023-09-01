  import Carousel from 'react-bootstrap/Carousel';
  import sekil9 from  '../sekil/image40.png'
import Caption from './caption.js'

function Carousell() {
  return (
    <Carousel controls={false} style={{width:"1300px",height:"300px",minWidth:"1300px",textAlign: "Center",borderRadius:"10px"}}>
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