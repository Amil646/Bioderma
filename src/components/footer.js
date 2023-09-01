 import sekil1 from  '../sekil/fc.png';
import sekil3 from  '../sekil/wp.png';
import sekil4 from  '../sekil/insta.png';
import sekil2 from  '../sekil/youtube.png';
 import resm11 from '../sekil/image 1.png';
 import resm12 from '../sekil/image 6.png';
 import resm13 from '../sekil/image 7.png';
 import resm14 from '../sekil/image 8.png';
  import 'bootstrap/dist/css/bootstrap.min.css';


function Footer() {
	const stil1={ fontFamily: "Poppins",
  fontSize: "14px",fontWeight: "400",
  lineHeight: "21px",
  letterSpacing: "0em",
  textDecoration:"none",
  color: "rgba(117, 117, 117, 1)",
  };
  const stil11={fontFamily: "Poppins",
fontSize: "16px",
fontWeight: "500",
lineHeight: "24px",
letterSpacing: "0em",
textAlign:"left",
width: "177px",
height: "24px",marginTop: "43px",marginLeft: "10px",};
const stil2={borderRadius: "10px",
height: "123px",
width: "175px",
border: "1px solid #9CA3AF",
borderRadius:"10px",
marginLeft:"330px",
marginTop: "-130px",
position:"absolute",
};

return(
<>
<div className="container"  style={{height:"508px",minWidth:"1300px",}}>
	<div className="row">
		<div className="col-3  mt-2" >
	
		<a href="/"><img src={ resm12} alt="222" height="99px" width="150px" style={{marginLeft:"-95px"}} />
		</a> 
  <br/>	
  		<p style={{width:"195px",height:"72px",marginLeft: "25px",fontFamily: "Poppins",
 fontSize: "12px",fontlieiHt: "400",lineHeight: "18px",
letterSpacing: "0em",textAlign:"left",color: "#282828",}}>
			NAOS dünyanın ilk müstəqil dəriyə qulluq şirkətlərindən biridir. 
		    NAOS eko biologiyadan ilhamlanaraq 3 marka yaratdı</p>
		    <div style={{ borderRight: "1px solid rgba(229, 218, 212, 1)", height: "380px",marginTop:"-150px",}} ></div>	    	
	
	</div>
	<div className="col-2" >
		<header style={stil11} >Kateqoriyalar</header>
<ul style={{ listStyleType: "none",marginLeft: "-20px",  alignItems:"left",
}} > 
	<li style={{textAlign:"left"}}><a href="/brendler" style={stil1}>Brendlər və Məhsullar</a></li>
	<li style={{textAlign:"left"}}><a href="/mehsullar"style={stil1}>Qulluq setləri</a></li>
	<li  style={{textAlign:"left"}}><a href="/mehsullar"style={stil1}>Üz qulluğu</a></li>
	<li  style={{textAlign:"left"}}><a href="/mehsullar" style={stil1} >Bədən qulluğu</a></li>
	<li  style={{textAlign:"left"}}><a href="/mehsullar" style={stil1}>Günəş qoruyucuları</a></li>
	<li  style={{textAlign:"left"}}><a href="/mehsullar" style={stil1}>Göz yaş alma</a></li>

</ul>
	</div>
	<div className="col-3" >
		<header style={stil11}>Şirkət</header>
<ul style={{listStyleType:"none",marginLeft: "-20px",}} > 

	<li  style={{textAlign:"left"}}><a href="/haqqimizda" style={stil1}>Haqqımızda</a></li>
	<li  style={{textAlign:"left"}}><a href="/faydali" style={stil1}>Faydalı</a></li>
	<li  style={{textAlign:"left"}}><a href="/aksiyalar" style={stil1}>Aksiyalar və Kompaniyalar</a></li>

</ul>
	</div>
	<div className="col-2"  style={{marginLeft:"-60px"}}>
		<header style={stil11}>Kömək</header>
<ul style={{ listStyleType:"none",marginLeft: "-20px",}}  > 

	<li  style={{textAlign:"left"}}><a href="/faq" style={stil1}>FAQ</a></li>
	<li  style={{textAlign:"left"}}><a href="/zemanet-sertleri" style={stil1}>Ödəniş və çatdırılma</a></li>
	<li  style={{textAlign:"left"}}><a href="/zemanet-sertleri" style={stil1}>Zəmanət şərtləri</a></li>
    <li  style={{textAlign:"left"}}><a href="/magazalar" style={stil1}>Mağaza ünvanları</a></li>

</ul>
	</div>
	</div>
	<div className="row">
	<div clasame="col-2"></div>
	<div className="col-2" >
		<div style={stil2}>
   <a href="/brendler"><img src={resm11}  alt="11"  width="150px" height="22px" style={{marginLeft:"5px",marginTop:"30px"}} /></a>
<a href="#"><img src={sekil1} alt="12"    width="24px" height="24px" style={{marginTop:"30px"}} /></a>	
<a href="#"><img src={sekil4} alt="13" width="24px" height="24px" style={{marginLeft:"16px",marginTop: "30px",}} /></a>		
</div>
	</div>	<div className="col-2"  >
		<div style={stil2}>
   <a href="/brendlər"><img src={resm13}  alt="21" width="150px" height="45px" style={{marginLeft:"5px",marginTop:"15px"}} /></a>
<a href="#"><img src={sekil1} alt="22"width="24px" height="24px" style={{marginTop:"20px" }}/></a>	
<a href="#"><img src={sekil4} alt="23" width="24px" height="24px" style={{marginLeft:"16px",marginTop:"20px"}}/ ></a>		
</div>
	</div>
		<div className="col-2" >
		<div style={stil2}>
   <a href="/brendler"><img src={resm14}   alt="33" width="150px" height="19px" style={{marginLeft:"5px",marginTop:"35px"}}/></a>
<a href="#"><img src={sekil1}  alt="32" width="24px" height="24px" style={{marginTop:"30px"}} /></a>
	<a href="#"><img src={sekil4}  alt="31" width="24px" height="24px" style={{marginLeft:"16px",marginTop: "30px"}} /></a>		
</div>
	</div>
	</div>
	
<div   className="container mb-3" style={{width: "1210px",height: "30px",minWidth:"1300px"}}>
	<div className="row justify-content-between" style={{marginTop:"43px",}}>
		<div className="col-4">

		<p style={{fontFamily: "Poppins",
fontSize: "14px",
fontWeight: "500",
lineHeight: "21px",
letterSpacing: "0em",
textAlign:"left",
color: "rgba(117, 117, 117, 1)"}}>Bütün hüquqlar qorunur. © 2022 BIODERMA</p></div>
<div className="col-2" style={{marginLeft:"-90px",}}>

<a href="#" ><img src={sekil1}  alt="3"width="24px" height="24x"  style={{ marginRight:"10px"}}/></a>
<a href="#"><img src={sekil4} alt="3" width="24px" height="24x"style={{ marginRight:"10px"}}/></a>
<a href="#"><img src={sekil3} alt="3" width="24px" height="24x" style={{ marginRight:"10px"}}/></a>
<a href="#"><img src={sekil2} alt="3" width="24px" height="24x" /></a>
</div >
<div className="col-2" ><p style={{fontFamily: "Poppins",
fontSize: "14px",
fontWeight: "500",
lineHeight: "21px",
letterSpacing: "0em",
textAlign:"right",
color: "rgba(117, 117, 117, 1)"}}>Bu bir Marcom məhsuludur.</p></div>
</div>
</div>
</div>
</>

	)
}
export default Footer;