    import icon from '../photos/icon100.png'
    import '../css/usage.css'

export default function Usage(argument) {	
	return(
<div className="row justify-content-start">
 <div className="col-2" style={{marginLeft:"13px"}}> 
  <ul >
	<li className="usageli"><img src={icon} className="usageimg"/> 
       <p className="usagep">Sensibio H2O ilə nəm makiyaj pambıq.</p></li>
	<li className="usageli"> <img src={icon} className="usageimg"/>  
	   <p className="usagep">Dərinizi yumşaq bir şəkildə təmizləyin və/yaxud üzünüzdən və göz ətrafınızdan makiyajı silin.</p></li>
	<li className="usageli"> <img src={icon} className="usageimg"/>  
	   <p className="usagep">Tamamilə təmizlənənə qədər təkrar tətbiq edin. Üzünüzü təmiz bir dəsmal ilə yumşaq bir<br/> şəkildə qurutun.</p></li>
	<li className="usageli2"> <img src={icon} className="usageimg"/>  
	   <p className="usagep">Səhər və/və ya axşam istifadə üçün uyğundur - həftənin 7 günü.</p></li>
  </ul>
 </div>
</div>
		)
}