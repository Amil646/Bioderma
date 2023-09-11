import '../css/pagination.css'
export default function Pagination(argument) {
	return(
<nav aria-label="Page navigation example">
  <ul className="pagination" >
    <li class="page-item"><a class="page-link" href="#"  id="pagea1"> Əvvəlki </a></li>
    <li class="page-item"><a class="page-link" href="#" id="pagea2">1</a></li>
    <li class="page-item"><a class="page-link active" href="#" id="pagea3">2</a></li>
    <li class="page-item"><a class="page-link" href="#"  id="pagea4">3</a></li>
    <li class="page-item"><a class="page-link" href="#" id="pagea5">...</a></li>
    <li class="page-item"><a class="page-link" href="#" id="pagea6">20</a></li>
    <li class="page-item"><a class="page-link" href="#"  id="pagea7" >Növbəti</a></li>
  </ul>
</nav>
)
}