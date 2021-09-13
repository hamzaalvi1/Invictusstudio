import {useState,useRef} from "react"
import L_1 from "../../Assets/images/portfolio/tabs/logos/1.jpg"
import L_2 from "../../Assets/images/portfolio/tabs/logos/2.jpg"
import L_3 from "../../Assets/images/portfolio/tabs/logos/3.jpg"
import L_4 from "../../Assets/images/portfolio/tabs/logos/4.jpg"
import L_5 from "../../Assets/images/portfolio/tabs/logos/5.jpg"
import L_6 from "../../Assets/images/portfolio/tabs/logos/6.jpg"
import L_7 from "../../Assets/images/portfolio/tabs/logos/7.jpg"
import L_8 from "../../Assets/images/portfolio/tabs/logos/8.jpg"
import L_9 from "../../Assets/images/portfolio/tabs/logos/9.jpg"
import L_10 from "../../Assets/images/portfolio/tabs/logos/10.jpg"
import L_11 from "../../Assets/images/portfolio/tabs/logos/11.jpg"
import L_12 from "../../Assets/images/portfolio/tabs/logos/12.jpg"
import L_13 from "../../Assets/images/portfolio/tabs/logos/13.jpg"
import L_14 from "../../Assets/images/portfolio/tabs/logos/14.jpg"
import L_15 from "../../Assets/images/portfolio/tabs/logos/15.jpg"
import L_16 from "../../Assets/images/portfolio/tabs/logos/16.jpg"
import L_17 from "../../Assets/images/portfolio/tabs/logos/17.jpg"
import L_18 from "../../Assets/images/portfolio/tabs/logos/18.jpg"
import L_19 from "../../Assets/images/portfolio/tabs/logos/19.jpg"
import L_20 from "../../Assets/images/portfolio/tabs/logos/20.jpg"
import L_21 from "../../Assets/images/portfolio/tabs/logos/21.jpg"
import L_22 from "../../Assets/images/portfolio/tabs/logos/22.jpg"
import L_23 from "../../Assets/images/portfolio/tabs/logos/23.jpg"
import L_24 from "../../Assets/images/portfolio/tabs/logos/24.jpg"
import L_25 from "../../Assets/images/portfolio/tabs/logos/25.jpg"
import L_26 from "../../Assets/images/portfolio/tabs/logos/26.jpg"
import L_27 from "../../Assets/images/portfolio/tabs/logos/27.jpg"
import L_28 from "../../Assets/images/portfolio/tabs/logos/28.jpg"
import L_29 from "../../Assets/images/portfolio/tabs/logos/29.jpg"
import L_30 from "../../Assets/images/portfolio/tabs/logos/30.jpg"
import L_31 from "../../Assets/images/portfolio/tabs/logos/31.jpg"
import L_32 from "../../Assets/images/portfolio/tabs/logos/32.jpg"
import L_33 from "../../Assets/images/portfolio/tabs/logos/33.jpg"
import L_34 from "../../Assets/images/portfolio/tabs/logos/34.jpg"
import L_35 from "../../Assets/images/portfolio/tabs/logos/35.jpg"
import L_36 from "../../Assets/images/portfolio/tabs/logos/36.jpg"
import L_37 from "../../Assets/images/portfolio/tabs/logos/37.jpg"
import L_38 from "../../Assets/images/portfolio/tabs/logos/38.jpg"
import L_39 from "../../Assets/images/portfolio/tabs/logos/39.jpg"
import L_40 from "../../Assets/images/portfolio/tabs/logos/40.jpg"
import L_41 from "../../Assets/images/portfolio/tabs/logos/41.jpg"
import L_42 from "../../Assets/images/portfolio/tabs/logos/42.jpg"
import L_43 from "../../Assets/images/portfolio/tabs/logos/43.jpg"
import L_44 from "../../Assets/images/portfolio/tabs/logos/44.jpg"
import L_45 from "../../Assets/images/portfolio/tabs/logos/45.jpg"
import L_46 from "../../Assets/images/portfolio/tabs/logos/46.jpg"
import L_47 from "../../Assets/images/portfolio/tabs/logos/47.jpg"
import L_48 from "../../Assets/images/portfolio/tabs/logos/48.jpg"
import L_49 from "../../Assets/images/portfolio/tabs/logos/49.jpg"
import L_50 from "../../Assets/images/portfolio/tabs/logos/50.jpg"
import L_51 from "../../Assets/images/portfolio/tabs/logos/51.jpg"
import L_52 from "../../Assets/images/portfolio/tabs/logos/52.jpg"
import L_53 from "../../Assets/images/portfolio/tabs/logos/53.jpg"
import L_54 from "../../Assets/images/portfolio/tabs/logos/54.jpg"
import L_55 from "../../Assets/images/portfolio/tabs/logos/55.jpg"
import L_56 from "../../Assets/images/portfolio/tabs/logos/56.jpg"
import L_57 from "../../Assets/images/portfolio/tabs/logos/57.jpg"
import L_58 from "../../Assets/images/portfolio/tabs/logos/58.jpg"
import L_59 from "../../Assets/images/portfolio/tabs/logos/59.jpg"
import L_60 from "../../Assets/images/portfolio/tabs/logos/60.jpg"
import L_61 from "../../Assets/images/portfolio/tabs/logos/61.jpg"
import L_62 from "../../Assets/images/portfolio/tabs/logos/62.jpg"
import L_63 from "../../Assets/images/portfolio/tabs/logos/63.jpg"
import L_64 from "../../Assets/images/portfolio/tabs/logos/64.jpg"
import L_65 from "../../Assets/images/portfolio/tabs/logos/65.jpg"
import L_66 from "../../Assets/images/portfolio/tabs/logos/66.jpg"
import L_67 from "../../Assets/images/portfolio/tabs/logos/67.jpg"
import L_68 from "../../Assets/images/portfolio/tabs/logos/68.jpg"
import L_69 from "../../Assets/images/portfolio/tabs/logos/69.jpg"
import L_70 from "../../Assets/images/portfolio/tabs/logos/70.jpg"
import L_71 from "../../Assets/images/portfolio/tabs/logos/71.jpg"
import L_72 from "../../Assets/images/portfolio/tabs/logos/72.jpg"
import L_73 from "../../Assets/images/portfolio/tabs/logos/73.jpg"
import L_74 from "../../Assets/images/portfolio/tabs/logos/74.jpg"
import L_75 from "../../Assets/images/portfolio/tabs/logos/75.jpg"
import L_76 from "../../Assets/images/portfolio/tabs/logos/76.jpg"
import L_77 from "../../Assets/images/portfolio/tabs/logos/77.jpg"
import L_78 from "../../Assets/images/portfolio/tabs/logos/78.jpg"
import L_79 from "../../Assets/images/portfolio/tabs/logos/79.jpg"
import L_80 from "../../Assets/images/portfolio/tabs/logos/80.jpg"
import L_81 from "../../Assets/images/portfolio/tabs/logos/81.jpg"
import L_82 from "../../Assets/images/portfolio/tabs/logos/82.jpg"
import L_83 from "../../Assets/images/portfolio/tabs/logos/83.jpg"
import L_84 from "../../Assets/images/portfolio/tabs/logos/84.jpg"
import L_85 from "../../Assets/images/portfolio/tabs/logos/85.jpg"
import L_86 from "../../Assets/images/portfolio/tabs/logos/86.jpg"
import L_87 from "../../Assets/images/portfolio/tabs/logos/87.jpg"
import L_88 from "../../Assets/images/portfolio/tabs/logos/88.jpg"
import L_89 from "../../Assets/images/portfolio/tabs/logos/89.jpg"
import L_90 from "../../Assets/images/portfolio/tabs/logos/90.jpg"
import L_91 from "../../Assets/images/portfolio/tabs/logos/91.jpg"
import L_92 from "../../Assets/images/portfolio/tabs/logos/92.jpg"
import L_93 from "../../Assets/images/portfolio/tabs/logos/93.jpg"
import L_94 from "../../Assets/images/portfolio/tabs/logos/94.jpg"
import L_95 from "../../Assets/images/portfolio/tabs/logos/95.jpg"
import L_96 from "../../Assets/images/portfolio/tabs/logos/96.jpg"
import L_97 from "../../Assets/images/portfolio/tabs/logos/97.jpg"
import L_98 from "../../Assets/images/portfolio/tabs/logos/98.jpg"
import L_99 from "../../Assets/images/portfolio/tabs/logos/99.jpg"
import L_100 from "../../Assets/images/portfolio/tabs/logos/100.jpg"
import {Row,Col} from "react-bootstrap"
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';



