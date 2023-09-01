export default   function Information(argument) {
	const stil1={width:"145px",height:"24px",marginTop:"10px",textAlign:"left",}
	const stil2={fontFamily: "Poppins",lineHeight: "18px",fontSize: "12px",fontWeight:"400",color:"rgba(117, 117, 117, 1)",letterSpacing: "0em",width:"377px"}
	const stil4={fontFamily: "Poppins",lineHeight: "24px",fontSize: "16px",fontWeight:"500",color:"rgba(39, 39, 39, 1)",letterSpacing: "0em",}
	const stil3={width:"377px",height:"19px",marginTop:"15px",textAlign:"left",}

return(
	<>
	<div className="row justify-content-start">
<div className="col-2" style={{marginLeft:"13px"}}>
		<ul style={{listStyle:"none"}}>
	<li style={stil1}>  <p style={stil4}>Narahatlıqlar:</p>         </li>
	<li style={stil1}>     <p style={stil4}>Uyğun dəri tipi:</p>       </li>
	<li style={stil1}> <p style={stil4}>Yaş aralığı:</p>   </li>
	<li style={stil1}>    <p style={stil4}>İstifadə zonası:</p>       </li>
	<li style={stil1}>    <p style={stil4}>Məhsulun faydası:</p>    </li>
	</ul>
</div>

	<div className="col-2" style={{marginLeft:"-30px"}}>

	<ul style={{listStyle:"none"}}>
	<li style={stil3}>  <p style={stil2}>Həssas və nəmsiz dərilər</p>          </li>
	<li style={stil3}>  <p style={stil2}>Yağlı, qabıqlanan, seboreya problemi olan həssas dərilər</p>          </li>
	<li style={stil3}>  <p style={stil2}>Gənc və yetkin şəxslər üçün</p>          </li>
	<li style={stil3}>  <p style={stil2}>Üz və bədən</p>          </li>
	<li style={stil3}>  <p style={stil2}>Həssas dərilər daxil bütün dəri tipləri üçün makiyajı, çirkə<br/> və kiri dərhal təmizləyən nəmləmdirici təsirə malik<br/> dünyanın №1 miselyar suyu.</p></li>

	</ul>
</div>


</div>
	</>
	)
}