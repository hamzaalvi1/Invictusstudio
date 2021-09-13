import {Container,Row,Col} from "react-bootstrap"
import Slide1 from "../../../Assets/images/awards/01.png"
import Slide2 from "../../../Assets/images/awards/02.png"
import Slide4 from "../../../Assets/images/awards/04.png"
import Slide5 from "../../../Assets/images/awards/05.png"
import Slide6 from "../../../Assets/images/awards/06.png"
import Slide7 from "../../../Assets/images/awards/07.png"
import Slide8 from "../../../Assets/images/awards/08.png"
import Slide10 from "../../../Assets/images/awards/10.png"
import AwardBg from "../../../Assets/images/awards-sect-bg.jpg"
import "./award.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.scss';
SwiperCore.use([Autoplay]);
const awardSlider = [Slide1,Slide2,Slide4,Slide5,Slide6,Slide7,Slide8,Slide10,]

const Award = ()=>{


	return(
		<section className="awards-sect" style={{background: `url(${AwardBg})`}}>
        <Container>
			<Row>
			<Col md={12}>
            <div className="head-desc">
                <h3>
                    Achievements
                </h3>
                <h2>
                    <span>A</span>wards & Recognitions
                </h2>
            </div>
			<Swiper  className="awards"  spaceBetween={0} slidesPerView={5} loop={true} centeredSlides={true} autoplay={{ delay: 1500 }}  breakpoints={{
          // when window width is >= 640px
          260: {
            width: 260,
            slidesPerView: 1,
			autoplay:{ delay: 1000 }
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 3,
          },
		  1024: {
            width: 1024,
            slidesPerView: 5,
          },
        }}> 
              {awardSlider.map((slides,index)=>{
				  return(
					  <SwiperSlide>
					  <div className="item" key={index}>
                          <img src={slides} alt={`award ${index}`} />
					  </div>
					  </SwiperSlide>
				  )
                  
			  })}
              
			</Swiper >
            
		</Col>
		</Row>
		</Container>
    </section>
	)
}
export default Award