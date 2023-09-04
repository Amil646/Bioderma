    import sekil3  from'../sekil/Frame 1601.png'
    import icon1 from '../sekil/Icon5.png'
    import sekil31 from'../sekil/Frame 1601 (1).png'
    import sekil32 from'../sekil/Frame 1601 (2).png'
    import sekil33  from'../sekil/Frame 1601 (3).png'
     import 'bootstrap/dist/css/bootstrap.min.css';
 import sekil1 from  '../sekil/image11.png'
 import sekil12 from  '../sekil/img44.png'
 import sekil2 from  '../sekil/img41.png'
 import sekil21 from  '../sekil/image12.png'
 import Discount from '../components/discount.js'
import Choose from '../components/choose.js'


function Aksiya(argument) {
	return(
		<>
    < div  className="container justify-content-center"  style={{ minWidth:"1300px",marginBottom:"50px",}}>
        <h5 style={{fontFamily: "Poppins",width:"242px",height: "21px",lineHeight: "21px",fontSize: "18px",fontWeight:"500",
                    color:"rgba(0, 0, 0, 1)",letterSpacing: "0em",textAlign:"left",marginLeft:"50px"}}> Aksiyalar və kompaniyalar</h5>
    </div>



    <div className="container justify-content-center" style={{ minWidth:"1300px",width:"1300px",marginTop:"-20px",}}>
  <div className="row " style={{marginLeft:"-80px"}}>
  <div className="col-4"    style={{marginLeft:"80px"}}>
   <Discount/>
 
    </div>
    <div className="col-7  mb-5"  style={{width:"790px",height:"400px",backgroundColor:"white",
    marginLeft:"-15px",borderRadius:"10px",border:"1px solid rgba(238, 238, 238, 1)"}}>  
   <p style={{color: "rgba(80, 84, 91, 1)",lineHeight:"21px",textAlign:"left"  ,fontFamily: 'Poppins',fontStyle: "normal",
fontWeight: "400",fontSize: "14px",marginLeft:"10px",marginTop:"10px"}}>7 Dekabr - 1 Yanvar</p>
<div style={{width:"500px",height:"72px",marginLeft:"10px",lineHeight:"36px",textAlign:"left"  ,fontFamily: 'Poppins',fontStyle: "normal",
fontWeight: "500",
fontSize: "24px",}}>
<p >Yeni <b>Bioderma</b> məhsulunu <b style={{color:"rgba(219, 51, 51, 1)"}}>30% Endirimlə</b> <br/>əldə et!</p>
</div><br/>
<p style={{width:"728px",height:"92px",marginLeft:"10px",lineHeight:"21px",textAlign:"left"  ,fontFamily: 'Poppins',fontStyle: "normal",
fontWeight: "400",
fontSize: "14px",color:"rgba(117, 117, 117, 1)"}}>Həssas dərilər daxil bütün dəri tipləri üçün makiyajı,
 çirkə və kiri dərhal təmizləyən nəmləmdirici təsirə malik dünyanın №1 miselyar suyu. Həssas dərilər 
 daxil bütün dəri tipləri üçün makiyajı, çirkə və kiri dərhal təmizləyən nəmləmdirici təsirə malik
  dünyanın №1 miselyar suyu.</p><br/><br/>
  <div style={{ width:"366px",height:"69px",marginLeft:"10px"}}>
    <div style={{ width:"141px",height:"69px",}}>

  <p  style={{lineHeight:"18px",textAlign:"left"  ,fontFamily: 'Poppins',fontStyle: "normal",color:"rgba(117, 117, 117, 1)",
               fontWeight: "400",fontSize: "12px",}}>    Onlayn sifariş üçün: </p>
<b style={{lineHeight:"36px",textAlign:"left"  ,fontFamily: 'Poppins',color:"rgba(0, 0, 0, 1)",fontWeight: "600",
             fontSize: "24px",marginLeft:"-80px"}}>*1234</b>
               </div>
   <div style={{ width:"166px",height:"69px",position:"absolute",marginLeft:"207px",marginTop:"-69px",}}>

  <p  style={{lineHeight:"18px",textAlign:"left"  ,fontFamily: 'Poppins',fontStyle: "normal",color:"rgba(117, 117, 117, 1)",
               fontWeight: "400",fontSize: "12px",}}>WhatsApp: </p>
<b style={{lineHeight:"36px",textAlign:"left"  ,fontFamily: 'Poppins',color:"rgba(0, 0, 0, 1)",fontWeight: "600",
             fontSize: "24px",marginLeft:"-20px"}}>012 345 67 89</b>
               </div>

  </div>
   </div>
        </div>
    </div>
<br/>
<div className="container justify-content-center"  style={{minWidth: "1300px"}}>
 <Choose/></div>
<br/><br/>
<br/>
<br/>
<br/>

		</>
		)
}
export default Aksiya;
