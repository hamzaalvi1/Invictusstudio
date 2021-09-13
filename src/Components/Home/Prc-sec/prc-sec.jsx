import DmLogo1 from "../../../Assets/images/logos/01.png"
import DmLogo2 from "../../../Assets/images/logos/02.png"
import DmLogo3 from "../../../Assets/images/logos/03.png"
import DmLogo4 from "../../../Assets/images/logos/04.png"
import DmLogo5 from "../../../Assets/images/logos/05.png"
import DmLogo6 from "../../../Assets/images/logos/06.png"
import DmLogo7 from "../../../Assets/images/logos/07.png"
import DmLogo8 from "../../../Assets/images/logos/08.png"
import DmLogo9 from "../../../Assets/images/logos/09.png"
import DmLogo10 from "../../../Assets/images/logos/10.png"
import DmLogo11 from "../../../Assets/images/logos/11.png"
import DmLogo12 from "../../../Assets/images/logos/12.png"
import DmLogo13 from "../../../Assets/images/logos/13.png"
import DmLogo14 from "../../../Assets/images/logos/14.png"
import DmLogo15 from "../../../Assets/images/logos/15.png"
import DmLogo16 from "../../../Assets/images/logos/16.png"
import DmLogo17 from "../../../Assets/images/logos/17.png"
import DmLogo18 from "../../../Assets/images/logos/18.png"
import DmLogo19 from "../../../Assets/images/logos/19.png"
import DmLogo20 from "../../../Assets/images/logos/20.png"
import DmLogo21 from "../../../Assets/images/logos/21.png"





import {Container,Row,Col} from "react-bootstrap"
import Slider from "react-slick";
import "./prc.css"
const sliderImg = [DmLogo1,DmLogo2,DmLogo3,DmLogo4,DmLogo5,DmLogo6,DmLogo7,DmLogo8,DmLogo9,DmLogo10,DmLogo11,DmLogo12,DmLogo13,DmLogo14,
	DmLogo15,DmLogo16,DmLogo17,DmLogo18,DmLogo19,DmLogo20,DmLogo21,]
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
	centerMode:true,
	centerPadding:"0",
	autoplay: true,
	autoplaySpeed: 1000,
	pauseonHover: false,
	responsive: [
		{
			breakpoint: 824,
			settings:{
			  slidesToShow: 1,
			  slidesToScroll: 1,
              autoplaySpeed: 2000,

		
			}
		}
	  ]
  };
const PrcSec = ()=>{
	return(
		<section className="pcrc-sect">
		
           <Container>
			 <Row>
				 <Col md={12}>
					<div className="desc">

			    <h3>
                    <span>A</span> Small team of <strong>A+</strong> players can run circles.
                </h3>
                <p>
				A Dallas-based digital agency, Invictus Studio aims to deliver complete digital solutions to their clients. We are brand visionaries who are enthusiastic about developing one-of-a-kind solutions. At Invictus Studio, we are proud of the team we have. Our team consists of the top designers, developers, marketers, and strategists. We believe that our thirst for creativity enables us to develop quality business ideas for our clients. We work with dedication to bring brands on top of the digital transformational pyramid. Our experts utilize their expertise and skills to develop applications, websites, and digital solutions ideal for your business's growth. We sincerely believe that our team's commitment to getting the work done is the reason for our success. Using the latest technology, we generate outstanding results. At Invictus Studio, our approach for collaborating to get the ideal consequence makes us learn new things. We feel proud of our strong work ethic, transparency, and, most significantly, results.
                At Invictus Studio, we want to see your company succeed, and we'll do all we can to help you make that happen. We understand that each industry is distinct and requires a nuanced approach. Contact our team today and get business solutions for your brand.

                </p>
              
				</div>
				</Col>
	          <Col md={12}>
			  <Slider {...settings} >
               {sliderImg.map((slide,index)=>{
                  return(
					  <div key={index} className="item ">
					  <img src ={slide} />
					  </div>
				  )
			   })}
			  </Slider>
             
        
	   </Col>
		</Row>
			
		</Container>
    </section>
		
	)
}
export default PrcSec