import sekil1 from  '../photos/fc.png';
import sekil3 from  '../photos/wp.png';
import sekil4 from  '../photos/insta.png';
import sekil2 from  '../photos/youtube.png';
import resm11 from '../photos/image 1.png';
import resm12 from '../photos/image 6.png';
import resm13 from '../photos/image 7.png';
import resm14 from '../photos/image 8.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/footer.css'

function Footer() {

return(
<>
<div className="container"  id="footercon" >
	<div className="row">

		<div className="col-3  mt-2" >
		  <a href="/"><img src={ resm12} alt="naos" className="footerimg" /></a> 
      <br/>	
  		<p className="footerp" >
			  NAOS dünyanın ilk müstəqil dəriyə qulluq şirkətlərindən biridir. 
		    NAOS eko biologiyadan ilhamlanaraq 3 marka yaratdı</p>
        <div className="footerdiv"></div>	    	
	  </div>

	  <div className="col-2" >
	    <header  className="footerh" >Kateqoriyalar</header>
      <ul  className="footerul" > 
	     <li className="footerli"><a href="/brendler" className="footera">Brendlər və Məhsullar</a></li>
	     <li className="footerli"><a href="/mehsullar" className="footera">Qulluq setləri</a></li>
	     <li className="footerli"><a href="/mehsullar" className="footera">Üz qulluğu</a></li>
	     <li className="footerli"><a href="/mehsullar" className="footera" >Bədən qulluğu</a></li>
	     <li className="footerli"><a href="/mehsullar" className="footera">Günəş qoruyucuları</a></li>
	     <li className="footerli"><a href="/mehsullar" className="footera">Göz yaş alma</a></li>
      </ul>
	  </div>

	  <div className="col-3" >
	    <header className="footerh">Şirkət</header>
      <ul  className="footerul" > 
	     <li  className="footerli"><a href="/haqqimizda" className="footera">Haqqımızda</a></li>
	     <li  className="footerli"><a href="/faydali" className="footera">Faydalı</a></li>
	     <li  className="footerli"><a href="/aksiyalar" className="footera">Aksiyalar və Kompaniyalar</a></li>
	    </ul>
	  </div>

	  <div className="col-2"  style={{marginLeft:"-60px"}}>
	    <header className="footerh">Kömək</header>
      <ul  className="footerul" > 
	     <li  className="footerli"><a href="/faq" className="footera">FAQ</a></li>
	     <li  className="footerli"><a href="/zemanet-sertleri" className="footera">Ödəniş və çatdırılma</a></li>
	     <li  className="footerli"><a href="/zemanet-sertleri" className="footera">Zəmanət şərtləri</a></li>
       <li  className="footerli"><a href="/magazalar" className="footera">Mağaza ünvanları</a></li>
      </ul>
	  </div>
  </div>

	<div className="row">
	  <div className="col-2" style={{marginLeft:"15px"}}>
		  <div className="footerdiv2">
        <a href="/brendler"><img src={resm11} alt="11"  className="footerimg2"/></a>
        <a href="#"><img src={sekil1} alt="12"    className="footerimg21" /></a>	
        <a href="#"><img src={sekil4} alt="13" className="footerimg22" /></a>		
      </div>
 	  </div>
 	  	<div className="col-2"  >
		    <div  className="footerdiv2">
         <a href="/brendler"><img src={resm13} alt="21"  className="footerimg3"/></a>
         <a href="#"><img src={sekil1} alt="22" className="footerimg31"/></a>	
         <a href="#"><img src={sekil4} alt="23" className="footerimg32"/ ></a>		
        </div>
	  </div>
		<div className="col-2" >
		  <div  className="footerdiv2">
        <a href="/brendler"><img src={resm14}   alt="33" className="footerimg4" /></a>
        <a href="#"><img src={sekil1}  alt="32" className="footerimg21" /></a>
        <a href="#"><img src={sekil4}  alt="31" className="footerimg22"  /></a>		
      </div>
	  </div>
	</div>
	
<div   className="container mb-3" id="footercon1" >
	<div className="row justify-content-between" style={{marginTop:"43px",}}>

		<div className="col-4">
   		<p className="footerp2">Bütün hüquqlar qorunur. © 2022 BIODERMA</p>
		</div>
    <div className="col-2" style={{marginLeft:"-90px",}}>
          <a href="#" ><img src={sekil1}  alt="3" className="footerimg5" /></a>
          <a href="#"><img src={sekil4} alt="3" className="footerimg5"/></a>
          <a href="#"><img src={sekil3} alt="3" className="footerimg5"/></a>
          <a href="#"><img src={sekil2} alt="3" className="footerimg5" /></a>
    </div >
    <div className="col-2" style={{marginRight:"55px"}} >
          <p className="footerp3">Bu bir Marcom məhsuludur.</p>
    </div>
  </div>
  </div>
</div>
</>

	)
}
export default Footer;