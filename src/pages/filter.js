import {useState} from 'react'
    import icon1 from '../sekil/Icon5.png' 
     import '../css/App.css'
      import sekil41 from  '../sekil/img 1.png'
  import sekil42 from  '../sekil/img 2.png'
  import sekil43 from  '../sekil/img 3.png'

function Filter(argument) {

const stil={listStyle:"none",textAlign:"left",fontFamily: "Poppins",lineHeight: "21px",
  fontSize: "10px",fontWeight:"400",color:"rgba(117, 117, 117, 1)",letterSpacing: "0em",}
 const stil2={ height:"45px", width: "278px", fontFamily: "Poppins", fontSize: "18px", fontWeight: "400"}


  
const [klik,setKlik]= useState(false);
const reng1 = ()   => { 
     document.getElementById("1").style.color="rgba(0, 155, 199, 1)"
          document.getElementById("1").style.fontWeight="500"
          document.getElementById("2").style.fontWeight="400"
          document.getElementById("2").style.color="rgba(86, 86, 86, 1)"

     }
     const reng2 = ()   => { 
     document.getElementById("2").style.color="rgba(0, 155, 199, 1)"
      document.getElementById("1").style.color="rgba(86, 86, 86, 1)"
      document.getElementById("1").style.fontWeight="400"
      document.getElementById("2").style.fontWeight="500"


     }

  const mouseClick = ()   => { 
    (!klik) ? setKlik(true):  setKlik(false) 
     };const [klik1,setKlik1]= useState(false)
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
     };const [klik4,setKlik4]= useState(false)
   const mouseClick4= ()   => { 
    (!klik4) ? setKlik4(true):  setKlik4(false) 
     };

	return(
		<>
    < div  className="container justify-content-center"  style={{ minWidth:"1300px",marginBottom:"50px",}}>
        <h5 style={{fontFamily: "Poppins",width:"242px",height: "21px",lineHeight: "21px",fontSize: "18px",fontWeight:"500",
                    color:"rgba(0, 0, 0, 1)",letterSpacing: "0em",textAlign:"left",marginBottom:"30px",marginLeft:"40px"}}>FILTER</h5>
                <hr  style={{marginLeft:"40px",width:"1180px"}}/>
    </div>





    <div className="container justify-content-center" style={{ minWidth:"1300px",width:"1300px",marginTop:"-20px",}}>
  <div className="row " style={{marginLeft:"-10px"}}>
  <div className="col-3"    style={{width:"365px",height:"339px",}}>
  <form id="form1" action="/filter-tapilmadi">
  <ul style={{listStyle:"none",textAlign:"left",fontFamily: "Poppins",width:"242px",height: "21px",lineHeight: "21px",
  fontSize: "12px",fontWeight:"500",color:"rgba(0, 0, 0, 1)",letterSpacing: "0em",}}>
 <li   > <p  onClick={mouseClick} > Kateqoriyalar      </p>  
  { klik && (<>
 <ul  style={{listStyle:"none",textAlign:"left",fontFamily: "Poppins",lineHeight: "21px",
  fontSize: "12px",fontWeight:"500",color:"rgba(117, 117, 117, 1)",letterSpacing: "0em",marginTop:"15px",marginBottom:"15px",}}>
 <li  ><a onClick={reng1} id="1" href="#" style={{textDecoration:"none",color:"rgba(86, 86, 86, 1)",fontWeight:"400"}}> Təmizləyicilər(11)</a></li>
 <li> <a onClick={reng2} id="2" href="#" style={{textDecoration:"none",color:"rgba(86, 86, 86, 1)",fontWeight:"400"}}>Qulluq(5)</a></li>
 </ul> </>)}
 <hr style={{marginTop:"-10px",width:"203px"}}/></li>
    <li   > <p  onClick={mouseClick1} style={{marginTop:"-5px"}}>Brendlər və məhsullar  </p>   
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
</div><br/>

</div>)}

 <hr style={{marginTop:"-10px",width:"198px"}}/></li>
  <li ><p  onClick={mouseClick2} style={{marginTop:"-5px"}}>Yaş aralığı </p>  
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
<br/>
  
