import Carousel from 'react-bootstrap/Carousel';
 import sekil1 from  '../sekil/image11.png'
 import sekil12 from  '../sekil/img44.png'
 import '../css/App.css'
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
