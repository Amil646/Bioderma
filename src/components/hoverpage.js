import resm11 from '../sekil/image 1.png';
 import resm12 from '../sekil/image 6.png';
 import resm13 from '../sekil/image 7.png';
 import resm14 from '../sekil/image 8.png';
 import {useState} from 'react';

 function Part(props) {
 	
   
  const stil1={ textDecoration:"none",  
  color: "rgba(75, 75, 75, 1)",
  fontFamily: "Poppins",fontWeight:"300",
  fontSize: "14px",
  lineHeight: "21px",
  letterSpacing: "0em",
  width:"397px"};
   const stil2={ textDecoration:"none",  
  color: "rgba(0, 0, 0, 1)",fontStyle:"bold",
  fontFamily: "Poppins",fontWeight:"600",
  fontSize: "14px",
  lineHeight: "21px",
  letterSpacing: "0em",};
  
 
  
return(

	<div className="container nav" style={{height:"634px",width:"1300px",minWidth:"1300px"}}    >
        <div className="col-3 nav-item " style={{marginLeft:"30px"}} >
    <header style={{textAlign:"left",}} ><img src={resm11}  alt="11"  width="200px" height="40px" style={{marginLeft:"5px",marginTop:"30px"}} /></header>
    
<ul  style={{ listStyleType: "none",marginLeft: "-20px",  alignItems:"left",marginTop:"45px"
}} > 
  <li style={{textAlign:"left"}}><a href="#" style={stil1}><b style={stil2}>Atoderm -</b>Quru, çox quru və atopik dəri üçün qulluq</a></li>
  <li style={{textAlign:"left"}}><a href="#"style={stil1}><b style={stil2}>Sebium -</b>Qarışıq, yağlı və akneyə meyilli dəri üçün qulluq</a></li>
  <li  style={{textAlign:"left"}}><a href="#"style={stil1}><b style={stil2}>Sensibio  -</b>Həssas və qızartılı dəri üçün qulluq</a></li>
  <li  style={{textAlign:"left"}}><a href="#" style={stil1} ><b style={stil2}>Pigmentbio  -</b>Ləkəli və ləkəyə meyilli dəri üçün qulluq </a></li>
  <li  style={{textAlign:"left"}}><a href="#" style={stil1}><b style={stil2}>Hydrabio  -</b>Nəmsiz dəri üçün qulluq</a></li>
  <li  style={{textAlign:"left"}}><a href="#" style={stil1}><b style={stil2}>Photoderm  -</b>Günəş qoruyucuları</a></li>
   <li  style={{textAlign:"left"}}><a href="#" style={stil1} ><b style={stil2}>Node  -</b>Saç və saç dərisi üçün qulluq</a></li>
  <li  style={{textAlign:"left"}}><a href="#" style={stil1}><b style={stil2}>ABCDerm  -</b>Körpələr və uşaqlar üçün qulluq</a></li>
  <li  style={{textAlign:"left"}}><a href="#" style={stil1}><b style={stil2}>Cicabio  -</b>Zədələnmiş dəri</a></li>  
</ul>
  </div>
  <div className="col-1 nav-item " style={{ borderRight: "1px solid rgba(229, 218, 212, 1)", height: "439px",position:"relative",marginLeft:"20px"}} ></div>	
  <div className="col-3 nav-item " >
    <header style={{textAlign:"left"}} ><img src={resm13}  alt="21" width="229px" height="83px" style={{marginLeft:"5px",marginTop:"15px"}} /></header>
<ul    style={{listStyleType:"none",marginLeft: "-20px",marginTop:"36px"}} > 

  <li  style={{textAlign:"left"}}><a href="#" style={stil1}><b style={stil2}>Osmoclean -</b>Təmizləyici vasitələr</a></li>
  <li  style={{textAlign:"left"}}><a href="#" style={stil1}><b style={stil2}>Celullar Water -</b>Hüceyrə daxili qulluq</a></li>
  <li  style={{textAlign:"left"}}><a href="#" style={stil1}><b style={stil2}>Intensive Molecular   -</b>Intensiv qulluq</a></li>
  <li  style={{textAlign:"left"}}><a href="#" style={stil1}><b style={stil2}>Age correction -</b>Gözəl yaş alma</a></li>
  <li  style={{textAlign:"left"}}><a href="#" style={stil1}><b style={stil2}>Esthe-white   -</b>Ləkə və pigmentasiya əleyhinə qulluq</a></li>
  <li  style={{textAlign:"left"}}><a href="#" style={stil1}><b style={stil2}>Body care  -</b>Bədən  qulluğu</a></li>
  <li  style={{textAlign:"left"}}><a href="#" style={stil1}><b style={stil2}>Sun care  -</b>Günəşdən qorunma*</a></li>

</ul>
  </div>
    <div className="col-1 nav-item " style={{ borderRight: "1px solid rgba(229, 218, 212, 1)", height: "439px",position:"relative"}} ></div>	

  <div className="col-3 nav-item " >
    <header style={{textAlign:"left"}} ><img src={resm14}   alt="33" width="208px" height="43px" style={{marginLeft:"5px",marginTop:"35px"}}/></header>
<ul    style={{listStyleType:"none",marginLeft: "-20px",marginTop:"50px"}} > 

  <li  style={{textAlign:"left"}}><a href="#" style={stil1}><b style={stil2}>Cleansers -</b>Saf Təmizləyi vasitələr</a></li>
  <li  style={{textAlign:"left"}}><a href="#" style={stil1}><b style={stil2}>Pure Actives -</b>Saf Molekullar</a></li>
  <li  style={{textAlign:"left"}}><a href="#" style={stil1}><b style={stil2}>Moisturizers  --</b>Saf Nəmləndiricilər</a></li>
    <li  style={{textAlign:"left"}}><a href="#" style={stil1}><b style={stil2}>Sunscreens  - -</b>SAF Günəş qoruyucuları</a></li>


</ul>
  </div>


  </div>
  

)

}

       export default Part;