</div>)}
 <hr style={{marginTop:"-10px",width:"198px"}}/></li>
  <li > <p  onClick={mouseClick3} style={{marginTop:"-5px"}}>Dəri tipi</p>
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
<br/>
</div>)}
 <hr style={{marginTop:"-10px",width:"198px"}}/></li>
  <li>  <p style={{marginTop:"-5px"}}>Narahatlıqlar</p>
 <hr style={{width:"198px",marginTop:"-10px"}} /></li>

  <li > <p  onClick={mouseClick4} style={{marginTop:"-5px"}}>Qiymət</p>
  { klik4 && ( <div style={{marginTop:"-5px",marginBottom:"15px"}}>
  

  <input type="text"  placeholder="min." style={{borderRadius:"10px",border:"1px solid gray",width:"90px",height:"40px"}}/>
   <input type="text"  placeholder="max." style={{borderRadius:"10px",border:"1px solid gray",width:"90px",height:"40px",marginLeft:"15px",}}/>
</div>
   )}  
 <hr  style={{width:"198px",marginTop:"-10px"}}/></li>
   <div style={{width:"280px",}}>
    <input type="reset" form="form1" key="flexCheckDefault" value="Sıfırla" style={{width:"40px",height:"22px",textAlign:"left",lineHeight: "20px",fontSize: "14px",fontWeight:"500",
                    color:"rgba(0, 155, 199, 1)",letterSpacing: "0em",fontFamily:"Poppins",border:"none",backgroundColor:"white",marginLeft:"-5px",marginRight:"25px"}}/>
  
  <input type="submit" form="form1" value="Tətbiq et" style={{width:"150px",height:"35px",textAlign:"center",lineHeight: "20px",fontSize: "14px",fontWeight:"500",
                    color:"rgba(255, 255, 255, 1)",letterSpacing: "0em",fontFamily:"Poppins",backgroundColor:"rgba(0, 155, 199, 1)",borderRadius:"2px",border:"none",paddingRight:"30px"}}/>
   </div>

   </ul>
   </form>

    </div>
    <div className="row  mb-5"  style={{width:"1000px",height:"400px",backgroundColor:"white",
    marginLeft:"-123px",}}> 
   <div className="col-3" >
<div className="card-borderless" style={{ width:"278px", marginLeft:"95px",}}>
  <div style={{backgroundColor:"rgba(238, 238, 238, 1)",width:"278px",height:"278px"}}>
  <img src={sekil42} className="cardi"  width="78px" height="178px" style={{marginTop:"50px"}} /></div>
    <div style={{ width: "87px",height:"26px", background:"rgba(0, 155, 199, 1)", borderRadius: "4px", marginLeft: "10px", marginTop: "-268px", position: "absolute"}}>
        <p style={{ color: "white",  textAlign:"center"  ,fontFamily: 'Poppins', padding: "4px 8px ",
    fontStyle: "normal",fontSize: "12px",lineHeight: "18px", fontWeight: "400"}}>Çox satılan</p></div>

  <div className="card-body">
<p className="card-title  text-muted"    style={{ textAlign:"left",marginTop:"20px"}} >Bioderma</p>
  <h5 className="card-text"   style={{ textAlign:"left",marginTop:"10px"}}>Sensio Micellar water, 1 l</h5><br/>
          <p className="card-text" style={{color: "#444A51" , textAlign: "left" ,fontFamily: "Poppins", fontSize: "18px", fontWeight: "500",
lineHeight:"21px",
letterSpacing: "0em",}}>14.00 AZN</p>


    <a href="/mehsul" className="btn btn-outline-info"  target=".blank" style={stil2}>
     Səbətə at<img  src={icon1} height="20px "   width="20px "      style={{marginLeft: "10px",marginTop:"-5px" }}/></a>
  </div>
</div>
</div>
   <div className="col-3" >
