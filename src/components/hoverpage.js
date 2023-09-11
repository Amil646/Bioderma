import resm11 from '../photos/image 1.png';
 import resm12 from '../photos/image 6.png';
 import resm13 from '../photos/image 7.png';
 import resm14 from '../photos/image 8.png';
 import {useState} from 'react';
 import '../css/hover.css'

  export default  function Part(props) {
 
return(
<div className="container nav" id="hovercon">

<div className="col-3 nav-item " style={{marginLeft:"30px"}} >
 <header className="hoverli" ><img src={resm11}  alt="11"  className="hoverimg"/></header>
 <ul  className="hoverul" > 
  <li className="hoverli"><a href="#"  className="hovera"><b className="hoverb">Atoderm -</b>Quru, çox quru və atopik dəri üçün qulluq</a></li>
  <li className="hoverli"><a href="#"  className="hovera"><b className="hoverb">Sebium -</b>Qarışıq, yağlı və akneyə meyilli dəri üçün qulluq</a></li>
  <li className="hoverli"><a href="#" className="hovera"><b className="hoverb">Sensibio  -</b>Həssas və qızartılı dəri üçün qulluq</a></li>
  <li className="hoverli"><a href="#" className="hovera"><b className="hoverb">Pigmentbio  -</b>Ləkəli və ləkəyə meyilli dəri üçün qulluq </a></li>
  <li className="hoverli"><a href="#" className="hovera"><b className="hoverb">Hydrabio  -</b>Nəmsiz dəri üçün qulluq</a></li>
  <li className="hoverli"><a href="#" className="hovera"><b className="hoverb">Photoderm  -</b>Günəş qoruyucuları</a></li>
  <li className="hoverli"><a href="#" className="hovera"><b className="hoverb">Node  -</b>Saç və saç dərisi üçün qulluq</a></li>
  <li className="hoverli"><a href="#" className="hovera"><b className="hoverb">ABCDerm  -</b>Körpələr və uşaqlar üçün qulluq</a></li>
  <li className="hoverli"><a href="#" className="hovera"><b className="hoverb">Cicabio  -</b>Zədələnmiş dəri</a></li>  
 </ul>
</div>

<div className="col-1 nav-item " id="hdiv1" ></div>	
<div className="col-3 nav-item " >
 <header className="hoverli" ><img src={resm13}   className="hoverimg2" alt="21"/></header>
 <ul    className="hoverul2" > 
  <li  className="hoverli"><a href="#" className="hovera"><b className="hoverb">Osmoclean -</b>Təmizləyici vasitələr</a></li>
  <li  className="hoverli"><a href="#" className="hovera"><b className="hoverb">Celullar Water -</b>Hüceyrə daxili qulluq</a></li>
  <li  className="hoverli"><a href="#" className="hovera"><b className="hoverb">Intensive Molecular   -</b>Intensiv qulluq</a></li>
  <li  className="hoverli"><a href="#" className="hovera"><b className="hoverb">Age correction -</b>Gözəl yaş alma</a></li>
  <li  className="hoverli"><a href="#" className="hovera"><b className="hoverb">Esthe-white   -</b>Ləkə və pigmentasiya əleyhinə qulluq</a></li>
  <li  className="hoverli"><a href="#" className="hovera"><b className="hoverb">Body care  -</b>Bədən  qulluğu</a></li>
  <li  className="hoverli"><a href="#" className="hovera"><b className="hoverb">Sun care  -</b>Günəşdən qorunma*</a></li>
 </ul>
</div>
<div className="col-1 nav-item " id="hdiv2"  ></div>	

<div className="col-3 nav-item "  style={{marginLeft:"15px"}}>
 <header className="hoverli"><img src={resm14}   alt="33" className="hoverimg3" /></header>
 <ul  className="hoverul3" > 
  <li  className="hoverli"><a href="#" className="hovera"><b className="hoverb">Cleansers -</b>Saf Təmizləyi vasitələr</a></li>
  <li  className="hoverli"><a href="#" className="hovera"><b className="hoverb">Pure Actives -</b>Saf Molekullar</a></li>
  <li  className="hoverli"><a href="#" className="hovera"><b className="hoverb">Moisturizers  --</b>Saf Nəmləndiricilər</a></li>
  <li  className="hoverli"><a href="#" className="hovera"><b className="hoverb">Sunscreens  - -</b>SAF Günəş qoruyucuları</a></li>
 </ul>
</div>

</div>
  )
}

