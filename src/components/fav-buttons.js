import '../css/favourite.css'
import icon1 from '../photos/Icon55.png'
export default function Button1(props) {
	return(
		<button onClick={props.onClick} className="favbtn1">Səbətə at<img  src={icon1} className="favbtnimg"/></button>
		)
}

