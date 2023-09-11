import {useState} from 'react'
import icon1 from '../photos/Icon55.png'
import frame from '../photos/Frame.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/favourite.css'
import Button1  from '../components/fav-buttons.js'
import Button2  from '../components/fav-buttons2.js'
import Button3  from '../components/fav-buttons3.js'
function Likes(argument) {
  
    const [click1,setClick1]= useState(true);
    const remove=() => {
    setClick1(false);
    };
    const [click2,setClick2]= useState(true);
    const remove2=() => {
    setClick2(false);
    };
    const [click3,setClick3]= useState(true);
    const remove3=() => {
    setClick3(false);
    };
    const [click4,setClick4]= useState(true);
    const add1=() => {
    setClick4(false);
    };
    const [click5,setClick5]= useState(true);
    const add2=() => {
    setClick5(false);
    };
    const [click6,setClick6]= useState(true);
    const add3=() => {
    setClick6(false);
    };
    const [click7,setClick7]= useState(true);
    const add=() => {
    setClick4(false);
    setClick5(false); 
    setClick6(false);
    };
return(
<>
 <div  className="container justify-content-center" id="favcon">
    <div className="row" id="favrow">
     <div className="col "  >
      <h5 className="favh"> Sevimlilər</h5>
     </div>
   
     <div className="col text-center" id="favcol1" >
      <button onClick={add} target=".blank" className="btn" id="favbtn">
       Bütün məshulları səbətə at<img  src={icon1} className="favimg"  alt="sjsj"/></button>
      </div>
    </div>
 </div>


 <div  className="container justify-content-center" id="favcon1">
    {click1 && 
    <div className="row" id="favdiv1" >
       <div className="col-4 text-start" style={{marginLeft:"-13px"}}>
        <img src={frame} className="favimg1" />
       </div>
       <div className="col-7 text-start">
        <p className="favp1" >Bioderma</p>
        <Button3 onClick={remove}/>
        <div className="favp2"><b>Sensibio Micellar water, 1 l, 500 ml</b> 
       </div>
       <div className="favdiv4" >
        <p className="favp3" >Çox satılan</p></div>
        <div className="favdiv5" >
         <p className="favp4" >20.00 AZN </p> 
         <b className="favb" >14.00 AZN</b> <br/><br/>
         { click4 && <Button1 onClick={add1}/>}
         { !click4 && <Button2/>}
        </div>
       </div>
    </div>  }  
    {click2 &&
      <div className="row" id="favdiv1" >
       <div className="col-4 text-start" style={{marginLeft:"-13px"}}>
        <img src={frame} className="favimg1" />
       </div>
       <div className="col-7 text-start">
        <p className="favp1" >Bioderma</p>
        <Button3 onClick={remove2}/>
        <div className="favp2"><b>Sensibio Micellar water, 1 l, 500 ml</b> 
       </div>
       <div className="favdiv4" >
        <p className="favp3" >Çox satılan</p></div>
        <div className="favdiv5" >
         <p className="favp4" >20.00 AZN </p> 
         <b className="favb" >14.00 AZN</b> <br/><br/>
         { click5 && <Button1 onClick={add2}/>}
         { !click5 && <Button2/>}
        </div>
       </div>
    </div>    }
    {click3 &&
     <div className="row" id="favdiv1" >
       <div className="col-4 text-start" style={{marginLeft:"-13px"}}>
        <img src={frame} className="favimg1" />
       </div>
       <div className="col-7 text-start">
        <p className="favp1" >Bioderma</p>
        <Button3 onClick={remove3}/>
        <div className="favp2"><b>Sensibio Micellar water, 1 l, 500 ml</b> 
       </div>
       <div className="favdiv4" >
        <p className="favp3" >Çox satılan</p></div>
        <div className="favdiv5" >
         <p className="favp4" >20.00 AZN </p> 
         <b className="favb" >14.00 AZN</b> <br/><br/>
         { click6&& <Button1 onClick={add3}/>}
         { !click6 && <Button2/>}
        </div>
       </div>
    </div>}
 </div> 
  <br/><br/><br/>
</>)
}
export default Likes;