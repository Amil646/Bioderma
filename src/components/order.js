
export default function Order(argument) {
  const stil={marginLeft:"20px",fontFamily: "Poppins",lineHeight: "18px",fontSize: "12px",fontWeight:"400",
                        color:"rgba(155, 155, 155, 1)",letterSpacing: "0em",}
  const stil2={fontFamily: "Poppins", 
                        lineHeight: "21px",fontSize: "12px",fontWeight:"500",color:"rgba(68, 74, 81, 1)",letterSpacing: "0em",}
  return (<>
      <h5 style={{fontFamily: "Poppins",width:"242px",height: "21px",lineHeight: "21px",fontSize: "18px",fontWeight:"600",
                        color:"rgba(0, 0, 0, 1)",letterSpacing: "0em",textAlign:"left",marginLeft:"20px",marginTop:"20px"}}> Səbətdəki məhsullar</h5><br/>
                       <pre style={stil}>Məhsulların qiyməti:                        <b style={stil2}> 40.00 AZN</b></pre>
                        <pre style={stil}>Endirim                                            <b style={stil2}> -12.00 AZN</b></pre>
                        <hr style={{width:"237px",marginLeft:"20px",backgroundColor:"rgba(238, 238, 238, 1)"}}/>
                        <pre style={{marginLeft:"20px",fontFamily: "Poppins",lineHeight: "21px",fontSize: "14px",fontWeight:"500",
                        color:"rgba(0, 155, 199, 1)",letterSpacing: "0em",}}>Toplam qiymət:                   <b style={{fontFamily: "Poppins", 
                        lineHeight: "21px",fontSize: "16px",fontWeight:"600",color:"rgba(68, 74, 81, 1)",letterSpacing: "0em",}}>28.00 AZN</b></pre><br/>
                        </>)
}
