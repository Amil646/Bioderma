import '../css/brands.css' 
 import resm11 from '../photos/image 1.png';
 import resm13 from '../photos/image 7.png';
 import resm14 from '../photos/image 8.png';
  import 'bootstrap/dist/css/bootstrap.min.css';
export default function  Brand(argument) {
  return(
 <>
   <div  className="container justify-content-center"  id="brandscon1">
      <div className="row justify-content-center" id="brandsrow">
       <div className="col-4 " >
         <a href="/sertifikat" className="btn " id="brandcert">Uğur və sertifikatlar</a>
       </div>
       <div className="col-4" >               
         <a href="#" className="btn active" id="brand1"  > Brendlər</a>
       </div>
       <div className="col-4" >  
         <a href="/haqqimizda" className="btn " id="brandabout"> Şirkət haqqında</a>
       </div>
       <br/>

      </div>
     <div className="row justify-content-center" id="brandsrow1" >
      <div className="col-4 " id="brandscol1">
         <img src={resm11} className="brandsimg1"/>
         <p className="brandsp1">Bioderma</p>
       </div>
        
       <div className="col-4 " id="brandscol2">
         <img src={resm13} className="brandsimg2"/>
         <p className="brandsp2">Esthederm</p>
       </div>
       <div className="col-4 " id="brandscol3">
         <img src={resm14} className="brandsimg3"/>
         <p className="brandsp3">Etat Pur</p>
       </div>
      </div>
   </div>
    <br/><br/><br/><br/><br/><br/>
</>
    )

  }
