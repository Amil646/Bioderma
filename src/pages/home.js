 import sekil1 from  '../sekil/image11.png'
 import sekil12 from  '../sekil/img44.png'
 import sekil2 from  '../sekil/img41.png'
 import sekil21 from  '../sekil/image12.png' 
    import sekil3  from'../sekil/Frame 1601.png'
    import icon1 from '../sekil/Icon5.png'
    import sekil31 from'../sekil/Frame 1601 (1).png'
    import sekil32 from'../sekil/Frame 1601 (2).png'
    import sekil33  from'../sekil/Frame 1601 (3).png'
    import sekil4  from'../sekil/Frame 47652.png'
    import sekil5 from  '../sekil/image20.png'
    import sekil6 from  '../sekil/image31.png'
    import sekil7 from  '../sekil/image32.png'
    import sekil8 from  '../sekil/image33.png'
    import sekil9 from  '../sekil/image40.png'
    import sekil41 from  '../sekil/img 1.png'
    import sekil42 from  '../sekil/img 2.png'
    import sekil43 from  '../sekil/img 3.png'
    import sekil44 from  '../sekil/img 4.png'

    import Carousell from '../components/carousel.js'
 import 'bootstrap/dist/css/bootstrap.min.css';
 import '../css/App.css'

import Ex from '../components/carousel2.js'
import Discount from '../components/discount.js'
import More from '../components/more.js'
import Choose from '../components/choose.js'



