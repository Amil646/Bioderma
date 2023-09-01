 import Carousel from 'react-bootstrap/Carousel';
 import sekil1 from  '../sekil/image11.png'
 import sekil12 from  '../sekil/img44.png'
 import '../css/App.css'

function Ex() {
  return (
    <Carousel controls={false} style={{marginLeft:"10px"}}>
            <Carousel.Item   interval="1000">
  <div className="col-8  mb-5">  
    <a href="/mehsullar" style={{textDecoration:"none"}}> 
    <img src={sekil1}  height="400px" width="773px" style={{marginLeft:"85px",index:" -1",borderRadius:"10px"}}/>
        <div  style={{fontFamily: "Poppins",
fontSize: "28px",
lineHeight: "40px",
letterSpacing: "0em",
textAlign:"left",
color:" #444A51",
width: "273px",
height: "120px",
position: "absolutete",
marginTop: "-270px",
marginLeft: "140px",}}>
<p>Ləkəyə qarşı <br/><b>Parlaqladıcı</b> qayğı: <b style={{color:"#009BC7"}}> 
Pigmentbio</b></p></div></a>
      
       <img src={sekil12}  style={{height:"253px",width:"106.29px" ,
marginLeft: "600px",marginTop: "-150px",
borderRadius: "0px",}}/>
    </div>
                </Carousel.Item>
                  <Carousel.Item  interval="1000">

    <div className="col-8  mb-5">  
    <a href="/mehsullar" style={{textDecoration:"none"}}> 
    <img src={sekil1}  height="400px" width="773px" style={{marginLeft:"85px",index:" -1",borderRadius:"10px"}}/>
        <div style={{fontFamily: "Poppins",
fontSize: "28px",
lineHeight: "40px",
letterSpacing: "0em",
textAlign:"left",
color:" #444A51",
width: "273px",
height: "120px",
position: "absolutete",
marginTop: "-270px",
marginLeft: "140px",}}>
<p>Ləkəyə qarşı <br/><b>Parlaqladıcı</b> qayğı: <b style={{color:"#009BC7"}}> 
Pigmentbio</b></p></div></a>
      
       <img src={sekil12}  style={{height:"253px",
width:"106.29px" ,marginLeft: "600px",
marginTop: "-150px",borderRadius: "0px",}}/>
    </div>

      </Carousel.Item>
              <Carousel.Item interval="1000" >

     <div className="col-8  mb-5">  
    <a href="/mehsullar" style={{textDecoration:"none"}}> 
    <img src={sekil1}  height="400px" width="773px" style={{marginLeft:"85px",index:" -1",borderRadius:"10px"}}/>
        <div style={{fontFamily: "Poppins",
fontSize: "28px",
lineHeight: "40px",
letterSpacing: "0em",
textAlign:"left",
color:" #444A51",
width: "273px",
height: "120px",
position: "absolutete",
marginTop: "-270px",
marginLeft: "140px",}}>
<p>Ləkəyə qarşı <br/><b>Parlaqladıcı</b> qayğı: <b style={{color:"#009BC7"}}> 
Pigmentbio</b></p></div></a>
      
       <img src={sekil12}  style={{height:"253px",
width:"106.29px" ,marginLeft: "600px",
marginTop: "-150px",borderRadius: "0px",}}/>
    </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Ex;