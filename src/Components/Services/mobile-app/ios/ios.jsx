import "./ios.css"
import { Container,Row,Col } from "react-bootstrap"
import bannerBg from "../../../../Assets/images/services/mobile-app/ios/banner/banner.jpg"
import BannerImg from "../../../../Assets/images/services/mobile-app/ios/banner/banner-img.png"
import I_01 from "../../../../Assets/images/services/mobile-app/ios/ios/01.png"
import I_02 from "../../../../Assets/images/services/mobile-app/ios/ios/02.png"
import I_03 from "../../../../Assets/images/services/mobile-app/ios/ios/03.png"
import I_04 from "../../../../Assets/images/services/mobile-app/ios/ios/04.png"
import sk01 from "../../../../Assets/images/services/digital-marketing/skills/img-list/01.jpg"
import sk02 from "../../../../Assets/images/services/digital-marketing/skills/img-list/02.jpg"
import sk03 from "../../../../Assets/images/services/digital-marketing/skills/img-list/03.jpg"
import sk04 from "../../../../Assets/images/services/digital-marketing/skills/img-list/04.jpg"
import Slider from "react-slick"
import mble01 from "../../../../Assets/images/services/mobile-app/android/and-mobile/01.png"
import mble02 from "../../../../Assets/images/services/mobile-app/android/and-mobile/02.png"
import mble03 from "../../../../Assets/images/services/mobile-app/android/and-mobile/03.png"
import mble04 from "../../../../Assets/images/services/mobile-app/android/and-mobile/04.png"
import mble05 from "../../../../Assets/images/services/mobile-app/android/and-mobile/05.png"
import half_bg from "../../../../Assets/images/services/mobile-app/android/tech-mbile/half-bg.jpg"
import lang1 from "../../../../Assets/images/services/mobile-app/android/tech-mbile/01.png"
import lang2 from "../../../../Assets/images/services/mobile-app/android/tech-mbile/02.png"
import lang3 from "../../../../Assets/images/services/mobile-app/android/tech-mbile/03.png"
import lang4 from "../../../../Assets/images/services/mobile-app/android/tech-mbile/04.png"
import lang5 from "../../../../Assets/images/services/mobile-app/android/tech-mbile/05.png"
import lang6 from "../../../../Assets/images/services/mobile-app/android/tech-mbile/06.png"
import lang7 from "../../../../Assets/images/services/mobile-app/android/tech-mbile/07.png"
import lang8 from "../../../../Assets/images/services/mobile-app/android/tech-mbile/08.png"
import app1 from "../../../../Assets/images/services/mobile-app/android/app/01.png"
import app2 from "../../../../Assets/images/services/mobile-app/android/app/02.png"
import app3 from "../../../../Assets/images/services/mobile-app/android/app/03.png"
import app4 from "../../../../Assets/images/services/mobile-app/android/app/04.png"
import app5 from "../../../../Assets/images/services/mobile-app/android/app/05.png"
import app_dev_left from "../../../../Assets/images/services/mobile-app/android/app-dev/left-img.png"
import dev_01 from "../../../../Assets/images/services/mobile-app/android/app-dev/dev_list/01.png"
import dev_02 from "../../../../Assets/images/services/mobile-app/android/app-dev/dev_list/02.png"
import dev_03 from "../../../../Assets/images/services/mobile-app/android/app-dev/dev_list/03.png"
import dev_04 from "../../../../Assets/images/services/mobile-app/android/app-dev/dev_list/04.png"
import Ind01 from "../../../../Assets/images/services/mobile-app/android/ind-serv/01.png"
import Ind03 from "../../../../Assets/images/services/mobile-app/android/ind-serv/03.png"
import Ind02 from "../../../../Assets/images/services/mobile-app/android/ind-serv/02.png"
import Ind04 from "../../../../Assets/images/services/mobile-app/android/ind-serv/04.png"
import Ind05 from "../../../../Assets/images/services/mobile-app/android/ind-serv/05.png"
import ClientTestimonials from "../../video-animation/clientTestimonail"
import C_01 from "../../../../Assets/images/services/mobile-app/ios/custom/01.png"
import C_02 from "../../../../Assets/images/services/mobile-app/ios/custom/02.png"
import C_03 from "../../../../Assets/images/services/mobile-app/ios/custom/03.png"
import C_04 from "../../../../Assets/images/services/mobile-app/ios/custom/04.png"
import C_05 from "../../../../Assets/images/services/mobile-app/ios/custom/05.png"
import C_06 from "../../../../Assets/images/services/mobile-app/ios/custom/06.png"
import mbile from "../../../../Assets/images/services/mobile-app/ios/custom/mobile.png"
import mb01 from "../../../../Assets/images/services/mobile-app/ios/mobile/01.png"
import mb02 from "../../../../Assets/images/services/mobile-app/ios/mobile/02.png"
import mb03 from "../../../../Assets/images/services/mobile-app/ios/mobile/03.png"
import mb04 from "../../../../Assets/images/services/mobile-app/ios/mobile/04.png"
import IndWorks from "../../website-development/b2b/IndWorks"
import tech01 from "../../../../Assets/images/services/mobile-app/ios/techno-box/01.png"
import tech02 from "../../../../Assets/images/services/mobile-app/ios/techno-box/02.png"
import tech03 from "../../../../Assets/images/services/mobile-app/ios/techno-box/03.png"
import { useEffect,useContext,useState } from "react"
import { MainContext } from "../../../Context/GlobalState"
import Preloader from "../../../Preloader/preloader"
import SocialIcon from "../../../Home/Social-Icons/Social-icons"
import useMediaQuery from "../../../Utils/windowSize"
import {Helmet} from "react-helmet";






