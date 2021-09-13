import {Row,Col} from "react-bootstrap"
import Vd1 from "../../Assets/images/portfolio/tabs/2d/v1.png"
import Vd2 from "../../Assets/images/portfolio/tabs/2d/v2.png"
import Vd3 from "../../Assets/images/portfolio/tabs/2d/v3.png"
import Vd4 from "../../Assets/images/portfolio/tabs/2d/v4.png"
import Vd5 from "../../Assets/images/portfolio/tabs/2d/v5.png"
import Vd6 from "../../Assets/images/portfolio/tabs/2d/v6.png"
import Vd7 from "../../Assets/images/portfolio/tabs/2d/v7.png"
import Vd8 from "../../Assets/images/portfolio/tabs/2d/v8.png"
import Vd9 from "../../Assets/images/portfolio/tabs/2d/v9.png"
import Vd10 from "../../Assets/images/portfolio/tabs/2d/v10.png"
import Vd11 from "../../Assets/images/portfolio/tabs/2d/v11.png"
import Vd12 from "../../Assets/images/portfolio/tabs/2d/v12.png"
import Vd13 from "../../Assets/images/portfolio/tabs/2d/v13.png"
import Vd14 from "../../Assets/images/portfolio/tabs/2d/v14.png"
import Vd15 from "../../Assets/images/portfolio/tabs/2d/v15.png"
import Vd16 from "../../Assets/images/portfolio/tabs/2d/v16.png"
import Vd17 from "../../Assets/images/portfolio/tabs/2d/v17.png"
import Vd18 from "../../Assets/images/portfolio/tabs/2d/v18.png"
import Vd19 from "../../Assets/images/portfolio/tabs/2d/v19.png"
import Vd20 from "../../Assets/images/portfolio/tabs/2d/v20.png"
import Vd21 from "../../Assets/images/portfolio/tabs/2d/v21.png"
import Vd22 from "../../Assets/images/portfolio/tabs/2d/v22.png"
import Vd23 from "../../Assets/images/portfolio/tabs/2d/v23.png"
import Vd24 from "../../Assets/images/portfolio/tabs/2d/v24.png"
import Vd25 from "../../Assets/images/portfolio/tabs/2d/v25.png"
import Vd26 from "../../Assets/images/portfolio/tabs/2d/v26.png"
import 'react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import {useState,useRef} from "react"








const VideoTab = ()=>{
	const showRef = useRef(null)
	const [visible, setVisible] = useState(6)
	const showMore = (index)=>{
		setVisible((prevVal)=> prevVal + 6)
		if(index >= 21) {
			showRef.current.style.display = "none"   
		}
		console.log(index)

	}
 const VideoImg = [
	{imageURL:Vd1,videoURL:"Y7vvP4HRubY"},
 {imageURL:Vd2,videoURL:"rXScxmBxlcA"},
 {imageURL:Vd3,videoURL:"wgic44kezPo"},
 {imageURL:Vd4,videoURL:"1KrijYvQsfo"},
 {imageURL:Vd5,videoURL:"dZsd0kka078"},
 {imageURL:Vd6,videoURL:"w7Tpz1ouuc4"},
 {imageURL:Vd7,videoURL:"cA4Ur0zTKQM"},
 {imageURL:Vd8,videoURL:"XIWwKShBzxM"},
 {imageURL:Vd9,videoURL:"00jv2uifNlU"},
 {imageURL:Vd10,videoURL:"eaFyiXBOBA0"},
 {imageURL:Vd11,videoURL:"bDnXl9ROjb0"},
 {imageURL:Vd12,videoURL:"ncXluOIKaD4"},
 {imageURL:Vd13,videoURL:"Br7AuoFowmU"},
 {imageURL:Vd14,videoURL:"E2mJtw5pkMA"}, 
 {imageURL:Vd15,videoURL:"Tyj_VlR72Ss"},
 {imageURL:Vd16,videoURL:"bej12WADq5Q"},
 {imageURL:Vd17,videoURL:"5sYsn_vgE6I"},
 {imageURL:Vd18,videoURL:"rsrAodxcwOE"},
 {imageURL:Vd19,videoURL:"XvRcXFmJVrc"},
 {imageURL:Vd20,videoURL:"yghRZ9yFGpM"},
 {imageURL:Vd21,videoURL:"RPFaZPlKURk"},
 {imageURL:Vd22,videoURL:"Qlcqc1acySc"},
 {imageURL:Vd23,videoURL:"ZRbOC3MS1Lg"},
 {imageURL:Vd24,videoURL:"xINJMtd14hg"},
 {imageURL:Vd25,videoURL:"5049zRLL2Z0"},
 {imageURL:Vd26,videoURL:"UzRsGpUO8NQ"},
 ]
 

	const [isOpen, setIsOpen] = useState(false)
	const [photoIndex,setPhotoIndex]  = useState(0)
	const lightboxOpen = (index)=>{
		setIsOpen(true)
		setPhotoIndex(index)
	   }

	return(
        <Row>
		<ModalVideo channel='youtube' autoplay = "1" isOpen={isOpen} videoId={VideoImg[photoIndex].videoURL} onClose={() => setIsOpen(false)} />
			{VideoImg.slice(0,visible).map((video,index)=>{
				return(
					<Col md={4} key={index}>
						 <a className="video__box" href={()=>false}  onClick={()=>lightboxOpen(index) }>
                        <LazyLoadImage  src={video.imageURL} alt="" effect="blur"/>
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
export default VideoTab