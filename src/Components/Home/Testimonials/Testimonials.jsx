import {Container,Row,Col} from "react-bootstrap"
import TestiBg from "../../../Assets/images/testimonial-banner-bg.jpg"
import Slider from "react-slick";
import SlideImg1 from "../../../Assets/images/poster1.jpg"
import SlideImg2 from "../../../Assets/images/poster2.jpg"
import SlideImg3 from "../../../Assets/images/poster3.jpg"

import "./testimonial.css"
import {useState} from "react"

import 'react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video'


const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    
  
    responsive: [
		{
			breakpoint: 824,
			settings:{
			  slidesToShow: 1,
			  slidesToScroll: 1,
			
			}
		}
	  ]
	
  };
const testimonialSlides = [{imgURL:SlideImg1,videoURL:"2BUjXSoTUlU"},{imgURL:SlideImg2,videoURL:"GJJUdTQ-kR0"},{imgURL:SlideImg3,videoURL:"A8QtKNshqVQ"},{imgURL:SlideImg1,videoURL:"2BUjXSoTUlU"},{imgURL:SlideImg2,videoURL:"GJJUdTQ-kR0"},{imgURL:SlideImg3,videoURL:"A8QtKNshqVQ"},]
const Testimonials = ()=>{
    const [isOpen, setIsOpen] = useState(false)
	const [photoIndex,setPhotoIndex]  = useState(0)
	const lightboxOpen = (index)=>{
		setIsOpen(true)
		setPhotoIndex(index)
	   }

	return(

      <section className="testimonials-sect" style={{background:`url(${TestiBg})`}}>
       <ModalVideo channel ="youtube"  autoplay = "1" isOpen={isOpen} videoId={testimonialSlides[photoIndex].videoURL} onClose={() => setIsOpen(false)} />
      
        <Container>  
        
            <div className="head-desc">
                <Row>
                    <Col md={9} sm={12} xs={12} lg={9} xl={9}>
                        <h3>
                            Testimonials
                        </h3>
                        <h2>
                            What Clients are saying
                        </h2>
                    </Col>
                    {/* <Col md={3} lg={3} xl={3} sm={12} xs={12} >
                        <div className="cta-box">
                            <a href="#"> View All Testimonials </a>
                        </div>
                    </Col> */}
                </Row>
            </div>
         
            <Row>
            <Col md={12} xs={12} sm={12} lg={12} xl={12}>
            <Slider {...settings} className="testislider">
             {testimonialSlides.map((slides,index)=>{
                 return(
                 <div className="item-box" key={index}>
                    <a href={()=>false} onClick={()=>lightboxOpen(index)}>
                      <img  src={slides.imgURL} />
                    </a>
                 </div>)
             })}
             
            
        </Slider>
        </Col>
        </Row>
        </Container>
    </section>

	)
}
export default Testimonials