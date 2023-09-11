import '../css/order.css'
export default function Order(argument) {
  
  return (
    <>
      <h5 className="orderh"> Səbətdəki məhsullar</h5><br/>
      <pre className="orderpre">Məhsulların qiyməti:                        <b className="orderb"> 40.00 AZN</b></pre>
      <pre className="orderpre">Endirim                                            <b className="orderb"> -12.00 AZN</b></pre>
      <hr className="orderhr"/>
      <pre className="orderpre2">Toplam qiymət:                   <b className="orderb2">28.00 AZN</b></pre><br/>
    </>)
}