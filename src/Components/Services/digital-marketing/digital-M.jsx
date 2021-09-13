import "./digital-m.css"
import MainBanner from "../../../Assets/images/services/digital-marketing/banner/bg-banner.jpg"
import {Container,Row,Col} from "react-bootstrap"
import LED from "../../../Assets/images/services/digital-marketing/banner/led.png"
import LookLeft from "../../../Assets/images/services/digital-marketing/look-for/look-left.png" 
import Sales from "../../../Assets/images/services/digital-marketing/look-for/01.png" 
import Leads from "../../../Assets/images/services/digital-marketing/look-for/02.png" 
import CComputing from "../../../Assets/images/services/digital-marketing/look-for/03.png" 
import seo_right from "../../../Assets/images/services/digital-marketing/seo/right-bg.png" 
import list01 from "../../../Assets/images/services/digital-marketing/seo/list/01.png"
import list02 from "../../../Assets/images/services/digital-marketing/seo/list/02.png"
import list03 from "../../../Assets/images/services/digital-marketing/seo/list/03.png"
import sk01 from "../../../Assets/images/services/digital-marketing/skills/img-list/01.jpg"
import sk02 from "../../../Assets/images/services/digital-marketing/skills/img-list/02.jpg"
import sk03 from "../../../Assets/images/services/digital-marketing/skills/img-list/03.jpg"
import sk04 from "../../../Assets/images/services/digital-marketing/skills/img-list/04.jpg"
import men from "../../../Assets/images/services/digital-marketing/dm-cta/men.png"
import Slider from "react-slick"
import indSli01 from "../../../Assets/images/services/digital-marketing/industries/01.png"
import indSli02 from "../../../Assets/images/services/digital-marketing/industries/02.png"
import indSli03 from "../../../Assets/images/services/digital-marketing/industries/03.png"
import indSli04 from "../../../Assets/images/services/digital-marketing/industries/04.png"
import indSli05 from "../../../Assets/images/services/digital-marketing/industries/05.png"
import OurWork from "./our-work.jsx"
import ic_1 from "../../../Assets/images/services/digital-marketing/dm-work/i-01.png"
import ic_2 from "../../../Assets/images/services/digital-marketing/dm-work/i-02.png"
import ic_3 from "../../../Assets/images/services/digital-marketing/dm-work/i-03.png"
import ic_4 from "../../../Assets/images/services/digital-marketing/dm-work/i-04.png"
import Testimonials from "..//video-animation/clientTestimonail.jsx"
import FtrForm from "../../Home/Form/Form.jsx"
import Particles from "react-particles-js";
import DmMain from "../../../Assets/images/services/digital-marketing/strategy/dm-main.png"
import Dm01 from "../../../Assets/images/services/digital-marketing/strategy/01.png"
import Dm02 from "../../../Assets/images/services/digital-marketing/strategy/02.png"
import Dm03 from "../../../Assets/images/services/digital-marketing/strategy/03.png"
import Dm04 from "../../../Assets/images/services/digital-marketing/strategy/04.png"
import Dm06 from "../../../Assets/images/services/digital-marketing/strategy/06.png"
import Dm07 from "../../../Assets/images/services/digital-marketing/strategy/07.png"
import Dm08 from "../../../Assets/images/services/digital-marketing/strategy/08.png"
import useMediaQuery from "../../Utils/windowSize"
import { useEffect,useState  } from "react"
import { useHistory } from "react-router-dom"
import Preloader from "../../../Components/Preloader/preloader"
import SocialIcon from "../../../Components/Home/Social-Icons/Social-icons"
import {Helmet} from "react-helmet";


