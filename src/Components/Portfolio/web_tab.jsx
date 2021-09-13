import {Row,Col} from "react-bootstrap"
import Web1 from "../../Assets/images/portfolio/tabs/websites/1.jpg"
import Web2 from "../../Assets/images/portfolio/tabs/websites/2.jpg"
import Web3 from "../../Assets/images/portfolio/tabs/websites/3.jpg"
import Web4 from "../../Assets/images/portfolio/tabs/websites/4.jpg"
import Web5 from "../../Assets/images/portfolio/tabs/websites/5.jpg"
import Web7 from "../../Assets/images/portfolio/tabs/websites/7.jpg"
import Web9 from "../../Assets/images/portfolio/tabs/websites/9.jpg"
import Web10 from "../../Assets/images/portfolio/tabs/websites/10.jpg"
import Web11 from "../../Assets/images/portfolio/tabs/websites/11.jpg"
import Web12 from "../../Assets/images/portfolio/tabs/websites/12.jpg"
import Web14 from "../../Assets/images/portfolio/tabs/websites/14.jpg"
import Web15 from "../../Assets/images/portfolio/tabs/websites/15.jpg"
import Web17 from "../../Assets/images/portfolio/tabs/websites/17.jpg"
import Web18 from "../../Assets/images/portfolio/tabs/websites/18.jpg"
import Web19 from "../../Assets/images/portfolio/tabs/websites/19.jpg"
import Web20 from "../../Assets/images/portfolio/tabs/websites/20.jpg"
import Web21 from "../../Assets/images/portfolio/tabs/websites/21.jpg"
import Web23 from "../../Assets/images/portfolio/tabs/websites/23.jpg"
import Web24 from "../../Assets/images/portfolio/tabs/websites/24.jpg"
import Web25 from "../../Assets/images/portfolio/tabs/websites/25.jpg"
import Web28 from "../../Assets/images/portfolio/tabs/websites/28.jpg"
import Web29 from "../../Assets/images/portfolio/tabs/websites/29.jpg"
import Web30 from "../../Assets/images/portfolio/tabs/websites/30.jpg"
import Web31 from "../../Assets/images/portfolio/tabs/websites/31.jpg"
import Web32 from "../../Assets/images/portfolio/tabs/websites/32.jpg"
import Web33 from "../../Assets/images/portfolio/tabs/websites/33.jpg"
import Web34 from "../../Assets/images/portfolio/tabs/websites/34.jpg"
import Web35 from "../../Assets/images/portfolio/tabs/websites/35.jpg"
import Web36 from "../../Assets/images/portfolio/tabs/websites/36.jpg"
import Web37 from "../../Assets/images/portfolio/tabs/websites/37.jpg"
import Web38 from "../../Assets/images/portfolio/tabs/websites/38.jpg"
import Web39 from "../../Assets/images/portfolio/tabs/websites/39.jpg"
import Web40 from "../../Assets/images/portfolio/tabs/websites/40.jpg"
import {useState,useRef} from "react"
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';







const WebTab = ()=>{
	const showRef  = useRef(null)
	const [visible, setVisible] = useState(9)
	const [isOpen, setIsOpen] = useState(false)
	const [photoIndex,setPhotoIndex]  = useState(0)
 const WebImg = [Web1,Web2,Web3,Web4,Web5,Web7,Web9,Web10,
	Web11,Web12,Web14,Web15,Web17,Web18,Web19,Web20,
	Web21,Web23,Web24,Web25,Web28,Web29,Web30,
	Web31,Web32,Web33,Web34,Web35,Web36,Web37,Web38,Web39,Web40,] 


	const showMore = (index)=>{
		setVisible((prevVal)=> prevVal + 9)
		console.log(index)
		if(index >= 27){
	
			showRef.current.style.display = "none"   

		}

	}

   const lightboxOpen = (index)=>{
    setIsOpen(true)
	setPhotoIndex(index)
   }
  const options = {
	enableZoom: true
  } 
	return(
        <Row>
			{isOpen && (<Lightbox mainSrc = {WebImg[photoIndex]}  onCloseRequest={()=>setIsOpen(false)} {...options}/>)}
		
			{WebImg.slice(0,visible).map((mbile,index)=>{
				return(
			
					<Col md={4} key={index}>
				
						 <a className="tab_pop" href={()=>false}  onClick={()=>lightboxOpen(index)}>
                        <LazyLoadImage effect="blur"  src={mbile} alt=""/>
					
                        </a>

					</Col>

				
				)
			})}
			 <div className="cta-box">
                <a onClick = {()=>showMore(visible)}  ref ={showRef}className="load-More load-more-logo">Load More</a>
             </div>
			
		</Row>

	)
}
export default WebTab