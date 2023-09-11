import '../css/harvest.css'
import image from '../photos/img44.png'
import image1 from '../photos/img 2.png'
import image2 from '../photos/img 1.png'
import image3 from '../photos/img 3.png'
import image4 from '../photos/img 4.png'
import icon1 from '../photos/Icon55.png'
import icon2 from '../photos/Icon4.png'
import icon3 from '../photos/iconl.png'
import icon from '../photos/icon100.png'
import icon51 from '../photos/Icon51.png'
import zoom from '../photos/zoom.png'
import Usage from '../components/usage.js'
import Application from  '../components/calculator.js'
import Information from '../components/information.js'
import List from '../components/harvests-list.js'
import {useState} from 'react'


export default  function Mehsul(argument) {
     const [click11,setClick11]= useState(true);
     const mouseClick1 = ()   => { 
          setClick11(true)
          setClick21(false)
          document.getElementById("x").style.color="rgba(0, 155, 199, 1)"
          document.getElementById("x").style.borderBottom="1px  solid rgba(0, 155, 199, 1)"
          document.getElementById("x").style.fontWeight="500"
          document.getElementById("y").style.color="rgba(155, 155, 155, 1)"
          document.getElementById("y").style.borderBottom="none"
          document.getElementById("y").style.fontWeight="400"
      }
     const [click21,setClick21]= useState(false)
     const mouseClick2 = ()   => {
          setClick21(true)
          setClick11(false)
          document.getElementById("x").style.color="rgba(155, 155, 155, 1)"
          document.getElementById("x").style.borderBottom="none"
          document.getElementById("x").style.fontWeight="400"
          document.getElementById("y").style.color="rgba(0, 155, 199, 1)"
          document.getElementById("y").style.borderBottom="1px  solid rgba(0, 155, 199, 1)"
          document.getElementById("y").style.fontWeight="500"
      };
     const [click,setClick]= useState(true)
     const [listClick,setListClick]= useState(true)
     const [listClick2,setListClick2]= useState(false)
     const [listClick3,setListClick3]= useState(false)
     const [listClick4,setListClick4]= useState(false)

     const click1 = ()   => {
          setListClick(true)
          setListClick2(false)
          setListClick3(false)
          setListClick4(false)
     };
     const click2 = ()   => {
          setListClick2(true)
          setListClick(false)
          setListClick3(false)
          setListClick4(false)          
     };  
     const click3 = ()   => {
          setListClick3(true)
          setListClick2(false)
          setListClick(false)
          setListClick4(false)
     };
     const click4 = ()   => {
          setListClick4(true)
          setListClick2(false)
          setListClick3(false)
          setListClick(false)
          
     };
     const change = ()   => {
          setClick(false);              
         };  
     const change1 = ()   => {
          setClick(true);              
         };
     const [over,setOver]= useState(false)
     const mouseOver = ()   => {
          setOver(true);              
         };
     const mouseOut = ()   => {
          setOver(false);              
         };
return(
<>
     <div  className="container justify-content-start" style={{minWidth:"1300px",}} >
       
	 <div className="row">
	  <div className="col-1"> 
	   <ul  className="harvestul"  >
           <List src={image1} id="li1" onClick={click1}/>
           <List src={image2} id="li2" onClick={click2}/>
           <List src={image3} id="li3" onClick={click3}/>
           <List src={image4} id="li4" onClick={click4}/>
        </ul>
       </div>

       <div id="harvestd" className="col-3" >
        <div className="harvestdiv" >Çox satılan</div  >
        <div className="harvestdiv2" onMouseOver={mouseOver} onMouseOut={mouseOut}  >
         {listClick &&  <img src={image1} className="harvestimg2" />}
         {listClick2 &&  <img src={image2} className="harvestimg2" />}
         {listClick3 &&  <img src={image3} className="harvestimg2"/>}
         {listClick4 &&  <img src={image4} className="harvestimg2"/>}
         {over &&
          <img src={zoom} className="harvestimg3"/>}
        </div>
       </div>
       <div className="col-3 " id="harvestd2">
        <ul  style={{listStyle:"none"}}>
         <li ><p className="harvestp1">Bioderma</p></li>
         <li ><p className="harvestp2" >Sensibio Micellar water, 1 l, 500 ml</p></li>
         <li ><p className="harvestp3" >Həssas dərilər daxil bütün dəri tipləri üçün makiyajı, çirkə və 
                 kiri dərhal təmizləyən nəmləmdirici təsirə malik dünyanın №1 miselyar suyu. 
                 Həssas dərilər daxil bütün dəri tipləri üçün makiyajı, çirkə və kiri dərhal təmizləyən 
                 nəmləmdirici təsirə malik dünyanın №1 miselyar suyu.</p></li>
         <li ><p className="harvestp4" >20.00 AZN </p> 
              <b className="harvestp5" >14.00 AZN</b> 
         </li>
         <li className="harvestli2" >
          <Application/>
          <button className="harvestbtn" >Səbətə at<img  src={icon1} className="harvestimg4"/></button>
         </li >
        </ul>
       </div>
       <div className="col-2" style={{marginTop:"20px"}}>
       { click && 
         <>
          <button    onClick={change} className="harvestbtn2" >
           <img src={icon2} height="14px" width="16px" />
          </button> 
         </>}
       {!click && 
         <>
          <button    onClick={change1} className="harvestbtn2" >
           <img src={icon51} className="harvesticon"/> 
          </button> 
         </>}
          <button className="harvestbtn3">
            <img src={icon3} height="14px" width="14px" /> Paylaş
          </button>
        </div>
		<div className="row justify-content-center">
		<div className="harvestdiv3" >
		<p  className="harvestp6"  id="x" onClick={mouseClick1}> Məlumatlar</p>
		<p  className="harvestp7" id="y" onClick={mouseClick2}> İstifadə qaydası</p>
		</div>
		<hr  className="harvesthr" />
       </div>
      </div>
       {click11 && <Information />}
       {click21 && <Usage/>}
     </div>
<br/><br/><br/>
</>
 )
}