<div className="card-borderless" style={{ width:"278px", marginLeft:"150px",}}>
 <div style={{backgroundColor:"rgba(238, 238, 238, 1)",width:"278px",height:"278px"}}>
  <img src={sekil41}  className="cardi"  width="78px" height="178px" style={{marginTop:"50px"}} /></div>
    <div style={{ width: "87px",height:"26px", background:"rgba(0, 155, 199, 1)", borderRadius: "4px", marginLeft: "10px", marginTop: "-268px", position: "absolute"}}>
        <p style={{ color: "white",  textAlign:"center"  ,fontFamily: 'Poppins', padding: "4px 8px ",
    fontStyle: "normal",fontSize: "12px",lineHeight: "18px", fontWeight: "400"}}>Çox satılan</p></div>
  <div className="card-body">
<p className="card-title  text-muted"    style={{ textAlign:"left",marginTop:"20px"}}>Bioderma</p>
  <h5 className="card-text"   style={{ textAlign:"left",marginTop:"10px"}}>Sensio Micellar water, 1 l</h5><br/>
          <p className="card-text" style={{color: "#444A51" , textAlign: "left" ,fontFamily: "Poppins", fontSize: "18px", fontWeight: "500",
lineHeight:"21px",
letterSpacing: "0em",}}>14.00 AZN</p>


    
    <a href="/mehsul"  target=".blank" className="btn btn-outline-info" style={stil2}>
     Səbətə at<img  src={icon1} height="20px "   width="20px "      style={{marginLeft: "10px",marginTop:"-5px" }}/></a>
  </div>
</div>
</div>
   <div className="col-3" >
<div className="card-borderless" style={{ width:"278px", marginLeft:"200px",}}>
 < div style={{backgroundColor:"rgba(238, 238, 238, 1)",width:"278px",height:"278px"}}>
  <img src={sekil43} className="cardi"  width="78px" height="178px" style={{marginTop:"50px"}} /></div>
    <div style={{ width: "87px",height:"26px", background:"rgba(0, 155, 199, 1)", borderRadius: "4px", marginLeft: "10px", marginTop: "-268px", position: "absolute"}}>
        <p style={{ color: "white",  textAlign:"center"  ,fontFamily: 'Poppins', padding: "4px 8px ",
    fontStyle: "normal",fontSize: "12px",lineHeight: "18px", fontWeight: "400"}}>Çox satılan</p></div>
  <div className="card-body">
<p className="card-title  text-muted"    style={{ textAlign:"left",marginTop:"20px"}} >Bioderma</p>
  <h5 className="card-text"   style={{ textAlign:"left",marginTop:"10px"}}>Sensio Micellar water, 1 l</h5><br/>
          <p className="card-text" style={{color: "#444A51" , textAlign: "left" ,fontFamily: "Poppins", fontSize: "18px", fontWeight: "500",
lineHeight:"21px",
letterSpacing: "0em",}}>14.00 AZN</p>



    <a href="/mehsul"  target=".blank" className="btn btn-outline-info" style={stil2}>
     Səbətə at<img  src={icon1} height="20px "   width="20px "      style={{marginLeft: "10px",marginTop:"-5px" }}/></a>
  </div>
</div>
</div>
   </div>
        </div>


<div className="row  mb-5"  style={{width:"1000px",height:"400px",backgroundColor:"white",marginLeft:"242px",marginTop:"60px"}}> 
   <div className="col-3" >
<div className="card-borderless" style={{ width:"278px", marginLeft:"95px",}}>
< div style={{backgroundColor:"rgba(238, 238, 238, 1)",width:"278px",height:"278px"}}>
  <img src={sekil42} className="cardi"  width="78px" height="178px" style={{marginTop:"50px"}} /></div>
    <div style={{ width: "87px",height:"26px", background:"rgba(0, 155, 199, 1)", borderRadius: "4px", marginLeft: "10px", marginTop: "-268px", position: "absolute"}}>
        <p style={{ color: "white",  textAlign:"center"  ,fontFamily: 'Poppins', padding: "4px 8px ",
    fontStyle: "normal",fontSize: "12px",lineHeight: "18px", fontWeight: "400"}}>Çox satılan</p></div>
  <div className="card-body">
