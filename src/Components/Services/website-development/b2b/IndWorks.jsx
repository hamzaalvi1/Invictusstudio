import Slider from "react-slick"
import P_01 from "../../../../Assets/images/services/website-development/b2b/ind-work/p-list/01.png"
import P_02 from "../../../../Assets/images/services/website-development/b2b/ind-work/p-list/02.png"
import P_03 from "../../../../Assets/images/services/website-development/b2b/ind-work/p-list/03.png"
import P_04 from "../../../../Assets/images/services/website-development/b2b/ind-work/p-list/04.png"
import P_05 from "../../../../Assets/images/services/website-development/b2b/ind-work/p-list/05.png"
import P_06 from "../../../../Assets/images/services/website-development/b2b/ind-work/p-list/06.png"
import P_07 from "../../../../Assets/images/services/website-development/b2b/ind-work/p-list/07.png"
import { Container,Row,Col } from "react-bootstrap"

import testiImg1 from "../../../../Assets/images/services/website-development/b2b/ind-work/01.png"
import testiImg2 from "../../../../Assets/images/services/website-development/b2b/ind-work/02.png"
import testiImg3 from "../../../../Assets/images/services/website-development/b2b/ind-work/03.png"

import useMediaQuery from "../../../Utils/windowSize"


const IndWorks = ()=>{
	const matches = useMediaQuery("(max-width: 824px)");
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		draggable: true,
		arrows:true,
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
	const testimonials = [{imgURL:testiImg1,title:"Education"},{imgURL:testiImg2,title:"Health"},{imgURL:testiImg3,title:"Photography"},]
    const programList = [P_01,P_02,P_03,P_04,P_05,P_06,P_07]
	 return(
		<section className="ind-work">
				<Container fluid>
					<Row>
						<Col md={5}>
						  <div className="ind-work-content">
							  <h4>Where we work</h4>
							  <h2>Industries we served</h2>
							   <p>We are incredibly fortunate to collaborate with companies that share our dedication to producing high-quality work. Take a look at all of the industries with which we've collaborated</p>
						  </div>
						</Col>
						<Col md={7}>
							<Slider {...settings} className = "ind-work-slider">
                                  {testimonials.map((slides,index)=>{
									  return(
										  <div className="slider-parent" key={index}>
                                            <div className="sld-box">
												<img src={slides.imgURL} alt="" />
												<h6>{slides.title}</h6>
											</div>
										  </div>
									  )
								  })}
							</Slider>

						
						</Col>
						
						    { matches ?
                              <Col md={12}>
							   <Slider {...settings} className="program_box">
                                 {programList.map((program,index )=>{
                                   return(
									<div className="program_parent" key={index}>
									<div className="prog_box">
									   <img  src={program}/>
									</div>
								  </div>
								   )
								 })}
							   </Slider>
							   </Col>
							:<Col md={12}>
								<div className="program-box">
								<ul className="programming-list">
									<li><img src={P_01}  /></li>
									<li><img src={P_02}  /></li>
									<li><img src={P_03}  /></li>
									<li><img src={P_04}  /></li>
									<li><img src={P_05}  /></li>
									<li><img src={P_06}  /></li>
									<li><img src={P_07}  /></li>



								</ul>
								</div>
							</Col>
                           }
						
					</Row>
				</Container>

			</section>
	 )
}
export default IndWorks