import icon from '../photos/Icon51.png'

export default function Button3(props) {
   return(
    <button type="button" onClick={props.onClick} className="favbtn3" >
    <img src={icon} height="32px" width="32px" />
    </button>
 )
 }