<p className="card-title  text-muted"    style={{ textAlign:"left",marginTop:"20px"}} >Bioderma</p>
  <h5 className="card-text"   style={{ textAlign:"left",marginTop:"10px"}}>Sensio Micellar water, 1 l</h5><br/>
          <p className="card-text" style={{color: "#444A51" , textAlign: "left" ,fontFamily: "Poppins", fontSize: "18px", fontWeight: "500",
lineHeight:"21px",
letterSpacing: "0em",}}>14.00 AZN</p>


    <a href="/mehsul" className="btn btn-outline-info" style={stil2}>
     Səbətə at<img  src={icon1} height="20px "   width="20px "      style={{marginLeft: "10px",marginTop:"-5px" }}/></a>
  </div>
</div>
</div>
   <div className="col-3" >
<div className="card-borderless" style={{ width:"278px", marginLeft:"150px",}}>
< div style={{backgroundColor:"rgba(238, 238, 238, 1)",width:"278px",height:"278px"}}>
  <img src={sekil43} className="cardi"  width="78px" height="178px" style={{marginTop:"50px"}} /></div>
    <div style={{ width: "87px",height:"26px", background:"rgba(0, 155, 199, 1)", borderRadius: "4px", marginLeft: "10px", marginTop: "-268px", position: "absolute"}}>
        <p style={{ color: "white",  textAlign:"center"  ,fontFamily: 'Poppins', padding: "4px 8px ",
    fontStyle: "normal",fontSize: "12px",lineHeight: "18px", fontWeight: "400"}}>Çox satılan</p></div>
  <div className="card-body">
<p className="card-title  text-muted"    style={{ textAlign:"left",marginTop:"20px"}} >Bioderma</p>
  <h5 className="card-text"   style={{ textAlign:"left",marginTop:"10px"}}>Sensio Micellar water, 1 l</h5><br/>
          <p className="card-text" style={{color: "#444A51" , textAlign: "left" ,fontFamily: "Poppins", fontSize: "18px", fontWeight: "500",
lineHeight:"21px",
letterSpacing: "0em",}}>14.00 AZN</p>


    <a href="/mehsul" className="btn btn-outline-info" style={stil2}>
     Səbətə at<img  src={icon1} height="20px "   width="20px "      style={{marginLeft: "10px",marginTop:"-5px" }}/></a>
  </div>
</div>
</div>
   <div className="col-3" >
<div className="card-borderless" style={{ width:"278px", marginLeft:"200px",}}>
< div style={{backgroundColor:"rgba(238, 238, 238, 1)",width:"278px",height:"278px"}}>
  <img src={sekil41} className="cardi"  width="78px" height="178px" style={{marginTop:"50px"}} /></div>
    <div style={{ width: "87px",height:"26px", background:"rgba(0, 155, 199, 1)", borderRadius: "4px", marginLeft: "10px", marginTop: "-268px", position: "absolute"}}>
        <p style={{ color: "white",  textAlign:"center"  ,fontFamily: 'Poppins', padding: "4px 8px ",
    fontStyle: "normal",fontSize: "14px",lineHeight: "18px", fontWeight: "400"}}>Çox satılan</p></div> 
  <div className="card-body">
<p className="card-title  text-muted"    style={{ textAlign:"left",marginTop:"20px"}} >Bioderma</p>
  <h5 className="card-text"   style={{ textAlign:"left",marginTop:"10px"}}>Sensio Micellar water, 1 l</h5><br/>
          <p className="card-text" style={{color: "#444A51" , textAlign: "left" ,fontFamily: "Poppins", fontSize: "18px", fontWeight: "500",
lineHeight:"21px",
letterSpacing: "0em",}}>14.00 AZN</p>



    <a href="/mehsul"  target=".blank" className="btn btn-outline-info" style={stil2}>
     Səbətə at<img  src={icon1} height="20px "   width="20px "      style={{marginLeft: "10px",marginTop:"-5px" }}/></a>
  </div>
</div>
</div>
   </div>
        


    </div>
<br/><br/><br/><br/>

</>

	)

}
export default Filter;