function Index() {
  const mouseOver= () => {

  }
  
 

  return (
    <>
<div className="container justify-content-center" style={{ minWidth:"1300px",width:"1300px",marginTop:"-20px"}}>
  <div className="row " style={{marginLeft:"-70px"}}>
   <div className="col-8">
   <Ex/>

   </div>
    <div className="col-4" style={{marginLeft:"-30px"}}>
        <a href="/aksiya"  style={{textDecoration:"none"}}>

    <Discount/>
    </a></div>
   </div>

  </div>
  <div  className="container justify-content-center"    style={{ minWidth:"1300px",width:"1300px",}}>
  <div className="row" style={{marginLeft:"-70px"}}>
    <div className="col">
<h4 style={{ fontFamily: "Poppins",
fontSize: "20px",
lineHeight: "40px",
letterSpacing: "0em",
textAlign:"left",
color:"#009BC7",
fontWeight: "400",
marginLeft:"95px",}}>Endirimli məhsullar</h4>
      <div id="box" style={{ width:"217px", position: "relative", borderBottom: "3px solid  #009BC7",
        marginLeft:"95px", marginTop: "-15px",}}></div>
        </div>

<div className="col text-center" style={{ width:"147px",marginLeft:"760px"}}>
 <a href="/aksiya" style={{ textDecoration:"none",}}><p  className="text-end"  style={{ fontFamily:"Poppins",
fontSize: "18px",
lineHeight: "27px",
letterSpacing: "0em",
textAlign:"right",
border:"1px solid rgba(68, 74, 81, 1)",
padding: " 12px",
display: "inline",
color:"rgba(68, 74, 81, 1)",
borderRadius:"4px",
fontWeight: "400",}}>Hamısına bax</p></a></div></div>

</div>
<br/>
<div className="container justify-content-center"  style={{minWidth: "1300px"}}>
 <Choose/></div>
<br/>
<br/>


<div className="container justify-content-center"  style={{minWidth: "1300px"}}>
  <Choose/></div>
     <div className="container justify-content-center" style={{ minWidth:"1300px",width:"1300px",}}>
<More/>
  </div>
 
  
  <div className="justify-content-center mb-5 text-center">
      <a href="/blog" className="btn btn-outline-info" style={{ height:"45px", width: "278px", fontFamily: "Poppins", fontSize: "18px", fontWeight: "400",fontFamily: "Poppins",
lineHeight: "27px",
letterSpacing: "0em",
textAlign:"center",
border:"1px solid #009BC7",
padding: "10px 80px",
display: "inline",
color: "#009BC7",textDecoration: "none", marginLeft:"100px"}}>
   Daha çox</a>

 <div  className="container justify-content-center"    style={{ minWidth:"1300px",width:"1300px",}}>
  <div className="row" style={{marginLeft:"-70px"}}>
<br/>

    <div className="col">
<h4 style={{ fontFamily: "Poppins",
fontSize: "20px",
lineHeight: "40px",
letterSpacing: "0em",
textAlign:"left",
color:"black",
fontWeight: "500",
marginLeft:"95px",marginTop:"50px"}}>Dəri qulluğu rutini</h4>
      <div id="box" style={{ width:"217px",
        position: "relative",
        borderBottom: "3px solid  black",
        marginLeft:"95px",
        marginTop: "-15px",}}></div>
        </div>        </div>
        </div>








  </div>
<div className="container justify-content-center" style={{ minWidth:"1300px",width:"1300px",}}>
  <div className="row" style={{marginLeft:"-70px"}}>
    <div className="col-4" >
<div className="card-borderless" style={{ width:"380px", marginLeft:"95px",height:"408px"}}>
<div style={{ width:"377px", height:"400px",overflow:"hidden"}}>
  <img src={sekil6} className="cardi "   width="380px" height="400px"/>
</div>
  <div className="card-body">
  <br/>
    <h5 className="card-text">1.Addım: Təmizlə</h5>
    <br/>  <br/>

        <p className="card-text" style={{color: "rgba(117, 117, 117, 1)",fontFamily: "Poppins", fontSize: "18px", fontWeight: "400",lineHeight: "21px",textAlign:"center",marginLeft:"50px"}}>Dəri tipinə uyğun təmizləyicilər</p>

        <a href="/mehsullar" className="btn justify-content-center mt-3 " style={{fontFamily: "Poppins", fontSize: "18px", fontWeight: "400",lineHeight: "30px",height:"45px", width:"278px", border:"1px solid", marginLeft: "50px"}}>Kəşf et</a>

  </div>
</div>
</div>
 <div className="col-4"  style={{marginLeft:"-20px"}}>
<div className="card-borderless" style={{ width:"380px", marginLeft:"60px",height:"408px"}}>
<div style={{ width:"377px", height:"400px",overflow:"hidden"}}>
  <img src={sekil7} className="cardi "   width="380px" height="400px"/>
</div>    
  <div className="card-body">
    <br/>

    <h5 className="card-text">2. Addım: Müalicə et və qulluq (nəmləndir) et</h5>
          <br/>
  <p className="card-text" style={{color: "rgba(117, 117, 117, 1)",fontFamily: "Poppins", fontSize: "18px", fontWeight: "400",lineHeight: "21px",textAlign:"center",marginLeft:"50px"}}>Dəri tipinə uyğun qulluq məhsulları</p>

       <a href="/mehsullar" className="btn justify-content-center mt-3 " style={{fontFamily: "Poppins", fontSize: "18px", fontWeight: "400",lineHeight: "30px",height:"45px", width:"278px", border:"1px solid", marginLeft: "50px",}}>Kəşf et</a>
  </div>
</div>
</div>
 <div className="col-4"  style={{marginLeft:"-20px"}}>
<div className="card-borderless" style={{ width:"380px", marginLeft:"25px",height:"408px"}}>
<div style={{ width:"377px", height:"400px",overflow:"hidden"}}>
  <img src={sekil8} className="cardi "   width="380px" height="400px"/>
</div> 
  <div className="card-body">
    <br/>

    <h5 className="card-text">3. Addım: Günəşdən qoru</h5>
      <br/>  <br/>

    <p className="card-text" style={{color: "rgba(117, 117, 117, 1)",fontFamily: "Poppins", fontSize: "18px", fontWeight: "400",lineHeight: "21px",textAlign:"center",marginLeft:"50px"}}>Dəri tipinə uyğun Günəş qoruyucuları</p>
    <a href="/mehsullar" className="btn justify-content-center mt-3 " style={{fontFamily: "Poppins", fontSize: "18px", fontWeight: "400",lineHeight: "30px",height:"45px", width:"278px", border:"1px solid", marginLeft: "50px",}}>Kəşf et</a>

  </div>
</div>
</div>
</div></div>
<br/><br/><br/><br/><br/><br/><br/><br/><br/>


<div className="container justify-content-center" style={{ minWidth:"1300px",width:"1300px",}}>

<div style={{marginLeft:"13px"}}>
 <Carousell/>
</div>
</div>
<br/><br/><br/><br/>

</>
)
}

export default Index;