const IOS = ()=>{
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
	useEffect(()=>{

        window.scrollTo(0,0) 
      
   
   },[])
   const countryData = useContext(MainContext)
	const {popOpen} = countryData
	const mbList = [mb01,mb02,mb03,mb04,mb01,mb02,mb03,mb04]
	const settings = {
		dots: false,
		arrows:false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		centerMode:true,
		centerPadding: "0",
		autoplay: true,
        autoplaySpeed: 2000
		
	  };
	  const settings2 = {
		dots: false,
		arrows:true,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		centerMode:true,
		centerPadding: "40px",
		// autoplay: true,
        // autoplaySpeed: 2000,
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
	  const settings3 = {
		dots: true,
		arrows:false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
	
		
		
	  };
	  const sett3 = {
		dots: false,
		arrows:false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	
		autoplay: true,
        autoplaySpeed: 2000,

	}
	  const indServ = [{imgUrl:Ind01,title:"News & Magazine"},
	  {imgUrl:Ind02,title:"Business"},
	  {imgUrl:Ind03,title:"Health & Fitness"},
	  {imgUrl:Ind04,title:"Communication"},
	  {imgUrl:Ind05,title:"Shopping"},
	  {imgUrl:Ind01,title:"News & Magazine"},
	  {imgUrl:Ind02,title:"Business"},
	  {imgUrl:Ind03,title:"Health & Fitness"},
	  {imgUrl:Ind04,title:"Communication"},
	  {imgUrl:Ind05,title:"Shopping"},]


	
	return(
		<div className = "IOS">
           <Helmet>
			<meta name="description" content="Prominent logo and web design service provider that offers services to different companies and businesses."/>
            <title>iOS | Invictus Studio</title>
			</Helmet>
            {load ? <Preloader/> : null }
              <SocialIcon/>
             <section className="main-Banner" style={{background: `url(${bannerBg})`}}>
				<Container>
                   <Row>
					   <Col md={5} sm={6} lg={5} xl={5} xs={6}> 
						   <div className="banner-content" >
						   <h1 >Mobile App</h1>
							<h3 >(iOS)</h3>
						        
						   </div>
					   
					   </Col>
					   <Col md={7} sm={6} lg={7} xs={6} xl={7}>
						   <div className="banner-img">
                              <img src={BannerImg} alt="" />

						   </div>
					   
					   </Col>
				   </Row>
				</Container>

			</section>
			<section className="our-responsive">
				<Container>
					{matches ? <Slider {...sett3}>
                                        <div>
										<div className ="resp-box">
											<span><img src={I_01} alt=""/></span>
												<h6>IPhone Apps</h6>
												 <p>The native iOS apps we develop work perfectly on Apple iPhones without causing any disruptions in user interface and functionality</p>

											</div>
									
											</div>
								            <div>
											<div className ="resp-box">
												<span><img src={I_02} alt=""/></span>
												<h6>IPad Apps</h6>
												 <p>Our developers build customizable, feature-rich iPad apps for your business that uses all the latest technologies to provide you a consistent experience</p>

											</div>
											</div>
											<div>
											<div className ="resp-box">
												<span><img src={I_03} alt=""/></span>
												<h6>Watch Apps</h6>
												 <p>Every Apple app we build for iPhone works flawlessly on Apple watches. Our apps have the power to adapt gracefully to different platforms without compromising on performance and functionality</p>

											</div>
											</div>
											<div>
											<div className ="resp-box">
												<span><img src={I_04} alt=""/></span>
												<h6>TV Apps</h6>
												 <p>iOS apps developed by our developers take no time to adjust on Apple TV. Our apps provide you a captivating and fascinating experience with our feature-rich apps on the big screens. </p>

											</div>
											</div>
									
						
						
						</Slider> : <Row className="align-items-center">
						<Col md={6}>
							     <div className="response-main">
							
								
									<ul className="responsive-list  mb-5">
										<li>
											<div className ="resp-box">
												<span><img src={I_01} alt=""/></span>
												<h6>IPhone Apps</h6>
												 <p>The native iOS apps we develop work perfectly on Apple iPhones without causing any disruptions in user interface and functionality</p>

											</div>
										</li>
										
										<li>
											<div className ="resp-box">
												<span><img src={I_02} alt=""/></span>
												<h6>IPad Apps</h6>
												 <p>Our developers build customizable, feature-rich iPad apps for your business that uses all the latest technologies to provide you a consistent experience</p>

											</div>
										</li>

									</ul>
									<ul className="responsive-list ">
										
										<li>
											<div className ="resp-box">
												<span><img src={I_03} alt=""/></span>
												<h6>Watch Apps</h6>
												 <p>Every Apple app we build for iPhone works flawlessly on Apple watches. Our apps have the power to adapt gracefully to different platforms without compromising on performance and functionality</p>

											</div>
										</li>
										<li>
											<div className ="resp-box">
												<span><img src={I_04} alt=""/></span>
												<h6>TV Apps</h6>
												 <p>iOS apps developed by our developers take no time to adjust on Apple TV. Our apps provide you a captivating and fascinating experience with our feature-rich apps on the big screens. </p>

											</div>
										</li>

									</ul>
									</div>
						
							
						</Col>
						<Col md={6}>
				          <div className="resp-content">
							  <h4>Taking Your App</h4>
							  <h2><span>I</span>Dea To all the platforms</h2>
							   <p>Invictus Studio comes under the industry's leading mobile development companies that create impactful and feature-packed iOS apps for all Apple devices. We help brands take over the world through robust apps accessible on every Apple platform and version. At Invictus Studio, we develop iOS apps that offer your brand the unique ability to work across several different platforms at a time. Our experts create apps that effortlessly work on iPhone, iPad, Apple TV, and Apple Watch and have unique potential for each forum. 
Provide us with your app idea, and see our developers transform that idea into a living reality. We ensure you no one does iOS apps better than us. When it comes to high-performance, user-friendly, and feature-packed iOS mobile experiences - we are the leaders. 

							   </p>
							   {/* <div className="bann-btn">
									<a href="#" > Get a Quote <i class="far fa-chevron-right"></i></a>


								</div> */}

						  </div>
						</Col>

					</Row>}
					
				</Container>
			</section>
			<section className="build-app">
				<Container>
					<Row>
						<Col  md={12}>
						 <div className="build-app-content">
							 <h4>WE DO NOT JUST BUILD APPS</h4>
							 <h2>WE CRAFT TOP-NOTCH MOBILE Apps</h2>
							 <p>Invictus Studio has a wealth of iOS app development experience leveraging technologies and integrations that are iOS specific. We work on our proven agile methodology and deliver robust and end-to-end iOS apps. We design mobile app by keeping your goals and needs in mind. Taking the user-focused approach heads-on, we provide you with iOS apps that make better mobile relationships with your customers. </p>
							 <div className="bann-btn">
									<a href={()=>false} onClick={popOpen}> Get a Quote <i class="far fa-chevron-right"></i></a>


								</div>
						 </div>

						</Col>
					</Row>
				</Container>

			</section>
			<section className="custom-iphone">
				<Container>
					<Row>
						<Col md={12}>
						 <div className="custom-content">
							 <h4>custom iphone</h4>
							 <h2><span>A</span>pp development</h2>
						 </div>

						</Col>
						<Col md={4} className="p-0">
							<div className="custom-container">
								<ul className="custom-list __right">
									<li>
										<div className="cust-box">
											<span>
												<img src={C_01} />
											</span>
											<div className="cust-content">
												<h6>iOS GAME DEVELOPMENT</h6>
												<p>Enthrall your users with our iOS game apps that provide robust gameplay. Our team of expert developers channels their best gaming expertise to construct gaming apps for iOS</p>
											</div>
										</div>
									</li>
									<li>
										<div className="cust-box">
											<span>
												<img src={C_02} />
											</span>
											<div className="cust-content">
												<h6>ONLINE BOOKING APPS</h6>
												<p>Our online booking apps provide you powerful features and options that people love. We utilize modern technologies and frameworks to build user-friendly online booking apps with easy navigation. </p>
											</div>
										</div>
									</li>
									<li>
										<div className="cust-box">
											<span>
												<img src={C_03} />
											</span>
											<div className="cust-content">
												<h6>SOCIAL/CHAT APP</h6>
												<p>We develop social and chat apps that provide innovative chatting options with a reliable and secure system accessible from every iOS platform</p>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</Col>
						<Col md={4} className="p-0">
							<div className="___imgs">
							<img src={mbile} alt="" />
							</div>
						</Col>

						<Col md={4} className="p-0">
						<div className="custom-container">
								<ul className="custom-list __left">
									<li>
										<div className="cust-box">
											<span>
												<img src={C_04} />
											</span>
											<div className="cust-content">
												<h6>ECOMMERCE APPS</h6>
												<p>We develop customizable, agile, and highly interactive mobile iOS eCommerce apps that deliver all the specialized features of today's eCommerce apps.</p>
											</div>
										</div>
									</li>
									<li>
										<div className="cust-box">
											<span>
												<img src={C_05} />
											</span>
											<div className="cust-content">
												<h6>TRAVEL APPS</h6>
												<p>Our developers excel in building iOS travel apps that have unique and user-friendly features. Our travel apps offer fast solutions for ticketing, hotel booking, tour booking, and more.</p>
											</div>
										</div>
									</li>
									<li>
										<div className="cust-box">
											<span>
												<img src={C_06} />
											</span>
											<div className="cust-content">
												<h6>MAINTENANCE SUPPORT</h6>
												<p>We provide maintenance apps that help organize, track, and keep your applications up-to-date. Through our apps, you can enhance the scalability and performance of your apps. </p>
											</div>
										</div>
									</li>
								</ul>
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
												    <p>Through our iOS apps, we help you curate a brand personality that attracts users and builds lasting relationships with your audience</p>

												   
											   </div>

									   </div>
								   </li>
								   <li>
									   <div className="skill-box">
										   	<img src={sk02} />
											   <h4 className="text-center">User Experience</h4>
											   <div className="skill-overlay">
												   
												   <h5>User Experience</h5>
												    <p>Our developed apps provide users with designs that offer engaging digital experiences that are enjoyable for end-users</p>

												   
											   </div>

									   </div>
								   </li>
								   <li>
									   <div className="skill-box">
										   	<img src={sk03} />
											   <h4 className="text-center">User Interface</h4>
											   <div className="skill-overlay">
												   
												   <h5>User Interface</h5>
												    <p>The UI applications we design are creative, visually appealing, immersive, seamless, and intuitive. </p>

												   
											   </div>

									   </div>
								   </li>
								   <li>
									   <div className="skill-box">
										   	<img src={sk04} />
											   <h4 className="text-center">Target Market</h4>
											   <div className="skill-overlay">
												   
												   <h5>Target Market</h5>
												    <p>We build iOS apps that specifically target your designated target market. Our skilled developers use advanced features and technologies that attract specific audiences and markets. </p>

												   
											   </div>

									   </div>
								   </li>
							   </ul>
						  </div>

						</Col>
					</Row>
				</Container>
			</section>
			<IndWorks/>
			<section className="tech-used">
				<Container>
					<Row>
						<Col md={12}>
							<div className="tech_main">
							<Row>
							<Col md={5} lg={5} xl={5} sm={12} xs={12}>		
							<div className="tech-left">
								<h4>Productive & Scalable</h4>
								<h2>iOS APPLICATION DEVELOPMENT</h2>
								<p>Invictus Studio provides you with an efficient team of skilled developers who develop innovative and scalable iOS applications. Our designers and developers follow the latest and modern technologies and integrations to deliver productive apps. We assure you that through our developed apps, you can easily measure your progress. 
At Invictus Studio, we are a team of passionate individuals eager to provide you with iOS applications that are productive, innovative, and scalable. 
Security

								</p>
							</div>
							</Col>
							<Col md={2} lg={2} xl={2} xs={12} sm={12}>
							<div className="tech-center ">
								<ul className="techno-list ">
									<li>
										<span>
											<img src={tech01} alt="" />
										</span>
									</li>
									<li>
										<span>
											<img src={tech02} alt="" />
										</span>
									</li>
									<li>
										<span>
											<img src={tech03} alt="" />
										</span>
									</li>
								



								</ul>

							</div>
							</Col>
							<Col md={5} lg={5} xl={5} sm={12} xs={12}>
							<div className="tech-right">
								<ul className="__tech-list">
									<li>
										<h6>Security</h6>
										 <p> We never compromise on security. We make sure that the application services we offer give optimal protection to its end-user. Our creations are the sole result of trust and integrity. Our apps deliver performance while ensuring an excellent infrastructure that is easily adjustable for future modern technologies.</p>
									</li>
									<li>
										<h6>Stunning graphics</h6>
										 <p>Our iOS apps offer stunning and visually appealing graphics, along with unique design functionalities. </p>
									</li>
									<li>
										<h6>Innovative</h6>
										 <p>iOS applications that we develop are out-of-the-box. Every app delivers our customers with innovative solutions to cater to individual brand needs.</p>
									</li>
								</ul>
							</div>
							</Col>
							</Row>
							</div>
						</Col>
					
						
					</Row>
				</Container>
			</section>
			
			
		
			<section className="android-app">
				<Container >
					<Row>
						<Col md={12}>
							<div className="app-content">
								<h4>iOS APPLICATION</h4>
								<h2><span>D</span>evelopment solutions</h2>
								<ul className="app-list">
									<li>
										<div className="app-box">
											<span>
											<img src={app1}/>
											</span>
									     <h6>Explore and <br/>Analyze</h6>
										</div>
									</li>
									<li>
										<div className="app-box">
										<span>
											<img src={app2}/>
											</span>
									     <h6>Documentation & <br/> Scoping</h6>
										</div>
									</li>
									<li>
										<div className="app-box">
										<span>
											<img src={app3}/>
											</span>
									     <h6>Designing & <br/> WireFraming</h6>
										</div>
									</li>
									<li>
										<div className="app-box">
										<span>
											<img src={app4}/>
											</span>
									     <h6>Development & <br/> Testing</h6>
										</div>
									</li>
									<li>
										<div className="app-box">
										<span>
											<img src={app5}/>
											</span>
									     <h6>Deployment <br/> phase</h6>
										</div>
									</li>

								</ul>
								<div className="bann-btn">
									<a href={()=>false} onClick={popOpen} > Get a Quote <i class="far fa-chevron-right"></i></a>
								</div>
							</div>
							<div className="doted-line"></div>


						</Col>
					</Row>
				</Container>
			</section>
		
			<section className="where-we-work">
				<Container fluid>
					<Row>
						<Col md={12}>
							<div className="work-content">
						  <h4>Where we work</h4>
						  <h2><span>I</span>ndustries we served</h2>
						  <Slider {...settings2} className = "indv_slider">
                           {indServ.map((sevi,index)=>{
							   return(
								   <div className="ind-parent" key={index}>
									   <div className="indv_box">
										   <img src={sevi.imgUrl}/>
										   <h6>{sevi.title}</h6>
									   </div>
								   </div>
							   )
						   })}
						</Slider>
						  </div>
						</Col>
					
					</Row>
				</Container>

			</section>
			<ClientTestimonials/>
		
		</div>
	)
}
export default IOS