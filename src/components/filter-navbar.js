import {useState} from 'react'

export default function Navbar(argument) {
	 
  const [click,setClick]= useState(false);
  const mouseClick = ()   => { 
    (!click) ? setClick(true):  setClick(false)};

  const [click1,setClick1]= useState(false)
  const mouseClick1 = ()   => { 
    (!click1) ? setClick1(true):  setClick1(false) };

  const [click2,setClick2]= useState(false)
  const mouseClick2 = ()   => { 
    (!click2) ? setClick2(true):  setClick2(false)};

  const [click3,setClick3]= useState(false)
  const mouseClick3 = ()   => { 
    (!click3) ? setClick3(true):  setClick3(false)};

  const [click4,setClick4]= useState(false)
  const mouseClick4= ()   => { 
    (!click4) ? setClick4(true):  setClick4(false) };

  const change1 = ()   => { 
    document.getElementById("1").style.color="rgba(0, 155, 199, 1)"
    document.getElementById("1").style.fontWeight="500"
    document.getElementById("2").style.fontWeight="400"
    document.getElementById("2").style.color="rgba(86, 86, 86, 1)"
    }

  const change2 = ()   => { 
    document.getElementById("2").style.fontWeight="500"
    document.getElementById("2").style.color="rgba(0, 155, 199, 1)"
    document.getElementById("1").style.color="rgba(86, 86, 86, 1)"
    document.getElementById("1").style.fontWeight="400"
    }
	return(
	  	<>
         <li>
          <p  onClick={mouseClick} > Kateqoriyalar</p>  
          {click && (<>
          <ul  className="filterul2" >
           <li  ><a onClick={change1} id="1" href="#" className="filterlist"> Təmizləyicilər(11)</a></li>
           <li> <a onClick={change2} id="2" href="#" className="filterlist">Qulluq(5)</a></li>
          </ul>
           </>)}
           <hr className="filterhr1"/>
         </li>
         <li><p  onClick={mouseClick1} className="filterp">Brendlər və məhsullar</p>   
          {click1 && (
           <div className="filterdiv">
            <div class="form-check">
             <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
             <label class="form-check-label" htmlFor="flexCheckDefault1">Bioderma(67)</label>
            </div>
            <div class="form-check">
             <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
             <label class="form-check-label" htmlFor="flexCheckDefault2">Institut Esthederm(117)</label>
            </div>
            <div class="form-check">
             <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3"/>
             <label class="form-check-label" htmlFor="flexCheckDefault3">Etat Pur(30)</label>
            </div>
            <br/>
           </div>)}
           <hr className="filterhr1"/>
         </li>
         <li ><p  onClick={mouseClick2} className="filterp">Yaş aralığı </p>  
           {click2 && (
            <div className="filterdiv">
             <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault4"/>
              <label class="form-check-label" htmlFor="flexCheckDefault4">18 - 25(67)</label>
             </div>
             <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault5"/>
              <label class="form-check-label" htmlFor="flexCheckDefault5">25 - 40(117)</label>
             </div>
             <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault6"/>
              <label class="form-check-label" htmlFor="flexCheckDefault6">40 - 50+(30)</label>
             </div>
             <br/>
            </div>)}
            <hr className="filterhr1"/>
         </li>
         <li > <p  onClick={mouseClick3} className="filterp" >Dəri tipi</p>
          {click3 && (
           <div className="filterdiv">
            <div class="form-check" >
             <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault7"/>
             <label class="form-check-label" for="flexCheckDefault7"  >Həssas və nəmsiz dərilər(11)</label>
           </div>
           <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault8"/>
            <label class="form-check-label" for="flexCheckDefault8">Həssas dərilər daxil bütün dəri tipləri(5)</label>
           </div>
           <div class="form-check">
           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault9"/>
           <label class="form-check-label" for="flexCheckDefault9">Yağlı, qabıqlanan, seboreya problemi olan həssas dərilər(5)</label>
          </div>
          <div class="form-check">
           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault10"/>
           <label class="form-check-label" for="flexCheckDefault10">Yağlı, qabıqlanan, seboreya problemi olan həssas dərilər(5)</label>
          </div>
          <br/>
         </div>)}
         <hr className="filterhr1"/>
        </li>
        <li> 
         <p className="filterp">Narahatlıqlar</p>
         <hr className="filterhr1"/>
        </li>
        <li > 
         <p  onClick={mouseClick4} className="filterp">Qiymət</p>
         {click4 && ( 
          <div className="filterdiv2">
           <input type="text"  placeholder="min." className="filterinput" />
           <input type="text"  placeholder="max."  className="filterinput2"  />
          </div> )}  
          <hr className="filterhr1"/>
        </li>
       </> 
		)
}