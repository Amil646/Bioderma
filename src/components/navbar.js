 import 'bootstrap/dist/css/bootstrap.min.css';
 import sekil1 from  '../sekil/img51.png'
import sekil2 from  '../sekil/img52.png'
import sekil3 from  '../sekil/img53.png'
import sekil4 from  '../sekil/img54.png'
function Body(){
  const stil={
    fontFamily: "Poppins",
fontSize: "14px",
fontWeight: "400",
lineHeight: "21px",
letterSpacing: "0em",
color: "black",
}
  return(


  <>

     <div className="container-fluid" style={{backgroundColor:"rgba(255, 197, 45, 1)",minWidth:"1300px",height:"110px",marginTop:"-100px"}}   >
    
<ul class="nav justify-content-center" >
<li class="nav-item " style={{marginLeft:"-40px"}}>

  <img src={sekil1}  height= "110px"
width="86px"  />
  </li>
  <li class="nav-item " style={{marginLeft:"10px",textAlign:"left",marginTop:"30px"}}>
<span style={stil}>Səhiyyə mütəxəssisləri ilə <br/>40 illik iş təcrübəsi</span> </li>
<li>
<div  style={{marginLeft:"30px",borderRight: "1px solid rgba(197, 165, 77, 1)", height: "43px",position:"relative",marginTop:"30px"}}>
</div> </li>
<li class="nav-item "  style={{marginLeft:"10px",}}>

  <img src={sekil2}  height= "110px"
width="86px"/>
  </li>
  <li class="nav-item " style={{textAlign:"left",marginTop:"40px"}}>
<span style={stil}>Dəriyə dərin hörmət</span> </li>
<li>
<div  style={{marginLeft:"50px",borderRight: "1px solid rgba(197, 165, 77, 1)", height: "43px",position:"relative",marginTop:"30px"}}>
</div> </li>
<li class="nav-item " style={{marginLeft:"10px",}}>

  <img src={sekil3}  height= "110px"
width="86px"/>
  </li>
  <li class="nav-item " style={{textAlign:"left",marginTop:"30px",}}>
<span style={stil}>Effektivlik və təhlükəsizlik tibbi <br/>
nəzarət altında sınaqdan keçirilmişdir</span></li>
<li>
<div  style={{marginLeft:"20px",borderRight: "1px solid rgba(197, 165, 77, 1)", height: "43px",position:"relative",marginTop:"30px"}}>
</div> </li>
<li class="nav-item "  style={{marginLeft:"10px",}} >

  <img src={sekil4}  height= "110px"
width="86px"/>
  </li>
  <li class="nav-item " style={{textAlign:"left",marginTop:"30px"}}>
<span style={stil}>Səhiyyə mütəxəssisləri ilə <br/>
40 illik iş təcrübəsi</span> 
 </li>

  </ul>
    
        </div>

 
  
  </>
);
}
export default Body;