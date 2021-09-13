import "./responsive.css"
import { Container,Row,Col } from "react-bootstrap"
import bannerBg from "../../../../Assets/images/services/website-development/responsive/banner/bg-banner.jpg"
import BannerImg from "../../../../Assets/images/services/website-development/responsive/banner/banner-img.png"
import OurWork from "../../digital-marketing/our-work"
import OurProcess from "../b2b/our-process"
import WantBusiness from "../b2b/wantBusiness"
import Ftrform from "../../../Home/Form/Form"
import ClientTestimonaials from "../../video-animation/clientTestimonail"
import IndWorks from "../b2b/IndWorks"
import R_01 from "../../../../Assets/images/services/website-development/responsive/resp-design/01.png"
import R_02 from "../../../../Assets/images/services/website-development/responsive/resp-design/02.png"
import R_03 from "../../../../Assets/images/services/website-development/responsive/resp-design/03.png"
import ResponseBg from "../../../../Assets/images/services/website-development/responsive/responsive-web/bg.jpg"
import ResponseRight from "../../../../Assets/images/services/website-development/responsive/responsive-web/right-img.png"
import S_01 from "../../../../Assets/images/services/website-development/responsive/simple-fast/01.png"
import S_02 from "../../../../Assets/images/services/website-development/responsive/simple-fast/02.png"
import S_03 from "../../../../Assets/images/services/website-development/responsive/simple-fast/03.png"
import S_04 from "../../../../Assets/images/services/website-development/responsive/simple-fast/04.png"
import responsePort from "../../../../Assets/images/services/website-development/responsive/response-portfolio/bg.jpg"
import Slider from "react-slick"
import res01 from "../../../../Assets/images/services/website-development/responsive/response-portfolio/001.png"
import res02 from "../../../../Assets/images/services/website-development/responsive/response-portfolio/002.png"
import res03 from "../../../../Assets/images/services/website-development/responsive/response-portfolio/003.png"
import res04 from "../../../../Assets/images/services/website-development/responsive/response-portfolio/004.png"
import SocialIcons from "../../../Home/Social-Icons/Social-icons"
import useMediaQuery from "../../../Utils/windowSize"
import { useEffect,useState,useContext } from "react"
import Preloader from "../../../Preloader/preloader"
import { MainContext } from "../../../Context/GlobalState"
import {Helmet} from "react-helmet";



