import '../css/information.css'
export default   function Information(argument) {
return(
<>
 <div className="row justify-content-start">
  <div className="col-2" style={{marginLeft:"13px"}}>
   <ul >
	<li className="infoli1"><p className="infop1">Narahatlıqlar:</p>         </li>
	<li className="infoli1"><p className="infop1">Uyğun dəri tipi:</p>       </li>
	<li className="infoli1"><p className="infop1">Yaş aralığı:</p>   </li>
	<li className="infoli1"><p className="infop1">İstifadə zonası:</p>       </li>
	<li className="infoli1"><p className="infop1">Məhsulun faydası:</p>    </li>
   </ul>
  </div>

 <div className="col-2" style={{marginLeft:"-30px"}}>
   <ul>
	<li className="infoli2">  <p className="infop2">Həssas və nəmsiz dərilər</p>          </li>
	<li className="infoli2">  <p className="infop2">Yağlı, qabıqlanan, seboreya problemi olan həssas dərilər</p>          </li>
	<li className="infoli2">  <p className="infop2">Gənc və yetkin şəxslər üçün</p>          </li>
	<li className="infoli2">  <p className="infop2">Üz və bədən</p>          </li>
	<li className="infoli2">  <p className="infop2">Həssas dərilər daxil bütün dəri tipləri üçün makiyajı, çirkə<br/> və kiri dərhal təmizləyən nəmləmdirici təsirə malik<br/> dünyanın №1 miselyar suyu.</p></li>
   </ul>
 </div>
</div>
</>
	)
}