    import sekil4  from'../photos/Frame 47652.png'
    import sekil5 from  '../photos/image20.png'
    import '../css/more.css'
    import '../css/result.css'

export default function More() {
   const over=() =>{
document.getElementById("1").style.backgroundColor="#54B4D3"  ;
document.getElementById("1").style.color="white"  ;

    }
     const out=() =>{
document.getElementById("1").style.backgroundColor="white"  ;
document.getElementById("1").style.color="rgba(0, 155, 199, 1)"  ;

    }
	return(
    <>
<div className="container justify-content-center" id="resultcon2" >
 <div className="row my-5" id="morecon" >
  
  <div className="col-6  mb-2" >
   <a href="/faydali"> 
    <img src={sekil4}   className="more1" />
   </a>
  </div>

  <div className="col-6" >
   <a href="/hekim-cixislari" >
    <img src={sekil5}   className="more2" /
   ></a>
  </div>

 </div>
</div>
<div className="justify-content-center mb-5 text-center">
      <a href="/blog" className="resulta" id="1"  onMouseOver={over} onMouseOut={out} >Daha çox</a>
</div>
 </>
  )
}