const Responsive = ()=>{
	const countryData = useContext(MainContext)
	const {popOpen} = countryData
	const matches = useMediaQuery("(max-width: 768px)");
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
	useEffect(()=>{

        window.scrollTo(0,0) 
      
   
   },[])
	const sliderImg = [res01,res02,res03,res04]
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		arrows:true,
		autoplay:false,
		autoplaySpeed: 2000,
		
	  };

	return(
		<div className = "Responsive">
			<Helmet>
			<meta name="description" content="Responsive website design services by Invictus Studio. Our affordable responsive website development packages are suitable for all businesses."/>
            <title>Responsive Website Design and Development | Invictus Studio</title>
			</Helmet>
            {load ? <Preloader/> : null }
			<SocialIcons/>
             <section className="main-Banner" style={{background: `url(${bannerBg})`}}>
				<Container>
                   <Row>
					   <Col md={5} lg={5} xl={5} sm={5} xs={5}>
						   <div className="banner-content" >
						   <h1 >Web Design & Development</h1>
							<h3 >(Responsive)</h3>
						        
						   </div>
					   
					   </Col>
					   <Col md={7} lg={7} xl={7} sm={7} xs={7}>
						   <div className="banner-img">
                              <img src={BannerImg} alt="" />

						   </div>
					   
					   </Col>
				   </Row>
				</Container>

			</section>
			<section className="our-responsive">
				<Container>
					{matches ? <Slider {...settings} className="resp-sliders">
                              
								
									<div>
											<div className ="resp-box">
												<span><img src={R_01} alt=""/></span>
												<h6>Improve SEO</h6>
												 <p>A responsive site design includes mobile users, which helps businesses boost their ranks on the world's most prominent search engine.</p>

											</div>
										</div>
										<div>
											<div className ="resp-box">
												<span><img src={R_02} alt=""/></span>
												<h6>Better User Experience</h6>
												 <p>Responsive websites are suitable on all devices as they provide visitors with the highest usabidivty for your website.</p>

											</div>
										</div>
										<div>
											<div className ="resp-box">
												<span><img src={R_03} alt=""/></span>
												<h6>Future Friendly</h6>
												 <p>Responsive websites are the future and the key to a successful business. With the fast-paced evolving environment, responsive sites provide the future assurity for your business. </p>

											</div>
								
								
									</div>
					        </Slider>:
							<Row className="align-items-center">
							<Col md={6} sm={12} xs={12} lg={6} xl={6}>
									 <div className="response-main">
								
									
										<ul className="responsive-list __ul1">
											<li>
												<div className ="resp-box">
													<span><img src={R_01} alt=""/></span>
													<h6>Improve SEO</h6>
													 <p>A responsive site design includes mobile users, which helps businesses boost their ranks on the world's most prominent search engine.</p>
	
												</div>
											</li>
											
	
										</ul>
										<ul className="responsive-list">
											
											<li>
												<div className ="resp-box">
													<span><img src={R_02} alt=""/></span>
													<h6>Better User Experience</h6>
													 <p>Responsive websites are suitable on all devices as they provide visitors with the highest usability for your website.</p>
	
												</div>
											</li>
											<li>
												<div className ="resp-box">
													<span><img src={R_03} alt=""/></span>
													<h6>Future Friendly</h6>
													 <p>Responsive websites are the future and the key to a successful business. With the fast-paced evolving environment, responsive sites provide the future assurity for your business. </p>
	
												</div>
											</li>
	
										</ul>
										</div>
							
								
							</Col>
							<Col md={6} sm={12} xl={6} lg={6} xs={12} >
							  <div className="resp-content">
								  <h4>Responsive</h4>
								  <h2>Website Design & Development</h2>
								   <p>
								   Nothing ensures business success more than a responsive website. At Invictus Studio, we give your company a responsive and appealing website that produces traffic, leads, and sales. Our team assists you in expanding your client base by creating adaptable web solutions that work seamlessly across various devices and platforms, with the added benefits. Whether you aim to build a new responsive site from scratch or improve an existing one, we offer you our services. Integrating responsive sites guarantees to establish an online presence that will help you thrive in the contemporary era and get more customers
								   </p>
								   <div className="bann-btn">
										<a href={()=>false} onClick={popOpen}>  Get a Quote <i class="far fa-chevron-right"></i></a>
	
	
									</div>
	
							  </div>
							</Col>
	
						</Row>}
					
				</Container>
			</section>
		   <section className ="successful-review">
            <Container>
				<Row className="align-items-center">
					<Col md={12}>
                          <ul className="successful-list">
							  <li>
								  <div className="successfull-box">
								   <h2>8+</h2>
								    <p>Years of Experience</p>
								  </div>
								  </li>
								  <li>
								  <div className="successfull-box">
								   <h2>2K+</h2>
								    <p>Responive Websites</p>
								  </div>
								  </li>
								  <li>
								  <div className="successfull-box">
								   <h2>1K+</h2>
								    <p>Clients Satisfied</p>
								  </div>
								  </li>
								  <li>
								  <div className="successfull-box">
								   <h2>50+</h2>
								    <p>Team Members</p>
								  </div>
								  </li>
								  <li>
								  <div className="successfull-box">
								   <h2>90%</h2>
								    <p>Client Retention</p>
								  </div>
								  </li>
						  </ul>
					</Col>
				</Row>
			</Container>
		   </section>
		   <section className="response-wb" style={{background: `url(${ResponseBg})`}}>
			   <Container>
				   <Row >
					   <Col md={5} xs={12} sm={12} lg={5} xl={5}>
                       <div className="rwb-content">
						   <h4>Best Responsive Website</h4>
						   <h2>Company in United States</h2>
						   <p>Invictus Studio is a web development firm with some of the best responsive web developers in the United States. Let us know what you want to create, and we will make it a reality.</p>
						   <div className="bann-btn">
									<a href={()=>false} onClick={popOpen}> Get a Quote <i class="far fa-chevron-right"></i></a>


								</div>
					  
					   </div>

					   </Col>
					   <Col md={7} lg={7} xl={7} xs={12} sm={12}>
						   <div className="response-img">
							   <img src={ResponseRight}/>
						   </div>
					   </Col>


				   </Row>
			   </Container>
		   </section>
		   <section className ="simple-fast">
			   <Container>
				   <Row>
					   <Col>
					   <div className="simple-fast-content">
						   <h4>Responsive Website Works</h4>
						   <h2>Simple, fast & Effective</h2>

					   </div>
					   <ul className="simple-list">
						   <li>
							   <div className="simple-box">
								   <span>
									   <img src={S_01} alt=""/>
								   </span>
								   <h5>Increase Viewers</h5>
								    <p>An adaptable web design for your company will allow you to reach out to customers on both PCs and mobile devices, providing more flexibility at a cheap development cost.</p>

							   </div>
						   </li>
						   <li>
							   <div className="simple-box">
								   <span>
									   <img src={S_02} alt=""/>
								   </span>
								   <h5>Lower Maintenance</h5>
								    <p>A responsive web design's one-size-fits-all concept ensures that whatever modifications you make are implemented uniformly throughout every platform, making it a low-maintenance option.  </p>

							   </div>
						   </li>
						   <li>
							   <div className="simple-box">
								   <span>
									   <img src={S_03} alt=""/>
								   </span>
								   <h5>Optimization</h5>
								    <p>Responsive sites are easier to optimize and thus help businesses increase their overall page functionality by ensuring they receive a seamless user experience across all platforms and devices. </p>

							   </div>
						   </li>
						   <li>
							   <div className="simple-box">
								   <span>
									   <img src={S_04} alt=""/>
								   </span>
								   <h5>Easier Analytics</h5>
								    <p>Analytic solutions now adapt to responsive websites, making it easier to extract information from traffic, site engagements, and user time to determine how your SEO efforts improve your business.</p>

							   </div>
						   </li>
					   </ul>
					   </Col>
				   </Row>
			   </Container>
		   </section>
		   <section className="response-portfolio" style={{background: `url(${responsePort})`}}> 
			   <Container fluid>
				   <Row>
					   <Col md={6} lg={6} xl={6} sm={12} xs={12}>
						   <Slider {...settings} className="response-slider">
							   {sliderImg.map((slides,index)=>{
								   return(
									   <div className="res-parent" key={index}> 
									   <div className ="res-slide">
                                          <img src={slides} alt=""/>
									   </div>
									   </div>
								   )
							   })}
						   </Slider>

					   </Col>
					   <Col md={6} lg={6} xl={6} sm={12} xs={12}>
						   <div className="resp-cntnt">
							   	<h4>Our Work</h4>
								   <h2>Responsive Portfolio </h2>
								   <p>
								   Invictus Studio has had the privilege to work with some outstanding clients and businesses, and we take immense pride in telling you that we've aced all our work. Our services provide exquisite experiences that never fail to leave an indelible impact. Please have a look at all our latest responsive web portfolios.
									   </p>
						   </div>
					   </Col>
				   </Row>
			   </Container>
		   </section>
		   <OurProcess/>
			<OurWork/>
			<WantBusiness webName="responsive"/>
			<IndWorks/>
			<ClientTestimonaials/>
			<Ftrform/>
		</div>
	)
}
export default Responsive