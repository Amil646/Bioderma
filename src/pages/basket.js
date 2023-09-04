import {useState} from 'react'
import icon1 from '../sekil/Icon55.png'
import icon2 from '../sekil/Icon51.png'
import frame from '../sekil/Frame.png'
import icon from '../sekil/iconx.png'
import car from '../sekil/car.png'
import card from '../sekil/card.png'
import icon33 from '../sekil/perfect.png'

import Application from  '../components/calculator.js'
import Order from  '../components/order.js'


import 'bootstrap/dist/css/bootstrap.min.css';

function Basket(argument) {

const [klik,setKlik]=useState(false)
const [klik2,setKlik2]=useState(false)
const [klik3,setKlik3]=useState(true)
const [klik4,setKlik4]=useState(true)



const click=() => {
    setKlik(true);
 document.body.style.backgroundColor="rgba(0, 0, 0, 0.15)"

  };
  const click2=() => {
    setKlik2(true);
    setKlik(false);

  };
  const mouseClick=() => {
    setKlik(false);
 document.body.style.backgroundColor="white"
 
  };
  const mouseClick2=() => {
    setKlik2(false);
 document.body.style.backgroundColor="white"
 
  };
  const remove1=() => {
    setKlik4(false);
 
  };
  const remove=() => {
    setKlik3(false);
 
  };
return(
	<>
 
  < div  className="container justify-content-center"  style={{ minWidth:"1300px",marginBottom:"50px",}}>
  {klik &&
    ( <div style={{marginLeft:"50px",zIndex:"2",marginTop:"-160px",position:"absolute",minWidth:"1300px",marginLeft:"350px"}}> 
    
 < div  className="container justify-content-center"  style={{ minWidth:"1300px",marginBottom:"50px",textAlign:"center",}}>

  <div style={{width:"525px",height:"800px",borderRadius:"10px",border:"none",backgroundColor:"white",overflowY:"scroll",  overflowX: "hidden"}}> 
  <div className="row">
  <div className="col text-end">
    <button style={{background:"none",border:"none"}} onClick={mouseClick}>
  <img src={icon} height="24px" width="24px" style={{marginTop:"30px",marginRight:"30px"}}/>
</button> 
</div></div>
<p style={{fontFamily: "Poppins",width:"220px",height: "36px",lineHeight: "36px",fontSize: "24px",fontWeight:"500",color:"rgba(68, 74, 81, 1)",
            letterSpacing: "0em",marginLeft:"150px"}}> Sifarişi rəsmiləşdir</p>
            <form style={{width:"430px",height:"700px",textAlign:"left",marginLeft:"40px",backgroundColor:"white"}}>
                        <input type="text" placeholder="Soyad" style={{marginLeft:"10px",width:"204px",height:"40px",borderRadius:"6px",border:"1px solid rgba(186, 189, 195, 1)"}}/>
                        <input type="text" placeholder="Soyad" style={{marginLeft:"10px",width:"204px",height:"40px",borderRadius:"6px",border:"1px solid rgba(186, 189, 195, 1)"}}/>
                         <input type="tel" placeholder="Telefon nömrəsi" style={{marginLeft:"10px",width:"204px",height:"40px",marginTop:"20px",borderRadius:"6px",border:"1px solid rgba(186, 189, 195, 1)"}}/>
                        <input type="email" placeholder="example@gmail.com" style={{marginLeft:"10px",width:"204px",height:"40px",borderRadius:"6px",border:"1px solid rgba(186, 189, 195, 1)"}}/>
                        <input type="text" placeholder="Şəhər" style={{marginLeft:"10px",width:"418px",height:"40px",marginTop:"20px",borderRadius:"6px",border:"1px solid rgba(186, 189, 195, 1)"}}/>
                        <input type="text" placeholder="Qeyd" style={{marginLeft:"10px",width:"418px",height:"99px",marginTop:"20px",borderRadius:"6px",border:"1px solid rgba(186, 189, 195, 1)"}}/>
                           <div style={{marginLeft:"10px",width:"418px",height:"99px",marginTop:"20px"}}> 
                           <label h style={{fontFamily: "Poppins",width:"150px",height: "18px",lineHeight: "18px",fontSize: "12px",fontWeight:"400",color:"rgba(186, 189, 195, 1)",
            letterSpacing: "0em",}}> Məhsulu əldə etmə üsulu</label><br/><br/>
                         <div style={{width:"418px",height:"64px",backgroundColor:"white",borderRadius:"6px",border:"1px solid rgba(238, 238, 238, 1)"}}>
                                <label htmLfor="car1" style={{marginTop:"20px",marginLeft:"20px",width:"278px",fontFamily: "Poppins",lineHeight: "22px",fontSize: "14px",fontWeight:"500",
                                color:"rgba(0, 0, 0, 1)",   letterSpacing: "0em",}}><img src={car} height="24px" width="24px"  style={{marginRight:"20px",}} />Ünvana çatdırılsın</label>
                                <input type="radio" id="car1" name="car"  style={{marginLeft:"80px"}}  />
                             
                              </div>
                                 </div>
                                 <div style={{marginLeft:"10px",width:"418px",height:"99px",marginTop:"20px"}}> 
                           <label h style={{fontFamily: "Poppins",width:"150px",height: "18px",lineHeight: "18px",fontSize: "12px",fontWeight:"400",color:"rgba(186, 189, 195, 1)",
            letterSpacing: "0em",}}> Ödəniş etmə üsulu</label><br/><br/>

                         <div style={{width:"418px",height:"64px",backgroundColor:"white",borderRadius:"6px",border:"1px solid rgba(238, 238, 238, 1)"}}>
                                <label htmLfor="car2" style={{marginTop:"20px",marginLeft:"20px",width:"278px",fontFamily: "Poppins",lineHeight: "22px",
                                fontSize: "14px",fontWeight:"500",color:"rgba(0, 0, 0, 1)",
            letterSpacing: "0em",}}><img src={car} height="24px" width="24px"  style={{marginRight:"20px"}} />Çatdırılma zamanı nağd ödəniş et</label>
                                <input type="radio" id="car2" name="cars"  style={{marginLeft:"80px"}}  />
                             
                              </div>
                              <div style={{width:"418px",height:"64px",backgroundColor:"white",borderRadius:"6px",border:"1px solid rgba(238, 238, 238, 1)",marginTop:"20px"}}>
                                <label htmLfor="car3" style={{marginTop:"20px",marginLeft:"20px",fontFamily: "Poppins",width:"278px",lineHeight: "22px",fontSize: "14px",fontWeight:"500",
                                color:"rgba(0, 0, 0, 1)",    letterSpacing: "0em",}}><img src={card} height="24px" width="24px"  style={{marginRight:"20px"}} />Onlayn ödəniş et</label>
                                <input type="radio" id="car3" name="cars"  style={{marginLeft:"80px"}}  />
                             
                              </div>
                                 </div><br/><br/><br/><br/>
                                 <input type="button" value="Sifarişi tamamla"  onClick={click2} style={{width:"418px",height:"45px",backgroundColor:"rgba(0, 155, 199, 1)",marginLeft:"10px",marginTop:"20px",
                                 fontFamily: "Poppins",borderRadius:"4px",border:"none",lineHeight: "20px",fontSize: "16px",fontWeight:"500", color:"rgba(255, 255, 255, 1)",    letterSpacing: "0em",}}/>
            </form >

</div>
  </div>



</div>)
   }
   { klik2 && 
    <div style={{marginLeft:"350px",zIndex:"2",position:"absolute"}}> 

    < div  className="container justify-content-center"  style={{ minWidth:"1300px",marginBottom:"50px",textAlign:"center"}}>

  <div style={{width:"525px",height:"438px",borderRadius:"10px",border:"none",backgroundColor:"white"}}>
  <div className="row">
  <div className="col text-end">
   <button style={{background:"none",border:"none"}} onClick={mouseClick2}>
  <img src={icon} height="24px" width="24px" style={{marginTop:"30px",marginRight:"30px"}}/>
</button>   </div></div>
  <div style={{width:"185px",height:"185px",backgroundColor:"rgba(0, 155, 199, 0.1)",marginLeft:"170px",borderRadius:"167px"}}>
  <div style={{width:"111.64px",height:"111.64px",backgroundColor:"rgba(0, 155, 199, 0.2)",marginLeft:"40px",marginTop:"35px",borderRadius:"104px",position:"absolute"}}>
      <img src={icon33} height="56px" width=" 56px" style={{marginTop:"28px",marginLeft:"10px"}}/>
  </div>
  </div>
    <div style={{width:"337px",height:"54px",marginLeft:"90px",marginTop:"20px"}}>
    <p style={{fontFamily: "Poppins",lineHeight: "27px",fontSize: "18px",fontWeight:"600",color:"rgba(0, 155, 199, 1)",
            letterSpacing: "0em",}}>Sifariş uğurla tamamlandı!</p>
    <p style={{fontFamily: "Poppins",lineHeight: "27px",fontSize: "18px",fontWeight:"500",color:"rgba(7, 7, 7, 1)",
            letterSpacing: "0em",}}>Tezliklə sizinlə əlaqə saxlanılacaq.</p>
  </div>
  <button style={{width:"220px",height:"45px",backgroundColor:"rgba(0, 155, 199, 1)",borderRadius:"4px",border:"none",fontFamily: "Poppins",lineHeight: "20px",fontSize: "16px",
  fontWeight:"400",color:"rgba(255, 255, 255, 1)",letterSpacing: "0em",textAlign:"center",marginTop:"30px"}} onClick={mouseClick2}>Əvvələ qayıt</button>
    
    </div>
    </div>     </div>

}

    
    <h5 style={{fontFamily: "Poppins",width:"242px",height: "21px",lineHeight: "21px",fontSize: "18px",fontWeight:"600",
                    color:"rgba(0, 0, 0, 1)",letterSpacing: "0em",textAlign:"left",marginBottom:"30px",marginLeft:"50px"}}>Səbət</h5>

    <div className="row" style={{marginLeft:"50px",width:"873px",height:"278px", borderRadius:"10px",border:"1px solid rgba(238, 238, 238, 1)"}}>
    

    
   

    

      { klik3 &&
           ( <>
           <div className="col-4 text-start" style={{marginLeft:"-13px"}}>
                   <img src={frame} height="278px" width="278px"/>
                     </div>
               
                     <div className="col-4 text-start">
                     <p style={{color: "rgba(117, 117, 117, 1)",width:"100px",lineHeight:"20px",textAlign:"left"  ,fontFamily: 'Poppins',fontStyle: "normal",
               fontWeight: "600",fontSize: "16px",marginLeft:"20px",marginTop:"40px"}}>Bioderma</p>
               <button type="button" onClick={remove}  style={{textAlign:"right",padding:"8px",background:"rgba(238, 238, 238, 1)",border:"1px solid rgba(238, 238, 238, 1)",
                          width:"50px",height:"50px",borderRadius:"10px",marginLeft:"500px",marginTop:"-40px",position:"absolute"}}><img src={icon} height="32px" width="32px" />
               </button>
               
               <div style={{width:"500px",height:"72px",marginLeft:"20px",lineHeight:"22px",textAlign:"left"  ,fontFamily: 'Poppins',fontStyle:"bold",
               fontWeight: "600",fontSize: "18px",}}>
               <b>Sensibio Micellar water, 1 l, 500 ml</b> 
               </div>
                <div style={{ width: "87px",height:"26px", background:"rgba(0, 155, 199, 1)", borderRadius: "4px", marginLeft: "20px",marginTop:"-30px"}}>
                   <p style={{ color: "white",  textAlign:"center"  ,fontFamily: 'Poppins', padding: "4px 8px ",
               fontStyle: "normal",fontSize: "14px",lineHeight: "18px", fontWeight: "400"}}
               >Çox satılan</p></div><br/><br/><br/><br/>
               <div style={{textAlign:"left",marginLeft:"20px",marginTop:"-50px"}}>
               <p style={{color: "rgba(155, 155, 155, 1)",fontFamily: 'Poppins',fontStyle: "normal",fontSize: "14px",
                 lineHeight: "18px", fontWeight: "400",textDecoration:"line-through",position:"absolute",marginLeft:"140px",marginTop:"15px"}}>20.00 AZN </p> 
                   <b style={{textDecoration:"none",lineHeight:"21px",fontFamily: 'Poppins',width:"100px",
                 fontStyle:"bold",fontWeight: "500",fontSize: "18px",color:"black",marginLeft:"220px",marginTop:"13px",position:"absolute"}}>14.00 AZN</b> 
                 <Application/>
                
               </div>
                     </div>
                     </> 
                     )
      }
          
          </div>
           <div className=" text-start justify-content-end" style={{marginLeft:"950px",width:"277px",
           height:"277px",position:"absolute",marginTop:"-278px",borderRadius:"10px",border:"1px solid rgba(0, 155, 199, 1)"}}>
               <Order/>
                         
                         <button    type="button" onClick={click}  style={{width:"237px",height:"45px",borderRadius:"4px", lineHeight: "21px",fontSize: "16px",
                          fontWeight:"400",border:"none",marginLeft:"20px",marginTop:"-10px" ,backgroundColor:"rgba(0, 155, 199, 1)",
                          color:"rgba(255, 255, 255, 1)",textAlign:"center"}}>Sifarişi tamamla</button>
                                               <div style={{marginLeft:"00px",marginTop:"30px",width:"277px",position:"absolute",height:"20px"}}>
        <a href="/mehsullar" style={{color:"rgba(0, 155, 199, 1)",width:"201px",lineHeight: "21px",fontSize: "16px",
                          fontWeight:"500",position:"absolute",fontFamily:"Poppins",marginLeft:"50px"}}>Qulluq rutininizi tamamla</a> </div>
          </div>

     
  <div className="row" style={{marginLeft:"50px",width:"873px",height:"278px", borderRadius:"10px",border:"1px solid rgba(238, 238, 238, 1)",marginTop:"20px"}}>
   {  klik4 && 
   <>
   <div className="col-4 text-start" style={{marginLeft:"-13px"}}>
       <img src={frame} height="278px" width="278px"/>
         </div>
         <div className="col-4 text-start">
         <p style={{color: "rgba(117, 117, 117, 1)",width:"100px",lineHeight:"20px",textAlign:"left"  ,fontFamily: 'Poppins',fontStyle: "normal",
   fontWeight: "600",fontSize: "16px",marginLeft:"20px",marginTop:"40px"}}>Bioderma</p>
   <button type="button" style={{textAlign:"right",padding:"8px",background:"rgba(238, 238, 238, 1)",border:"1px solid rgba(238, 238, 238, 1)",
              width:"50px",height:"50px",borderRadius:"10px",marginLeft:"500px",marginTop:"-40px",position:"absolute"}} onClick={remove1}><img src={icon} height="32px" width="32px" />
   </button>
   
   <div style={{width:"500px",height:"72px",marginLeft:"18px",lineHeight:"22px",textAlign:"left"  ,fontFamily: 'Poppins',fontStyle:"bold",
   fontWeight: "600",fontSize: "18px",}}>
   <b>Sensibio Micellar water, 1 l, 500 ml</b> 
   </div>
    <div style={{ width: "87px",height:"26px", background:"rgba(0, 155, 199, 1)", borderRadius: "4px", marginLeft: "20px",marginTop:"-30px"}}>
       <p style={{ color: "white",  textAlign:"center"  ,fontFamily: 'Poppins', padding: "4px 8px ",
   fontStyle: "normal",fontSize: "14px",lineHeight: "18px", fontWeight: "400"}}
   >Çox satılan</p></div><br/><br/><br/><br/>
   <div style={{textAlign:"left",marginLeft:"20px",marginTop:"-50px"}}>
   <p style={{color: "rgba(155, 155, 155, 1)",fontFamily: 'Poppins',fontStyle: "normal",fontSize: "14px",
     lineHeight: "18px", fontWeight: "400",textDecoration:"line-through",position:"absolute",marginLeft:"140px",marginTop:"15px"}}>20.00 AZN </p> 
       <b style={{textDecoration:"none",lineHeight:"21px",fontFamily: 'Poppins',width:"100px",
     fontStyle:"bold",fontWeight: "500",fontSize: "18px",color:"black",marginLeft:"220px",marginTop:"13px",position:"absolute"}}>14.00 AZN</b> 
     <Application/>
    
   </div>
         </div>
         </>}
      </div>

   
    </div> 





    <br/><br/><br/>
    </>
	)
} export default Basket
