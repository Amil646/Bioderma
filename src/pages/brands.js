 
 import resm11 from '../sekil/image 1.png';
 import resm13 from '../sekil/image 7.png';
 import resm14 from '../sekil/image 8.png';
  import 'bootstrap/dist/css/bootstrap.min.css';
function  Brand(argument) {
  return(
    <>
 < div  className="container justify-content-center"  style={{ minWidth:"1300px",marginBottom:"50px",}}>
    <div className="row justify-content-center" style={{width:"470px",height:"27px",marginLeft:"390px"}}>

    <div className="col-4 " >
     <a href="/sertifikat" className="btn " style={{ borderRadius:"100px",border:"1px solid rgba(53, 57, 69, 1)",color:"rgba(53, 57, 69, 1)" ,
     width:"170px",height:"27px", fontFamily: "Poppins", fontSize: "10px", fontWeight: "500",paddingTop:"5px",}}>Uğur və sertifikatlar</a>
     </div>
    <div className="col-4" >               
   <a href="#" className="btn active"   style={{borderRadius:"100px",border:"none",color:"white" ,width:"115px",height:"27px",
   fontFamily: "Poppins", fontSize: "10px", fontWeight: "500",marginLeft:"40px",paddingTop:"5px",backgroundColor:"rgba(0, 155, 199, 1)"}}> Brendlər</a>
</div>
    <div className="col-4" >  
   <a href="/haqqimizda" className="btn "  style={{borderRadius:"100px",border:"1px solid rgba(53, 57, 69, 1)",color:"rgba(53, 57, 69, 1)", width:"145px",height:"27px",
   fontFamily: "Poppins", fontSize: "10px", fontWeight: "500",marginLeft:"30px",paddingTop:"5px"}}> Şirkət haqqında</a>
</div>
<br/>

    </div>
     <div className="row justify-content-center" style={{width:"1200px",height:"200px",marginTop:"30px",marginLeft:"30px"}}>

    <div className="col-4 " style={{width:"385px",height:"200px",borderRadius:"10px",border:"1px solid rgba(238, 238, 238, 1)"}}>
    <img src={resm11} width="309px" height="61px " style={{textAlign:"center",padding:"10px",marginTop:"60px"}}/>
    <p style={{color:"rgba(117, 117, 117, 1)" , fontFamily: "Poppins", fontSize: "16px", fontWeight: "500",marginTop:"20px"}}>Bioderma</p>
     </div>
        
    <div className="col-4 " style={{width:"385px",height:"200px",borderRadius:"10px",border:"1px solid rgba(238, 238, 238, 1)",marginLeft:"20px"}}>
 <img src={resm13} width="281px" height="101px " style={{textAlign:"center",padding:"10px",marginTop:"40px"}}/>
    <p style={{color:"rgba(117, 117, 117, 1)" , fontFamily: "Poppins", fontSize: "16px", fontWeight: "500"}}>Esthederm</p>
</div>
    <div className="col-4 " style={{width:"385px",height:"200px",borderRadius:"10px",border:"1px solid rgba(238, 238, 238, 1)",marginLeft:"20px"}}>
  <img src={resm14} width="244px" height="70px " style={{textAlign:"center",padding:"10px",marginTop:"60px"}}/>
    <p style={{color:"rgba(117, 117, 117, 1)" , fontFamily: "Poppins", fontSize: "16px", fontWeight: "500",marginTop:"10px"}}>Etat Pur</p>
</div>


    </div>
    </div>
    <br/><br/>
</>
    )

  }
  export default Brand;