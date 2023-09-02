    import icon1 from '../sekil/Icon55.png'
        import icon from '../sekil/Icon51.png'
import {useState} from 'react'

    import frame from '../sekil/Frame.png'
    import 'bootstrap/dist/css/bootstrap.min.css';

function Likes(argument) {
        const [klik1,setKlik1]= useState(true);

  const remove=() => {
    setKlik1(false);
 
  };
    const [klik2,setKlik2]= useState(true);

  const remove2=() => {
    setKlik2(false);
 
  };
    const [klik3,setKlik3]= useState(true);

  const remove3=() => {
    setKlik3(false);
 
  };
   const [klik4,setKlik4]= useState(true);

  const remove4=() => {
    setKlik4(false);
 
  };
  const [klik5,setKlik5]= useState(true);

  const remove5=() => {
    setKlik5(false);
 
  };
  const [klik6,setKlik6]= useState(true);

  const remove6=() => {
    setKlik6(false);
 
  };
  const [klik7,setKlik7]= useState(true);

  const remove7=() => {
    setKlik4(false);
    setKlik5(false);
    setKlik6(false);
 
  };
return(
  <>
    < div  className="container justify-content-center"  style={{ minWidth:"1300px",marginBottom:"50px",}}>
    <div className="row" style={{marginLeft:"-7px",marginBottom:"-30px"}}>
    <div className="col "  >
         <h5 style={{fontFamily: "Poppins",width:"242px",height: "21px",lineHeight: "21px",fontSize: "18px",fontWeight:"500",
                    color:"rgba(0, 0, 0, 1)",letterSpacing: "0em",textAlign:"left",marginLeft:"45px"}}> Sevimlilər</h5>
    </div>
   
 <div className="col text-center" style={{marginLeft:"430px",marginTop:"-20px"}}>
    <button onClick={remove7} target=".blank" className="btn" style={{ padding:"14px",width:"297px",height:"55px",backgroundColor:"rgba(0, 155, 199, 1)",
    borderRadius:"4px",border:"1px solid rgba(238, 238, 238, 1)",fontFamily: "Poppins", fontSize: "16px", fontWeight: "400",lineHeight: "20px",color:"rgba(255, 255, 255, 1)",letterSpacing: "0em",textAlign:"center",}}>
     Bütün məshulları səbətə at<img  src={icon1} height="19.5px "   width="17.33px" alt="sjsj" style={{marginLeft:"10px"}}  /></button>
     </div>
    </div></div>


  < div  className="container justify-content-center"  style={{ minWidth:"1300px",marginBottom:"50px",}}>
   { klik1 && 
   <div className="row" style={{marginLeft:"50px",width:"1185px",height:"278px", borderRadius:"10px",border:"1px solid rgba(238, 238, 238, 1)"}}>
       <div className="col-4 text-start" style={{marginLeft:"-13px"}}>
       <img src={frame} height="278px" width="278px"/>
         </div>
         <div className="col-7 text-start">
         <p style={{color: "rgba(117, 117, 117, 1)",width:"100px",lineHeight:"20px",textAlign:"left"  ,fontFamily: 'Poppins',fontStyle: "normal",
   fontWeight: "600",fontSize: "16px",marginLeft:"-90px",marginTop:"40px"}}>Bioderma</p>
   <button type="button"  onClick={remove} style={{textAlign:"right",padding:"8px",background:"rgba(238, 238, 238, 1)",border:"1px solid rgba(238, 238, 238, 1)",
              width:"50px",height:"50px",borderRadius:"10px",marginLeft:"680px",marginTop:"-40px",position:"absolute"}}><img src={icon} height="32px" width="32px" />
   </button>
   
   <div style={{width:"500px",height:"72px",marginLeft:"-90px",lineHeight:"22px",textAlign:"left"  ,fontFamily: 'Poppins',fontStyle:"bold",
   fontWeight: "600",fontSize: "18px",}}>
   <b>Sensibio Micellar water, 1 l, 500 ml</b> 
   </div>
    <div style={{ width: "87px",height:"26px", background:"rgba(0, 155, 199, 1)", borderRadius: "4px", marginLeft: "-90px",marginTop:"-30px"}}>
       <p style={{ color: "white",  textAlign:"center"  ,fontFamily: 'Poppins', padding: "4px 8px ",
   fontStyle: "normal",fontSize: "12px",lineHeight: "18px", fontWeight: "400"}}
   >Çox satılan</p></div>
   <div style={{textAlign:"right",position:"absolute",marginLeft:"500px"}}>
   <p style={{color: "rgba(155, 155, 155, 1)",fontFamily: 'Poppins',fontStyle: "normal",fontSize: "14px",
     lineHeight: "18px", fontWeight: "400",textDecoration:"line-through",marginLeft:"70px",position:"absolute",}}>20.00 AZN </p> 
       <b style={{textDecoration:"none",lineHeight:"21px",fontFamily: 'Poppins',width:"100px",
     fontStyle:"bold",fontWeight: "500",fontSize: "18px",color:"black",position:"absolute",marginLeft:"-100px",marginTop:"-2px"}}>14.00 AZN</b> <br/><br/>
   { klik4 &&
   <button onClick={remove4} style={{ border:"none",height:"45px", width: "237px", fontFamily: "Poppins", fontSize: "18px",
                     fontWeight: "400",backgroundColor:"rgba(255, 197, 45, 1)",color:"white"}}>
              Səbətə at<img  src={icon1} height="24px "   width="24px "      style={{marginLeft: "10px" }}/></button>}
              { !klik4 &&
   <a href="#" className="btn" style={{ height:"45px", width: "237px", fontFamily: "Poppins", fontSize: "18px",
                     fontWeight: "400",backgroundColor:"rgba(0, 155, 199, 1)",color:"white"}}>
              Səbətə əlavə edildi</a>}
               
   </div>
   
      
         </div>
         </div>}
   
 {klik2 &&
  <div className="row" style={{marginLeft:"50px",width:"1185px",height:"278px", borderRadius:"10px",border:"1px solid rgba(238, 238, 238, 1)",marginTop:"20px"}}>
     <div className="col-4 text-start" style={{marginLeft:"-13px"}}>
     <img src={frame} height="278px" width="278px"/>
       </div>
       <div className="col-7 text-start">
       <p style={{color: "rgba(117, 117, 117, 1)",lineHeight:"20px",textAlign:"left"  ,fontFamily: 'Poppins',fontStyle: "normal",
 fontWeight: "600",fontSize: "16px",marginLeft:"-90px",marginTop:"40px"}}>Bioderma</p>
 <button type="button" onClick={remove2} style={{textAlign:"right",padding:"8px",background:"rgba(238, 238, 238, 1)",border:"1px solid rgba(238, 238, 238, 1)",
            width:"50px",height:"50px",borderRadius:"10px",marginLeft:"680px",marginTop:"-40px",position:"absolute"}}>
 <img src={icon} height="32px" width="32px" />
 </button>
 <div style={{width:"500px",height:"72px",marginLeft:"-90px",lineHeight:"22px",textAlign:"left"  ,fontFamily: 'Poppins',fontStyle:"bold",
 fontWeight: "600",fontSize: "18px",}}>
 <b>Sensibio Micellar water, 1 l, 500 ml</b> 
 </div>
  <div style={{ width: "87px",height:"26px", background:"rgba(0, 155, 199, 1)", borderRadius: "4px", marginLeft: "-90px",marginTop:"-30px"}}>
     <p style={{ color: "white",  textAlign:"center"  ,fontFamily: 'Poppins', padding: "4px 8px ",
 fontStyle: "normal",fontSize: "12px",lineHeight: "18px", fontWeight: "400"}}
 >Çox satılan</p></div>
 <div style={{textAlign:"right",position:"absolute",marginLeft:"500px"}}>
 <p style={{color: "rgba(155, 155, 155, 1)",fontFamily: 'Poppins',fontStyle: "normal",fontSize: "14px",
   lineHeight: "18px", fontWeight: "400",textDecoration:"line-through",marginLeft:"70px",position:"absolute",}}>20.00 AZN </p> 
     <b style={{textDecoration:"none",lineHeight:"21px",fontFamily: 'Poppins',width:"100px",
   fontStyle:"bold",fontWeight: "500",fontSize: "20px",color:"black",position:"absolute",marginLeft:"-100px",marginTop:"-2px"}}>14.00 AZN</b> <br/><br/>
   { klik5 &&
   <button onClick={remove5} style={{ border:"none",height:"45px", width: "237px", fontFamily: "Poppins", fontSize: "18px",
                     fontWeight: "500",backgroundColor:"rgba(255, 197, 45, 1)",color:"white"}}>
              Səbətə at<img  src={icon1} height="24px "   width="24px "      style={{marginLeft: "10px" }}/></button>}
              { !klik5 &&
   <button  className="btn" style={{ border:"none",height:"45px", width: "237px", fontFamily: "Poppins", fontSize: "18px",
                     fontWeight: "400",backgroundColor:"rgba(0, 155, 199, 1)",color:"white"}}>
              Səbətə əlavə edildi</button>}
               
 </div>
 
    
       </div>
       </div>}
 {klik3 &&
  <div className="row" style={{marginLeft:"50px",width:"1185px",height:"278px", borderRadius:"10px",border:"1px solid rgba(238, 238, 238, 1)",marginTop:"20px"}}>
     <div className="col-4 text-start" style={{marginLeft:"-13px"}}>
     <img src={frame} height="278px" width="278px"/>
       </div>
       <div className="col-7 text-start">
       <p style={{color: "rgba(117, 117, 117, 1)",lineHeight:"20px",textAlign:"left"  ,fontFamily: 'Poppins',fontStyle: "normal",
 fontWeight: "600",fontSize: "16px",marginLeft:"-90px",marginTop:"40px"}}>Bioderma</p>
 <button type="button" onClick={remove3} style={{textAlign:"right",padding:"8px",background:"rgba(238, 238, 238, 1)",border:"1px solid rgba(238, 238, 238, 1)",
            width:"50px",height:"50px",borderRadius:"10px",marginLeft:"680px",marginTop:"-40px",position:"absolute"}}>
            <img src={icon} height="32px" width="32px" />
 </button>
 <div style={{width:"500px",height:"72px",marginLeft:"-90px",lineHeight:"22px",textAlign:"left"  ,fontFamily: 'Poppins',fontStyle:"bold",
 fontWeight: "600",fontSize: "18px",}}>
 <b>Sensibio Micellar water, 1 l, 500 ml</b> 
 </div>
  <div style={{ width: "87px",height:"26px", background:"rgba(0, 155, 199, 1)", borderRadius: "4px", marginLeft: "-90px",marginTop:"-30px"}}>
     <p style={{ color: "white",  textAlign:"center"  ,fontFamily: 'Poppins', padding: "4px 8px ",
 fontStyle: "normal",fontSize: "12px",lineHeight: "18px", fontWeight: "400"}}
 >Çox satılan</p></div>
 <div style={{textAlign:"right",position:"absolute",marginLeft:"500px"}}>
 <p style={{color: "rgba(155, 155, 155, 1)",fontFamily: 'Poppins',fontStyle: "normal",fontSize: "14px",
   lineHeight: "18px", fontWeight: "400",textDecoration:"line-through",marginLeft:"70px",position:"absolute",}}>20.00 AZN </p> 
     <b style={{textDecoration:"none",lineHeight:"21px",fontFamily: 'Poppins',width:"100px",
   fontStyle:"bold",fontWeight: "500",fontSize: "18px",color:"black",position:"absolute",marginLeft:"-100px",marginTop:"-2px"}}>14.00 AZN</b> <br/><br/>
  { klik6 &&
   <button onClick={remove6} style={{ border:"none",height:"45px", width: "237px", fontFamily: "Poppins", fontSize: "18px",
                     fontWeight: "400",backgroundColor:"rgba(255, 197, 45, 1)",color:"white"}}>
              Səbətə at<img  src={icon1} height="24px "   width="24px "      style={{marginLeft: "10px" }}/></button>}
              { !klik6 &&
   <button  className="btn" style={{ border:"none",height:"45px", width: "237px", fontFamily: "Poppins", fontSize: "18px",
                     fontWeight: "400",backgroundColor:"rgba(0, 155, 199, 1)",color:"white"}}>
              Səbətə əlavə edildi</button>}
 </div>
 
    
       </div>
       </div>
    }
    </div> 





    <br/><br/><br/>
    </>)
}
export default Likes;
