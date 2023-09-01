import {useState} from 'react'
import serifikat from '../sekil/sertifikat.png'
import icon from '../sekil/iconx.png'


function Certificates(argument) {
    const [klik,setKlik]=useState(false)
    const click1=() =>{
        setKlik(true)
        document.body.style.backgroundColor="rgba(0, 0, 0, 0.25)"
    }
     const click2=() =>{
        setKlik(false)
        document.body.style.backgroundColor="white"
    }



      const over1=() =>{
document.getElementById("1").style.backgroundColor="rgba(0, 155, 199, 1)"  ;
document.getElementById("12").style.color="white"  ;
document.getElementById("13").style.color="white"  ;


    }
     const out1=() =>{
document.getElementById("1").style.background="none"  ;
document.getElementById("12").style.color="rgba(107, 114, 128, 1)"  ;
document.getElementById("13").style.color="rgba(17, 24, 39, 1)"  ;

    }
     const over3=() =>{
document.getElementById("3").style.backgroundColor="rgba(0, 155, 199, 1)"  ;
document.getElementById("32").style.color="white"  ;
document.getElementById("33").style.color="white"  ;

    }
     const out2=() =>{
document.getElementById("2").style.background="none"  ;
document.getElementById("22").style.color="rgba(107, 114, 128, 1)"  ;
document.getElementById("23").style.color="rgba(17, 24, 39, 1)"  ;

    } 
    const over2=() =>{
document.getElementById("2").style.backgroundColor="rgba(0, 155, 199, 1)"  ;
document.getElementById("22").style.color="white"  ;
document.getElementById("23").style.color="white"  ;
    }

     const out3=() =>{
document.getElementById("3").style.background="none"  ;
document.getElementById("32").style.color="rgba(107, 114, 128, 1)"  ;
document.getElementById("33").style.color="rgba(17, 24, 39, 1)"  ;
    } 

    const over4=() =>{
document.getElementById("4").style.backgroundColor="rgba(0, 155, 199, 1)"  ;
document.getElementById("42").style.color="white"  ;
document.getElementById("43").style.color="white"  ;
    }
     const out4=() =>{
document.getElementById("4").style.background="none"  ;
document.getElementById("42").style.color="rgba(107, 114, 128, 1)"  ;
document.getElementById("43").style.color="rgba(17, 24, 39, 1)"  ;

    }
     const over5=() =>{
document.getElementById("5").style.backgroundColor="rgba(0, 155, 199, 1)"  ;
document.getElementById("52").style.color="white"  ;
document.getElementById("53").style.color="white"  ;
    }
     const out5=() =>{
document.getElementById("5").style.background="none"  ;
document.getElementById("52").style.color="rgba(107, 114, 128, 1)"  ;
document.getElementById("53").style.color="rgba(17, 24, 39, 1)"  ;

    }
     const over6=() =>{
document.getElementById("6").style.backgroundColor="rgba(0, 155, 199, 1)"  ;
document.getElementById("62").style.color="white"  ;
document.getElementById("63").style.color="white"  ;

    }
     const out6=() =>{
document.getElementById("6").style.background="none"  ;
document.getElementById("62").style.color="rgba(107, 114, 128, 1)"  ;
document.getElementById("63").style.color="rgba(17, 24, 39, 1)"  ;


    } 
 
	return(
		<>
 < div  className="container justify-content-center"  style={{ minWidth:"1300px",marginBottom:"50px",}}>
 {klik && 
 <div style={{position:"absolute",zIndex:"2",marginLeft:"420px",marginTop:"-60px"}}>
 <img src={icon} height="23px" height="24px" style={{position:"absolute",marginLeft:"410px",marginTop:"10px",borderRadius:"90px",border:"2px solid black"}} onClick={click2} />
 <img src={serifikat} height="632px" width="446px" />
 </div>

 }
    <div className="row justify-content-center" style={{width:"470px",height:"27px",marginLeft:"390px"}}>

    <div className="col-4 " >
     <a href="#" className="btn active "target=".self" style={{ borderRadius:"100px",border:"none",color:"white" ,
     width:"170px",height:"27px", fontFamily: "Poppins", fontSize: "10px", fontWeight: "500",paddingTop:"5px",backgroundColor:"rgba(0, 155, 199, 1)"}}>Uğur və sertifikatlar</a>
     </div>
    <div className="col-4" >               
   <a href="/brendler" className="btn active"   style={{borderRadius:"100px",border:"1px solid rgba(53, 57, 69, 1)",color:"rgba(53, 57, 69, 1)" ,width:"115px",height:"27px",
   fontFamily: "Poppins", fontSize: "10px", fontWeight: "500",marginLeft:"40px",paddingTop:"5px"}}> Brendlər</a>
</div>
    <div className="col-4" >  
   <a href="/haqqimizda" className="btn "  style={{borderRadius:"100px",border:"1px solid rgba(53, 57, 69, 1)",color:"rgba(53, 57, 69, 1)", width:"145px",height:"27px",
   fontFamily: "Poppins", fontSize: "10px", fontWeight: "500",marginLeft:"30px",paddingTop:"5px"}}> Şirkət haqqında</a>
</div>
<br/>

    </div>
     <div className="row justify-content-center" style={{width:"1200px",height:"200px",marginTop:"30px",marginLeft:"30px"}}>

    <div className="col-4 " style={{width:"385px",height:"200px",borderRadius:"10px",border:"1px solid rgba(238, 238, 238, 1)"}} id="1" onMouseOver={over1} onMouseOut={out1} onClick={click1}>
    <p  id="12" style={{textAlign:"left",color:"rgba(107, 114, 128, 1)" , fontFamily: "Poppins", fontSize: "14px", fontWeight: "400",marginTop:"20px",marginLeft:"10px",width:"337px",height:"20px",}}>Serifikat</p>
     <p id="13"  style={{textAlign:"left",color:"rgba(17, 24, 39, 1)" , fontFamily: "Poppins", fontSize: "16px",fontStyle:"bold" ,fontWeight: "500",marginTop:"110px",marginLeft:"10px",width:"337px",height:"24px",}}>Lorem ipsum</p>

     </div>
        
    <div className="col-4 " style={{width:"385px",height:"200px",borderRadius:"10px",border:"1px solid rgba(238, 238, 238, 1)",marginLeft:"20px"}}id="2" onMouseOver={over2} onMouseOut={out2} onClick={click1}>
 <p id="22" style={{textAlign:"left",color:"rgba(107, 114, 128, 1)" , fontFamily: "Poppins", fontSize: "14px", fontWeight: "400",marginTop:"20px",marginLeft:"10px",width:"337px",height:"20px",}}>Serifikat</p>
     <p id="23"style={{textAlign:"left",color:"rgba(17, 24, 39, 1)" , fontFamily: "Poppins", fontSize: "16px",fontStyle:"bold" ,fontWeight: "500",marginTop:"110px",marginLeft:"10px",width:"337px",height:"24px",}}>Lorem ipsum</p>

</div>
    <div className="col-4 " style={{width:"385px",height:"200px",borderRadius:"10px",border:"1px solid rgba(238, 238, 238, 1)",marginLeft:"20px"}}id="3" onMouseOver={over3} onMouseOut={out3} onClick={click1}>
<p id="32"style={{textAlign:"left",color:"rgba(107, 114, 128, 1)" , fontFamily: "Poppins", fontSize: "14px", fontWeight: "400",marginTop:"20px",marginLeft:"10px",width:"337px",height:"20px",}}>Serifikat</p>
     <p id="33"style={{textAlign:"left",color:"rgba(17, 24, 39, 1)" , fontFamily: "Poppins", fontSize: "16px",fontStyle:"bold" ,fontWeight: "500",marginTop:"110px",marginLeft:"10px",width:"337px",height:"24px",}}>Lorem ipsum</p>

</div>
    </div>
        <div className="row justify-content-center" style={{width:"1200px",height:"200px",marginTop:"30px",marginLeft:"30px"}}>

    <div className="col-4 " style={{width:"385px",height:"200px",borderRadius:"10px",border:"1px solid rgba(238, 238, 238, 1)"}}id="4" onMouseOver={over4} onMouseOut={out4} onClick={click1}>
    <p id="42"style={{textAlign:"left",color:"rgba(107, 114, 128, 1)" , fontFamily: "Poppins", fontSize: "14px", fontWeight: "400",marginTop:"20px",marginLeft:"10px",width:"337px",height:"20px",}}>Serifikat</p>
     <p id="43" style={{textAlign:"left",color:"rgba(17, 24, 39, 1)" , fontFamily: "Poppins", fontSize: "16px",fontStyle:"bold" ,fontWeight: "500",marginTop:"110px",marginLeft:"10px",width:"337px",height:"24px",}}>Lorem ipsum</p>

     </div>
        
    <div className="col-4 " style={{width:"385px",height:"200px",borderRadius:"10px",border:"1px solid rgba(238, 238, 238, 1)",marginLeft:"20px"}}id="5" onMouseOver={over5} onMouseOut={out5} onClick={click1}>
 <p id="52" style={{textAlign:"left",color:"rgba(107, 114, 128, 1)" , fontFamily: "Poppins", fontSize: "14px", fontWeight: "400",marginTop:"20px",marginLeft:"10px",width:"337px",height:"20px",}}>Serifikat</p>
     <p id="53" style={{textAlign:"left",color:"rgba(17, 24, 39, 1)" , fontFamily: "Poppins", fontSize: "16px",fontStyle:"bold" ,fontWeight: "500",marginTop:"110px",marginLeft:"10px",width:"337px",height:"24px",}}>Lorem ipsum</p>

</div>
    <div className="col-4 " style={{width:"385px",height:"200px",borderRadius:"10px",border:"1px solid rgba(238, 238, 238, 1)",marginLeft:"20px"}}id="6" onMouseOver={over6} onMouseOut={out6} onClick={click1}>
<p id="62" style={{textAlign:"left",color:"rgba(107, 114, 128, 1)" , fontFamily: "Poppins", fontSize: "14px", fontWeight: "400",marginTop:"20px",marginLeft:"10px",width:"337px",height:"20px",}}>Serifikat</p>
     <p id="63" style={{textAlign:"left",color:"rgba(17, 24, 39, 1)" , fontFamily: "Poppins", fontSize: "16px",fontStyle:"bold" ,fontWeight: "500",marginTop:"110px",marginLeft:"10px",width:"337px",height:"24px",}}>Lorem ipsum</p>

</div>
    </div>
    
    </div>
    <br/><br/>
</>
		)
}
export default Certificates;