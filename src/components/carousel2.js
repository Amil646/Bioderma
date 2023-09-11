 import Carousel from 'react-bootstrap/Carousel';
 import sekil1 from  '../photos/image11.png'
 import sekil12 from  '../photos/img44.png'
 import Caption2 from './caption2.js'

function Ex() {
  return (
    <Carousel controls={false} style={{marginLeft:"10px"}}>
      <Carousel.Item   interval="1000">
          <Caption2/>
      </Carousel.Item>

      <Carousel.Item  interval="1000">
          <Caption2/>
      </Carousel.Item>

      <Carousel.Item interval="1000" >
          <Caption2/>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default Ex;