 import sekil2 from  '../photos/img41.png'
  import sekil21 from  '../photos/image12.png'
  import '../css/discount.css'

export default function Discount(argument) {
	return(
<>
  <img src={sekil21}   className="discounti" />
  <div className="discountdiv" ><p>Ləkəyə qarşı<br/> <b>Parlaqladıcı</b> qayğı:</p></div>
  <div className="discountdiv2">
    <p>  Make-up removal</p>
    <p className="discountp" >Sensibio Micellar water, 1 l</p>
  </div>
  <div className="discountdiv3">
    <p className="discountp2">30% Endirim</p>
  </div>
  <img src={sekil2} className="discountim"  />
</>
      )
}