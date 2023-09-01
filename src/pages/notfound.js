import {useState} from 'react'

function Notf(props) {

const stil={listStyle:"none",textAlign:"left",fontFamily: "Poppins",lineHeight: "21px",
  fontSize: "10px",fontWeight:"400",color:"rgba(117, 117, 117, 1)",letterSpacing: "0em",}


  const [klik1,setKlik1]= useState(false)
  const mouseClick1 = ()   => { 
    (!klik1) ? setKlik1(true):  setKlik1(false) 
     };
  const [klik2,setKlik2]= useState(false)
   const mouseClick2 = ()   => { 
    (!klik2) ? setKlik2(true):  setKlik2(false) 
     };
const [klik3,setKlik3]= useState(false)
 const mouseClick3 = ()   => { 
    (!klik3) ? setKlik3(true):  setKlik3(false) 
     };

const [klik4,setKlik4]= useState(false)
  const mouseClick4 = ()   => { 
    (!klik4) ? setKlik4(true):  setKlik4(false) 
     };

const [klik,setKlik]= useState(false);

  const mouseClick = ()   => { 
    (!klik) ? setKlik(true):  setKlik(false) 
     };
	return(
		<>
    < div  className="container justify-content-center"  style={{ minWidth:"1300px",marginBottom:"50px",}}>
        <h5 style={{fontFamily: "Poppins",width:"242px",height: "21px",lineHeight: "21px",fontSize: "18px",fontWeight:"500",
                    color:"rgba(0, 0, 0, 1)",letterSpacing: "0em",textAlign:"left",marginBottom:"30px",marginLeft:"40px"}}>FILTER</h5>
                <hr  style={{marginLeft:"40px"}}/>
    </div>





    <div className="container justify-content-center" style={{ minWidth:"1300px",width:"1300px",marginTop:"-20px",}}>
  <div className="row " style={{marginLeft:"-5px"}}>
  <div className="col-4"    style={{width:"231px",}}>
 <ul style={{listStyle:"none",textAlign:"left",fontFamily: "Poppins",width:"242px",height: "21px",lineHeight: "21px",
  fontSize: "12px",fontWeight:"500",color:"rgba(0, 0, 0, 1)",letterSpacing: "0em",}}>
 <li   > <p  onClick={mouseClick} > Kateqoriyalar      </p>  
  { klik && ( <>
 <ul  style={{listStyle:"none",textAlign:"left",fontFamily: "Poppins",lineHeight: "21px",
  fontSize: "12px",fontWeight:"500",color:"rgba(117, 117, 117, 1)",letterSpacing: "0em",marginTop:"15px",marginBottom:"15px"}}>
 <li> Təmizləyicilər(11)</li>
 <li> Qulluq(5)</li>
 </ul> </>)}
 <hr/></li>
    <li onClick={mouseClick1}  >  Brendlər və məhsullar 
{klik1 && (
<div style={stil}>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
Bioderma(67)  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
Institut Esthederm(117)
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
Etat Pur(30)
  </label>
</div>

</div>)}

      <hr/> </li> 
  <li onClick={mouseClick2}>  Yaş aralığı
  {klik2 && (
<div style={stil}>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
18 - 25(67)  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
25 - 40(117)
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
40 - 50+(30)  </label>
</div>
  
</div>)}<hr/> </li> 
  <li onClick={mouseClick3}>Dəri tipi
  {klik3 && (
<div style={stil}>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
Həssas və nəmsiz dərilər(11)  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
Həssas dərilər daxil bütün dəri tipləri(5)  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
Yağlı, qabıqlanan, seboreya problemi olan həssas dərilər(5)  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
Yağlı, qabıqlanan, seboreya problemi olan həssas dərilər(5)</label>
</div>

</div>)} <hr/></li>
  <li>  Narahatlıqlar<hr/></li>
  <li onClick={mouseClick4} > Qiymət
  { klik4 && ( <>
  <br/>  <br/>

  <input type="text"  placeholder="min." style={{borderRadius:"10px",border:"1px solid gray",width:"90px",height:"40px"}}/>
   <input type="text"  placeholder="max." style={{borderRadius:"10px",border:"1px solid gray",width:"90px",height:"40px",marginLeft:"20px"}}/>
</>
   )}   <hr/></li>

   </ul>

    </div>
    <div className="col-7  mb-5"  style={{width:"768px",height:"400px",backgroundColor:"white",
    marginLeft:"35px",textAlign:"left",height: "21px",lineHeight: "21px",fontSize: "18px",fontWeight:"500",
                    color:"rgba(0, 0, 0, 1)",letterSpacing: "0em",}}> 
    Axtardığınız söz üzrə heç bir nəticə tapılmadı. 
   </div>
        </div>
    </div>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

		</>
		)
}
export default Notf;