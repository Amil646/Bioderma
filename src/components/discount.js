import sekil2 from  '../sekil/img41.png'
  import sekil21 from  '../sekil/image12.png'

export default function Discount(argument) {
	return(
		<>
		  <img src={sekil21}  height="400px" width="377px" style={{index:"-1",borderRadius:"10px",border:" 1px solid rgba(219, 51, 51, 1)" }}/>
  <div style={{fontFamily: "Poppins",fontSize: "18px",lineHeight: "27px",letterSpacing: "0em",textAlign:"left",color: "#444A51",
               width:"273px",height: "120px",position: "absolute",marginTop: "-380px",
               marginLeft: "60px",}}><p>Ləkəyə qarşı<br/> <b>Parlaqladıcı</b> qayğı:</p></div>
<div className="text-muted" style={{fontFamily: "Poppins",fontSize: "16px",lineHeight: "21px",letterSpacing: "0em",textAlign:"left",
width: "144px",height:"21px",marginTop: "-130px",position:"absolute",marginLeft:"60px"}}>Make-up removal 
 

 <p style={{fontFamily: "Poppins",fontSize: "18px",fontWeight: "500",lineHeight:"21px",letterSpacing: "0em",
textAlign:"left",color: "#000000",position: "absolute",width: "234px",}}>Sensibio Micellar water, 1 l</p></div>
 <div style={{ width: "158px",height: "45px",backgroundColor: "#DB3333",borderRadius: "4px",position: "absolute",marginTop: "-60px",marginLeft:"60px"}}>
 <p style={{color: "white",  textAlign:"center"  ,
            fontFamily: 'Poppins',fontStyle: "normal",
            fontWeight: "600",fontSize: "18px",
            lineHeight: "40px",padding:"2,5px 24px",}}>30% Endirim</p></div>
      <img src={sekil2} style={{ height: "289px",
         width:"127px",marginTop:"-400px",marginLeft:"180px",borderRadius: "0px",}}/>
         </>)
}