const LogoTabs = ()=>{
	const showRef = useRef(null)
	const [visible, setVisible] = useState(12)
	const LogoList = [L_1,L_2,L_3,L_4,L_5,L_6,L_7,L_8,L_9,L_10,
		L_11,L_12,L_13,L_14,L_15,L_16,L_17,L_18,L_19,L_20,
		L_21,L_22,L_23,L_24,L_25,L_26,L_27,L_28,L_29,L_30,
		L_31,L_32,L_33,L_33,L_35,L_36,L_37,L_38,L_39,L_40,
		L_41,L_42,L_43,L_44,L_45,L_46,L_47,L_48,L_49,L_50,
		L_51,L_52,L_53,L_54,L_55,L_56,L_57,L_58,L_59,L_60,
		L_61,L_62,L_63,L_64,L_65,L_66,L_67,L_68,L_69,L_70,
		L_71,L_72,L_73,L_74,L_75,L_76,L_77,L_78,L_79,L_80,
		L_81,L_82,L_83,L_84,L_85,L_86,L_87,L_88,L_89,L_90,
		L_91,L_92,L_93,L_94,L_95,L_96,L_97,L_98,L_99,L_100,]
		
		const showMore = (index)=>{
			setVisible((prevVal)=> prevVal + 12)
			if(index >= 84){
			showRef.current.style.display = "none"   

			}
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
			{isOpen && (<Lightbox mainSrc = {LogoList[photoIndex]}  onCloseRequest={()=>setIsOpen(false)} {...options}/>)}
				{LogoList.slice(0,visible).map((logo,index)=>{
					return(
					  <Col md={3} key={index}>
                       <a className="" href="javascript:;"  onClick={()=> lightboxOpen(index)}>
                        <LazyLoadImage  src={logo} alt="" effect="blur"/>
                        </a>
                        </Col>
						 )
						})}
						<div className="cta-box">
                            <a  onClick = {()=>showMore(visible)}className="load-More load-more-logo" ref={showRef}>Load More</a>
                        </div>
			</Row>

		)
}
export default LogoTabs