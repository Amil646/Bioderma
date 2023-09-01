    import icon from '../sekil/icon100.png'

export default function Usage(argument) {
	const stil2={fontFamily: "Poppins",lineHeight: "18px",fontSize: "12px",fontWeight:"400",color:"rgba(117, 117, 117, 1)",letterSpacing: "0em",width:"565px",height:"19px",marginTop:"-19px",marginLeft:"20px"}
			const stil3={width:"377px",height:"19px",marginTop:"15px",textAlign:"left",}

	return(
		<div className="row justify-content-start">
<div className="col-2" style={{marginLeft:"13px"}}>
		<ul style={{listStyle:"none"}}>
	<li style={stil3}><img src={icon} height="12px" width="13px"  /> <p style={stil2}>Sensibio H2O ilə nəm makiyaj pambıq.</p>          </li>
	<li style={stil3}> <img src={icon} height="12px" width="13px"  />  <p style={stil2}>Dərinizi yumşaq bir şəkildə təmizləyin və/yaxud üzünüzdən və göz ətrafınızdan makiyajı silin.</p>          </li>
	<li style={stil3}> <img src={icon} height="12px" width="13px"  />  <p style={stil2}>Tamamilə təmizlənənə qədər təkrar tətbiq edin. Üzünüzü təmiz bir dəsmal ilə yumşaq bir<br/> şəkildə qurutun.</p>          </li>
	<li style={{width:"377px",height:"19px",marginTop:"30px",textAlign:"left",}}> <img src={icon} height="12px" width="13px"/>  <p style={stil2}>Səhər və/və ya axşam istifadə üçün uyğundur - həftənin 7 günü.</p>          </li>
</ul>
</div>
</div>
		)
}