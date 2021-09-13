import {Row,Col} from "react-bootstrap"
import {useState,useRef} from "react"
import Mble1 from "../../Assets/images/portfolio/tabs/mobile-app/mobile-app/1.jpg"
import Mble2 from "../../Assets/images/portfolio/tabs/mobile-app/mobile-app/2.jpg"
import Mble3 from "../../Assets/images/portfolio/tabs/mobile-app/mobile-app/3.jpg"
import Mble4 from "../../Assets/images/portfolio/tabs/mobile-app/mobile-app/4.jpg"
import Mble5 from "../../Assets/images/portfolio/tabs/mobile-app/mobile-app/5.jpg"
import Mble6 from "../../Assets/images/portfolio/tabs/mobile-app/mobile-app/6.jpg"
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';




const MobileTab = ()=>{
	const MobileImg = [Mble1,Mble2,Mble3,Mble4,Mble5,Mble6] 
    const showRef = useRef(null)
	const [visible, setVisible] = useState(3)
	const showMore = (index)=>{
		setVisible((prevVal)=> prevVal + 3)
		if(index === (MobileImg.length - 3) ){
			showRef.current.style.display = "none"   
		}
		console.log(index)


	}
	
	const [isOpen, setIsOpen] = useState(false)
	const [photoIndex,setPhotoIndex]  = useState(0)
	const lightboxOpen = (index)=>{
		setIsOpen(true)
		setPhotoIndex(index)
	   }
	   const options = {
		enableZoom: true
	  } 
	return(
		
        <Row>
		{isOpen && (<Lightbox mainSrc = {MobileImg[photoIndex]}  onCloseRequest={()=>setIsOpen(false)} {...options}/>)}
    

			{MobileImg.slice(0,visible).map((mbile,index)=>{
				return(
					<Col md={4} key={index}>
						 <a className="tab_pop" href="javascript:;"  onClick={()=>lightboxOpen(index) }>
						 <LazyLoadImage  effect="blur" src={mbile} alt=""/>
                        </a>
					</Col>
				)
			})}
			 <div className="cta-box">
              <a onClick = {()=>showMore(visible)} className="load-More load-more-logo" ref={showRef}>Load More</a>
             </div>
		</Row>

	)
}
export default MobileTab