const DigitalMarketing = ()=>{
	const [load,setLoad]=useState(true)

    const preFunc = ()=>{
        setLoad(false)
        document.body.classList.remove("overHide")
    }
    useEffect(()=>{
    
     setTimeout(()=>{
        preFunc()
     },1300)   
    },[])
	const history = useHistory()
	useEffect(()=>{

        window.scrollTo(0,0) 
      
   
   },[])
	const responsiveSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		arrows:false,
		// autoplay: true,
		// autoplaySpeed: 1800,
		dotsClass: "market_Dots",
		responsive: [
		  {
			  breakpoint: 768,
			  settings:{
				slidesToShow: 1,
				slidesToScroll: 1,
			  }
		  }
		]

	}
	const matches = useMediaQuery("(max-width: 824px)");

	const industrySlider = [{imgUrl:indSli01,title:"B2B"},{imgUrl:indSli02,title:"Ecommerce"},{imgUrl:indSli03,title:"Education"},{imgUrl:indSli04,title:"Health Care"},
	{imgUrl:indSli05,title:"Travel"},
	{imgUrl:indSli01,title:"B2B"},{imgUrl:indSli02,title:"Ecommerce"},{imgUrl:indSli03,title:"Education"},{imgUrl:indSli04,title:"Health Care"},
	{imgUrl:indSli05,title:"Travel"},]

	const settings = {
		dots: false,
		arrows:true,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 768,
				settings:{
				  slidesToShow: 1,
				  slidesToScroll: 1,
				}
			}
		  ]
		
	  };
	  const Strats = (
		  <div>
		  {matches ? 
		    <Slider {...responsiveSettings} className="dmr_slider">
				<div className="parent_slides">
				<div className="market-strategy">
				<div className="strat-box">
					<img src ={DmMain}/>
					<h5>Digital Marketing Strategy</h5>


				</div>
			</div>	
				</div>
				<div className="parent_slides">
				<div className="m-001 mm">
				<img src={Dm01} alt="" />
				<h5>SEM</h5>

			</div>	
			</div>
			<div className="parent_slides">
			<div className="m-002 mm">
				<img src={Dm02} alt="" />
				<h5>PAY-PER-CLICK <br /> Service</h5>

			</div>
			</div>
			<div className="parent_slides">
			<div className="m-003 mm">
				<img src={Dm03} alt="" />
				<h5>SEO</h5>

			</div>
			</div>
			<div className="parent_slides">
			<div className="m-004 mm">
				<img src={Dm04} alt="" />
				<h5>Email <br/> Marketing</h5>

			</div>
			</div>
			{/* <div className="parent_slides">
			<div className="m-005 mm">
				<img src={Dm06} alt="" />

			</div>
			</div>
			<div className="parent_slides">
			<div className="m-006 mm">
				<img src={Dm07} alt="" />

			</div>
			</div> */}
			<div className="parent_slides">
			<div className="m-007 mm">
				<img src={Dm08} alt="" />

			</div>
			</div>
			</Slider>   : 
			<div className="strat-main">
			<div className="market-strategy">
				<div className="strat-box">
					<img src ={DmMain}/>
					<h5>Digital Marketing Strategy</h5>


				</div>
			</div>
			<div className="m-001 mm">
				<img src={Dm01} alt="" />
				<h5>SEM</h5>

			</div>
			<div className="m-002 mm">
				<img src={Dm02} alt="" />
				<h5>PAY-PER-CLICK <br /> Service</h5>

			</div>
			<div className="m-003 mm">
				<img src={Dm03} alt="" />
				<h5>SEO</h5>

			</div>
			<div className="m-004 mm">
				<img src={Dm04} alt="" />
				<h5>Email <br/> Marketing</h5>

			</div>
			<div className="m-005 mm">
				<img src={Dm06} alt="" />

			</div>
			<div className="m-006 mm">
				<img src={Dm07} alt="" />

			</div>
			<div className="m-007 mm">
				<img src={Dm08} alt="" />

			</div>
			
		</div>
	
		} 
	</div>
	  )
	  const S_list = (
		 <div className="s_list">
              {matches ? 
			  <Slider {...responsiveSettings} className="seo_slider">
				         		<div className="seo_parent">
								<div className="seo-box">
								  <img src = {list01}/>
								  <h5>Mobile SEO</h5>
								  <p>If you perfect your mobile-first approach, it helps users stay on your site for a more extended period while ensuring speed, responsiveness, and maximum crawl.</p>
								  </div>
								  </div>
								<div className="seo_parent">
							  <div className="seo-box">
								  <img src = {list02}/>
								  <h5>Website Assestment</h5>
								  <p>Having an in-depth evaluation of your website will provide all the possible strengths and weaknesses to better your current SEO strategy.</p>
							  </div>
							  </div>
					
						      <div className="seo_parent">
							  <div className="seo-box">
								  <img src = {list03}/>
								  <h5>Local Seo Service</h5>
								  <p>Improve your company's local appearance by increasing your brand's searchability on local search engines.</p>
							  </div>
							  </div>
			  </Slider> 
			  : <ul className = "seo-list">
							 <li>
							  <div className="seo-box">
								  <img src = {list01}/>
								  <h5>Mobile SEO</h5>
								  <p>If you perfect your mobile-first approach, it helps users stay on your site for a more extended period while ensuring speed, responsiveness, and maximum crawl.</p>
							  </div>
							 </li>	
							 <li>
							  <div className="seo-box">
								  <img src = {list02}/>
								  <h5>Website Assestment</h5>
								  <p>Having an in-depth evaluation of your website will provide all the possible strengths and weaknesses to better your current SEO strategy.</p>
							  </div>
							 </li>
							 <li>
							  <div className="seo-box">
								  <img src = {list03}/>
								  <h5>Local Seo Service</h5>
								  <p>Improve your company's local appearance by increasing your brand's searchability on local search engines.</p>
							  </div>
							 </li>
							</ul> 
							}
		 </div>
	  )

	const particlesoptions = {
		particles: {
		  number: {
			value: 65,
			density: {
			  enable: true,
			  value_area: 1000
			}
		  },
		  color: {
			value: ["#e6c2da", "#e6c2da", "#e6c2da", "#e6c2da", "#e6c2da"]
		  },
		  shape: {
			type: "circle",
			stroke: {
			  width: 0,
			  color: "#b6b2b2"
			}
		  },
		  opacity: {
			value: 0.7211089197812949,
			random: false,
			anim: {
			  enable: true,
			  speed: 1,
			  opacity_min: 0.1,
			  sync: false
			}
		  },
		  size: {
			value: 5.017060304327615,
			random: true,
			anim: {
			  enable: true,
			  speed: 12.181158184520175,
			  size_min: 0.1,
			  sync: true
			}
		  },
		  line_linked: {
			enable: true,
			distance: 150,
			color: "#808080",
			opacity: 0.3,
			width: 1
		  },
		  move: {
			enable: true,
			speed: 5,
			direction: "none",
			random: false,
			straight: false,
			out_mode: "bounce",
			bounce: false,
			attract: {
			  enable: false,
			  rotateX: 600,
			  rotateY: 1200
			}
		  }
		},
		interactivity: {
		  detect_on: "canvas",
		  events: {
			onhover: {
			  enable: true,
			  mode: "grab"
			},
			onclick: {
			  enable: true,
			  mode: "push"
			},
			resize: true
		  },
		  modes: {
			grab: {
			  distance: 400,
			  line_linked: {
				opacity: 1
			  }
			},
			repulse: {
			  distance: 200,
			  duration: 0.4
			},
			push: {
			  particles_nb: 1
			}
		  }
		},
		retina_detect: true
	  };


	return(
		<div className = "digital-marketing">
			<Helmet>
            <meta name="description" content="We offer complete digital marketing services which includes SEO, PPC, display advertisement and Social Media marketing."/>
            <title>Digital Marketing Services | Invictus Studio</title>
            </Helmet>
            {load ? <Preloader/> : null }
             <SocialIcon/>
			<section className="main-banner" style={{background: `url(${MainBanner})`}}>
				<Container>
                   <Row className ="align-items-center">
					   <Col md={5} lg={5} xl={5} sm ={4} xs={4} >
						   <div className="banner-content">
                              <h1>Digital Marketing</h1>
							  </div>
                           
					   </Col>
					   <Col md={7} lg={7} xl={7} sm ={8} xs={8}>
						   <div className="banner-img">
							   <img src={LED} alt="LED"/>
						   </div>
					   </Col>
				   </Row>
				</Container>
			</section>
			<section className="looking-for">
                 <Container>
                        <Row>
                           <Col md={7}>
							   <div className="look-for-img">
                                  <img  src={LookLeft}/>
							   </div>
						   </Col>
						   <Col md={5}>
							   <div className="look-for-content">
								   <h4>What are you</h4>
								   <h2><span>l</span>ooking for?</h2>
								   <ul className="looking-list">
									   <li>
										 
										  
									      <div className="look-box">
										  <Row>
										  <Col md={2}> 
											  <span className="look-img">
                                                  <img src={Sales}/>
											  </span>
											  </Col>
											  <Col md={10}>
											  <div className="look-box-c">
												  <h6>Sales</h6>
												   <p>Increase traffic on your website and engagement of your content to convert leads into potential.</p>
											  </div>
											  </Col>
											  </Row>
										  </div>
									
											   
									   </li>	
									   <li>
									   <div className="look-box">
										  <Row>
										  <Col md={2}> 
											  <span className="look-img">
                                                  <img src={Leads}/>
											  </span>
											  </Col>
											  <Col md={10}>
											  <div className="look-box-c">
												  <h6>Leads</h6>
												   <p>A plan that will assist you in identifying and reaching out to people who are interested in your company and services.</p>
											  </div>
											  </Col>
											  </Row>
										  </div>	   
									   </li>
									   <li>
									   <div className="look-box">
										  <Row>
										  <Col md={2}> 
											  <span className="look-img">
                                                  <img src={CComputing}/>
											  </span>
											  </Col>
											  <Col md={10}>
											  <div className="look-box-c">
												  <h6>Website Traffic</h6>
												   <p>Want to see an increase in website traffic or product visibility? We will help achieve the optimum results.</p>
											  </div>
											  </Col>
											  </Row>
										  </div>	   
									   </li>

								   </ul>

							   </div>
						   </Col>
						</Row>
				 </Container>
			</section>
			<section className="seo">
				<Container fluid>
					<Row>  
						<Col md={5} lg={5} xl={5} sm={12} xs={12} className="pad-zero">
							<div className="seo-left">

							</div>
						</Col> 
						<Col md={7} lg={7} xl={7} sm={12} xs={12} className="pad-zero" >
							<div className="seo-right">
								<div className="seo-content">
								<h4>Professional SEO</h4>
								<h2>Services Include<span>s</span></h2>
								</div>
								<div className="seo-img">
									<img src={seo_right} alt="right-bg" />
									
								</div>
								{S_list}


							</div>
							
						</Col> 
						

					</Row>
				</Container>
			</section>
			<section className="dms">
			<Particles className="particles" params={particlesoptions} />
				<Container>
					<Row className="align-items-center">
						<Col md={12}>
							<div className="dms-content">
								<h4>Digital</h4>

								<h2><span>M</span>arketing Solutions</h2>
							     {Strats}
							</div>
						
						</Col>
					</Row>
				</Container>
			</section>
			<section className="skill">
                <Container fluid>
					<Row>
						<Col md={12} className="pad-zero">
                          <div className="skills-content">
							  <h4>Why Invictus Studio</h4>
							   <h2><span>S</span>kills that make difference</h2>
							   <ul className="skill-list">
								   <li>
									   <div className="skill-box">
										   	<img src={sk01} />
											   <h4 className="text-center">Brand identity</h4>
											   <div className="skill-overlay">
												   
												   <h5>Brand identity</h5>
												    <p>We create brand identities that make your brand stand out from the rest of the market. We incorporate a unique blend of graphic and text features to provides an instant sense of connection.</p>

												   
											   </div>

									   </div>
								   </li>
								   <li>
									   <div className="skill-box">
										   	<img src={sk02} />
											   <h4 className="text-center">User Experience</h4>
											   <div className="skill-overlay">
												   
												   <h5>User Experience</h5>
												    <p>We create applications, websites, and designs that ensure a phenomenal user experience for the user. </p>

												   
											   </div>

									   </div>
								   </li>
								   <li>
									   <div className="skill-box">
										   	<img src={sk03} />
											   <h4 className="text-center">User Interface</h4>
											   <div className="skill-overlay">
												   
												   <h5>User Interface</h5>
												    <p>We take immense pride in designing and creating unique, engaging, interactive, and feature-packed interfaces that make users stay for a longer period. </p>

												   
											   </div>

									   </div>
								   </li>
								   <li>
									   <div className="skill-box">
										   	<img src={sk04} />
											   <h4 className="text-center">Target Market</h4>
											   <div className="skill-overlay">
												   
												   <h5>Target Market</h5>
												    <p>All our efforts are in accordance with your brand's target market. We ensure that strategy we plan and implement targets your users accurately. </p>

												   
											   </div>

									   </div>
								   </li>
							   </ul>
						  </div>

						</Col>
					</Row>
				</Container>
			</section>
			<section className="hire-us">
				<Container >
					<Row className="align-items-center">
						<Col md={7}>
							<div className="hire-content">
								<h4>Why To Hire Our</h4>
								<h2>Marketing SERVICE<span>S</span></h2>
								 <p>
								 Invictus Studio offers businesses expert marketing solutions to ensure that you receive maximum online exposure possible. Digital transformation is the way of the future for all businesses, and we aim to represent this concept in our services. We make your brand visible to potential customers at the appropriate moment and on the proper screen through our marketing services. At Invictus Studio, our professional marketers know how to use all available online marketing tools to attract and engage your target audience. Our extensive knowledge of various digital marketing technologies can assist you in determining the best method to reach your target audience and produce quality leads.
								 <br/><br/>
Trust the digital marketing experts at Invictus Studio to assist you in developing an expert online marketing plan to attract more quality visits to your site and convert them into leads and sales. Contact our team, and let's work together to transform your business. 
								 </p>
								 <div className="bann-btn">
									<a href={()=>false} onClick={()=>history.push("/contact")} > Contact Us <i class="far fa-chevron-right"></i></a>


								</div>
							</div>
						</Col>
						<Col md={5} className="pad-zero">
							<div className="hire-img">
								
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="dm-cta">
				<Container >
					<Row>
						<Col md={12}>
							<div className="dm-cta-content">
								
									  <div className="dm-cta-cont">
									  <h4>Get Digital Marketing</h4>
									  <h2>Consultation for your online Business</h2>
									   <form>
										   <div className="cta-form">
											   <div className="cta-fld">
											   <input type="email" placeholder="Enter Email Address" required="required" />
											   </div>
											   <div className="cta-btn">
												   <button type="submit"><i class="fas fa-paper-plane"></i></button>

											   </div>
											   
										   </div>
									   </form>
									  </div>
									  <div className="dm-cta-img">
								<img src={men}/>	
							</div>
								
								
									
								

							</div>
						
						</Col>
					</Row>
				</Container>
			</section>
			<section className="industries">
				<Container fluid>
					<Row>
                        <Col md={12}>
							<div className="industry-content">
								<h4>Where we work</h4>
								<h2><span>I</span>ndustries we served</h2>
							</div>
							<Slider {...settings} className="indutry-slider">
                                {industrySlider.map((slides,index)=>{
									return(
										<div className="ind-slides" key={index}>
											<div className="industry-box">
                                               <img src={slides.imgUrl}/>
											    <h6>{slides.title}</h6>
											</div>

										</div>
									)
								})}
							</Slider>

						 </Col>
					</Row>
				</Container>
			</section>
			{/* <section className="our-work" style={{background:`url(${WorkBg})`}}>
				<Container>
					<Row className="align-items-center">
						<Col md={12}>
							<div className="work-parent">
							<div className="our-work-content" >
								<h4>Our Work</h4>
								<h2><span>P</span>ortfolio We Created</h2>
							</div>
							<ul className="our-work-list">
								<li>
									<div className="workbox">
										<img src={Workbx1}/>
										<div className="workbox-overlay">
											<span>
											<i class="fas fa-plus"></i> 
											</span>
										</div>
									</div>
								</li>
								<li>
									<div className="workbox">
										<img src={Workbx2}/>
										<div className="workbox-overlay">
											<span>
											<i class="fas fa-plus"></i> 
											</span>
										</div>
									</div>
								</li>
								<li>
									<div className="workbox">
										<img src={Workbx3}/>
										<div className="workbox-overlay">
											<span>
											<i class="fas fa-plus"></i> 
											</span>
										</div>
									</div>
								</li>
								<li>
									<div className="workbox">
										<img src={Workbx4}/>
										<div className="workbox-overlay">
											<span>
											<i class="fas fa-plus"></i> 
											</span>
										</div>
									</div>
								</li>
								<li>
									<div className="workbox">
										<img src={Workbx5}/>
										<div className="workbox-overlay">
											<span>
											<i class="fas fa-plus"></i> 
											</span>
										</div>
									</div>
								</li>
							</ul>
							</div>
						</Col>
					</Row>
				</Container>
			</section> */}
			<OurWork/>
			<section className="dm-work">
				<Container>
                   <Row className="align-items-center">
					   <Col md={12}>
						  <div className="dm-work-content">
							  <h4>How Digital</h4>
							  <h2><span>M</span>arketing Works</h2>
							  <ul className="marketing-list">
							   <li>
								   <div className="market-parent">
								   <div className="market-box">
									   <img src={ic_1}  />
								   </div>
								   </div>
								   <h5>Research & Analyze</h5>
								   
							   </li>
							   <li>
							   <div className="market-parent">
								   <div className="market-box">
									   <img src={ic_2}  />
								   </div>
								   </div>
								   <h5>Design & Develop</h5>
								   
							   </li>
							   <li>
							   <div className="market-parent">
								   <div className="market-box">
									   <img src={ic_3}  />
								   </div>
								   </div>
								   <h5>Optimize & Maximize</h5>


							   </li>
							   <li>
							   <div className="market-parent">
								   <div className="market-box">
									   <img src={ic_4}  />
								   </div>
								   </div>
								   <h5>Measure</h5>


							   </li>
							  </ul>
							  
							</div> 

					   </Col>
				   </Row>
				</Container>
			</section>
			<Testimonials/>
			<FtrForm/>
		</div>


	)
}
export default DigitalMarketing