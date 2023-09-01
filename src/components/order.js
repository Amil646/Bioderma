import icon2 from '../sekil/iconx.png'
import car from '../sekil/car.png'
import card from '../sekil/card.png'
import {useState} from 'react'


export default function Order() {
    const [klik,setKlik]=useState(true)
const mouseClick=() => {
    setKlik(false);
 
  };
return(
	    < div  className="container justify-content-center"  style={{ minWidth:"1300px",marginBottom:"50px",textAlign:"center"}}>

	<div style={{width:"525px",height:"500px",borderRadius:"10px",border:"none",backgroundColor:"white",overflowY:"scroll",  overflowX: "hidden"}}> 
	<div className="row">
	<div className="col text-end">
    <button style={{background:"none",border:"none"}} onClick={mouseClick}>
	<img src={icon2} height="24px" width="24px" style={{marginTop:"30px",marginRight:"30px"}}/>
</button>	</div></div>
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
            letterSpacing: "0em",}}> Ödnəniş etmə üsulu</label><br/><br/>

                         <div style={{width:"418px",height:"64px",backgroundColor:"white",borderRadius:"6px",border:"1px solid rgba(238, 238, 238, 1)"}}>
                                <label htmLfor="car1" style={{marginTop:"20px",marginLeft:"20px",width:"278px",fontFamily: "Poppins",lineHeight: "22px",
                                fontSize: "14px",fontWeight:"500",color:"rgba(0, 0, 0, 1)",
            letterSpacing: "0em",}}><img src={car} height="24px" width="24px"  style={{marginRight:"20px"}} />Çatdırılma zamanı nağd ödəniş et</label>
                                <input type="radio" id="car1" name="car"  style={{marginLeft:"80px"}}  />
                             
                              </div>
                              <div style={{width:"418px",height:"64px",backgroundColor:"white",borderRadius:"6px",border:"1px solid rgba(238, 238, 238, 1)",marginTop:"20px"}}>
                                <label htmLfor="car1" style={{marginTop:"20px",marginLeft:"20px",fontFamily: "Poppins",width:"278px",lineHeight: "22px",fontSize: "14px",fontWeight:"500",
                                color:"rgba(0, 0, 0, 1)",    letterSpacing: "0em",}}><img src={card} height="24px" width="24px"  style={{marginRight:"20px"}} />Onlayn ödəniş et</label>
                                <input type="radio" id="car1" name="car"  style={{marginLeft:"80px"}}  />
                             
                              </div>
                                 </div><br/><br/><br/><br/>
                                 <input type="button" value="Sifarişi tamamla" style={{width:"418px",height:"45px",backgroundColor:"rgba(0, 155, 199, 1)",marginLeft:"10px",marginTop:"20px",
                                 fontFamily: "Poppins",borderRadius:"4px",border:"none",lineHeight: "20px",fontSize: "16px",fontWeight:"500", color:"rgba(255, 255, 255, 1)",    letterSpacing: "0em",}}/>
            </form >

</div>
	</div>
	)
}