import '../css/faq.css'
import List from '../components/faq-list.js'
import {useState,useEffect} from 'react'
import Text from './faq-text.js'

export default function Product() {  
return(   
<>
 <ul className="faqul">
      <List id="f12" number="01" text="How can i set up a new website?" />
       <hr  className="faqhr" />
       <List id="f13" number="02" text="How can i set up a new website? " />
 </ul>
</>
	)
}
