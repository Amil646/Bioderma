  import '../css/results.css'
  import '../css/result.css'
  import 'bootstrap/dist/css/bootstrap.min.css';
  import sekil41 from  '../photos/img 1.png'
  import sekil42 from  '../photos/img 2.png'
  import sekil43 from  '../photos/img 3.png'
  import sekil44 from  '../photos/img 4.png'
  import More from '../components/more.js'
  import Results from '../components/results.js'
  import Text from '../components/result-text.js'
  
function Result(argument) {
   

	return(
<>
 <div  className="container justify-content-center" id="resultcon1" >
  <div className="row" id="resultrow">
    <div className="col-8"   >
     <h5 className="resulth" > “Serum” üçün axtarış nəticələri:</h5>
    </div>
    <div className="col-3 " id="resultcol" >
     <p className="resulth2" >“Serum” üçün kateqoriyalar</p>
    </div>
  </div>


  <div className="row" id="resultrow2" >
   <div className="col-2" >
      <Results src={sekil41}/>
   </div>
   <div className="col-2"  id="results1">
      <Results src={sekil42}/>
   </div>
   <div className="col-2" id="results2">
      <Results src={sekil43}/>
   </div>
   <div className="col-2" id="results3" >
      <Results src={sekil44}/>
      <div className="resultborder"></div>
   </div>

   <div className="col-2 " id="result1" >
    <ul className="resultul">
     <li>
      <Text id="1" text="Sensibio Serum" />
     </li>
     <li>
      <Text id="2" text="Hydrabio Serum" />
     </li>
     <li>
      <Text id="3" text="Node Serum" />
     </li>
     <li>
      <Text id="4" text="Cicabio Serum" />
     </li>
    </ul>
   </div>
  </div>
   <br/><br/>

  <div className="row" id="resultrow1" >
   <div className="col-3 " >
    <a href="/mehsullar" target=".blank" className="btn" id="resultbtn" >
     Bütün nəticələrə bax</a>
   </div>
  </div>
 </div>
 <>
 <More id="1"/>
 </>
    <br/><br/>
</>
		)
}
export default Result;