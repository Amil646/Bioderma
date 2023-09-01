    import img3 from  '../sekil/img 3.png'

  import sekil9 from  '../sekil/image40.png'

function Caption(argument) {
	return(   
      <div style={{width:"1300px",height:"300px",borderRadius:"10px",marginLeft:"-30px"}}>
        <div  style={{position:"absolute",zIndex:"1",marginLeft:"890px",marginTop:"30px"   }}   > 
        <img  src={img3} height="235px"  width="180px"/></div>

  <img src={sekil9}   height="300px" width="1170px" style={{borderRadius:"10px"}}/>
      <div style={{ fontFamily: "Poppins",
fontSize: "24px",
fontWeight: "600",
lineHeight: "36px",
letterSpacing: "0em",
textAlign:"left",
color: "rgba(255, 255, 255, 1)", width: "237px", height: "72px" ,marginTop:"-270px", marginLeft: "115px",}}> MEGA DISCOUNT OF
THE MONTH <br/>
<hr style={{ color:"rgba(255, 255, 255, 1)", widht:"100px", height: "10px",}}/><br/>
<p style={{marginTop:"-40px"}}>UP TO <b>30%</b> OFF</p> <br/><br/><br/>
<p style={{fontFamily: "Poppins",fontWeight:"400px",
fontSize: "16px",
lineHeight: "21px",
letterSpacing: "0em",
textAlign:"left",marginTop:"-70px",}}
>Make-up removal</p>
<p style={{fontFamily: "Poppins",fontWeight:"500px",
fontSize: "18px",
fontWeight: "500",
lineHeight:"21px",
letterSpacing: "0em",
textAlign:"left",
color: "rgba(0, 0, 0, 1)", 
marginTop:"-10px", position: "absolute",}}>Sensibio Micellar water, 1 l</p>
</div>
</div>
)
}
export default Caption;