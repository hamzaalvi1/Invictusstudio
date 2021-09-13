import ClientBg from "../../../Assets/images/services/video-animation/clients-testimonials/bg.jpg"
import Slider from "react-slick"
import Trustpilot from "../../../Assets/images/services/video-animation/clients-testimonials/trust-pilot.png"
import { Container,Col,Row } from "react-bootstrap"



const ClientTestimonials = () =>{
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical:true,
		draggable: true,
		// centerMode: true,
		centerPadding: `0px`,
		adaptiveHeight:true,

		responsive: [
			{
				breakpoint: 824,
				settings:{
				  slidesToShow: 1,
				  slidesToScroll: 1,
				//  variableWidth: true,

				
				//   autoplay: true,
				//   autoplaySpeed: 1800
				}
			}
		  ]
		
	  };
    const client_testimonials = [{title:`
	i'm very satisfied withthe work she done om my facebook page she done a real good job i never had facebook but she made me very satisfied`,C_name:`-
	Rosie Grimes` ,trustURL: `https://www.trustpilot.com/users/6037683ae3e1a6001ff00b35`,date:`
	Feb 25, 2021`},
	{title:`i'm very satisfied withthe work
	Bradley Faithful has helped in every way with my logo and web page. He even helped with how payments received.
`,C_name:`-
	Randy Hoskinson` ,trustURL: `https://www.trustpilot.com/users/5f690a3967b8c0f85c143e62`,date:`
	Sep 22, 2020
`},
	{title:`
	Loved their creativity and their patience. Worked with me graciously even when i suffered stroke mid project.
Ms. Rosetta is the best
`,C_name:`-
Phillip Smith` ,trustURL: `https://www.trustpilot.com/users/60942d0f9618490019661a63`,date:`
May 6, 2021
`},
{title:`
If you are looking to have a beautiful website designed for your business you should speak with Danny. He pays very close attention to your requests and ensures that your delivery is exactly how you requested it to be! His attention to detail is impeccable, I can't recommend him enough!!!
`,C_name:`-
Steffi E.` ,trustURL: `https://www.trustpilot.com/users/5ededb543e84d4afab7f179d`,date:`
Jul 31, 2020
`},
{title:`
great job
Invictus Studio and Daniel in particular were wonderful to work with and got my site up and working on schedule. Great job by all!!
`,C_name:`-
Brian R` ,trustURL: `https://www.trustpilot.com/users/5d5ea719c6e2f9cac98204b3`,date:`
Aug 22, 2019
`},
]


	return(
		<section className="client-testimonials" style={{background: `url(${ClientBg})`}}>
		<Container>
			<Row>
				<Col md={12} >
					<div className="testimonial-content">
						<h4>Testimonials</h4>
						<h2 ><span>W</span>hat clients are saying</h2>

					</div>
				
				</Col>
				
			</Row>
			<div className="c_Slider">
					<Slider {...settings} className="client-slider">
						{client_testimonials.map((testi,index)=>{
							return(
								<div className="client-box" key={index}>
							<Row>
								<Col md={4} xs={12} sm={12} lg={4} xl={4}>
									<div className="client-detail">
									  <p>{testi.date}</p>
									  <h5>{testi.C_name}</h5>
									  <h6>Our Client</h6>

									</div>
									<span className="t-pilot"> 
									   <a href ={testi.trustURL}>
										<img src={Trustpilot}/>
										</a>
									</span>
								</Col>
								<Col  md={8} xs={12} sm={12} lg={8} xl={8}>
									<div className="client-review">
									<p>	
									 {testi.title}
									</p>
									
									</div>
								</Col>

							</Row>
						</div>

							)
						})}
						
						
						

					</Slider>

				</div>
		</Container>
	</section>
	)
}
export default ClientTestimonials