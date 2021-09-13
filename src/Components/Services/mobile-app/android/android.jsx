import "./android.css"
import { Container,Row,Col } from "react-bootstrap"
import bannerBg from "../../../../Assets/images/services/mobile-app/android/banner/bg-banner.jpg"
import BannerImg from "../../../../Assets/images/services/mobile-app/android/banner/banner-img.png"
import A_01 from "../../../../Assets/images/services/mobile-app/android/idea/01.png"
import A_02 from "../../../../Assets/images/services/mobile-app/android/idea/02.png"
import A_03 from "../../../../Assets/images/services/mobile-app/android/idea/03.png"
import A_04 from "../../../../Assets/images/services/mobile-app/android/idea/04.png"
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
import { MainContext } from "../../../Context/GlobalState"
import { useContext } from "react"
import { useEffect,useState } from "react"
import Preloader from "../../../Preloader/preloader"
import useMediaQuery from "../../../Utils/windowSize"
import {Helmet} from "react-helmet";







const Android = ()=>{
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
	const countryData = useContext(MainContext)
	const {popOpen} = countryData
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
	const settings = {
		dots: false,
		arrows:false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		centerMode:true,
		centerPadding: "0",
		autoplay: false,
        autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 768,
				settings:{
				  slidesToShow: 3,
				  slidesToScroll: 1,
				//   centerPadding: "20px"
				}
			}
		  ]
		
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
        // autoplaySpeed: 2000
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

	  const mbileList = [mble04,mble02,mble03,mble04,mble05,mble04,mble02,mble03,mble04,mble05]
	
	return(
		<div className = "Android">
			<Helmet>
			<meta name="description" content="Prominent logo and web design service provider that offers services to different companies and businesses."/>
            <title>Android | Invictus Studio</title>
			</Helmet>
            {load ? <Preloader/> : null }

             <section className="main-Banner" style={{background: `url(${bannerBg})`}}>
				<Container>
                   <Row>
					   <Col md={5} sm={6} lg={5} xl={5} xs={6}>
						   <div className="banner-content" >
						   <h1 >Mobile App</h1>
							<h3 >(Android)</h3>
						        
						   </div>
					   
					   </Col>
					   <Col md={7} lg={7} sm={6} xl={7} xs={6}>
						   <div className="banner-img">
                              <img src={BannerImg} alt="" />

						   </div>
					   
					   </Col>
				   </Row>
				</Container>

			</section>
			<section className="our-responsive">
				<Container>
					{matches ? <Slider {...sett3} className="and_resp_Slider">
			
								             <div>
											<div className ="resp-box">
												<span><img src={A_01} alt=""/></span>
												<h6>Android Phone</h6>
												 <p>The native android mobile application we do works exceptionally well on Android smartphones without causing any interference in user interface and functionality</p>

											</div>
										    </div>
						                    <div>
											<div className ="resp-box">
												<span><img src={A_02} alt=""/></span>
												<h6>Android Wear</h6>
												 <p>Every android mobile application we develop adjusts effortlessly on Android wearables. Our apps have the power to adapt to different platforms without compromising their visuals. </p>

											</div>
						                    </div>

						
						
										
						                     <div>
											<div className ="resp-box">
												<span><img src={A_03} alt=""/></span>
												<h6>Android TV</h6>
												 <p>Our developers create captivating android mobile applications that flawlessly adjust to the big screens of android smart TV. </p>

											</div>
											</div>
									        <div>
											<div className ="resp-box">
												<span><img src={A_04} alt=""/></span>
												<h6>Android Tablet</h6>
												 <p>The android mobile applications we create are customizable and packed with a modern framework that doesn't compromise on features when running on an android tablet.  </p>

											</div>
											</div>
							

				

					</Slider>: <Row className="align-items-center">
						<Col md={6}>
							     <div className="response-main">
							
								
									<ul className="responsive-list  mb-5">
										<li>
											<div className ="resp-box">
												<span><img src={A_01} alt=""/></span>
												<h6>Android Phone</h6>
												 <p>The native android mobile application we do works exceptionally well on Android smartphones without causing any interference in user interface and functionality</p>

											</div>
										</li>
										
										<li>
											<div className ="resp-box">
												<span><img src={A_02} alt=""/></span>
												<h6>Android Wear</h6>
												 <p>Every android mobile application we develop adjusts effortlessly on Android wearables. Our apps have the power to adapt to different platforms without compromising their visuals. </p>

											</div>
										</li>

									</ul>
									<ul className="responsive-list ">
										
										<li>
											<div className ="resp-box">
												<span><img src={A_03} alt=""/></span>
												<h6>Android TV</h6>
												 <p>Our developers create captivating android mobile applications that flawlessly adjust to the big screens of android smart TV. </p>

											</div>
										</li>
										<li>
											<div className ="resp-box">
												<span><img src={A_04} alt=""/></span>
												<h6>Android Tablet</h6>
												 <p>The android mobile applications we create are customizable and packed with a modern framework that doesn't compromise on features when running on an android tablet.  </p>

											</div>
										</li>

									</ul>
									</div>
						
							
						</Col>
						<Col md={6}>
				          <div className="resp-content">
							  <h4>Taking Your App</h4>
							  <h2><span>I</span>Dea To all the platforms</h2>
							   <p>
							   At Invictus Studio, we create android applications that are business-centric, innovative, seamless, and visually appealing. Our team of professional developers harnesses their abilities to present android mobile apps that offer you and your unlimited customer possibilities. We provide bespoke android app solutions that are available on several android platforms. Our team works with dedication around the clock to fully customize and construct android mobile apps that ensure to generate significant ROI for your brand. Our android apps are backed by native software technologies and are integrated with the latest trends.
We provide end-to-end and full-cycle android applications that seamlessly work for all android platforms, including smartphones, smart TV, smartwatch, and tablet. At Invictus Studio, we are constantly experimenting and developing something innovative by blending in exclusive technologies to offer an elegant and functional application. 

							   </p>
							   <div className="bann-btn">
									<a href={()=>false} onClick={popOpen} > Get a Quote <i class="far fa-chevron-right"></i></a>


								</div>

						  </div>
						</Col>

					</Row> }
					
				</Container>
			</section>
			<section className="build-app">
				<Container>
					<Row>
						<Col  md={12}>
						 <div className="build-app-content">
							 <h4>WE DO NOT JUST BUILD APPS</h4>
							 <h2>WE CRAFT TOP-NOTCH MOBILE Apps</h2>
							 <p>Invictus Studio is the industry's leading provider of android mobile application development services. We have successfully developed top-tier android applications across numerous industry verticals. Contact and team and learn how our android mobile app services can help your brand develop better mobile relationships with your customers. </p>
							 <div className="bann-btn">
									<a href={()=>false} onClick={popOpen} > Get a Quote <i class="far fa-chevron-right"></i></a>


								</div>
						 </div>

						</Col>
					</Row>
				</Container>

			</section>
			<section className="experience-mobile">
				<Container >
					<Row>
						<Col md={7}>
						   <div className="exp-content">
							   <h2><span>E</span>xperience the future of mobile technology</h2>
							    <p>
								Android mobile application development services are a great way to transform your local brand into an international brand. Invictus Studio offers android mobile apps that are powerful, intelligent, and feature-rich. The applications our developers create are user-friendly on various android platforms. At Invictus Studio, we provide you with bespoke android app services that we customize according to your business's needs and requirements. Our skillful developers build scalable, productive, efficient, and robust mobile applications that help maximize your business efficiency while minimizing your overall costs. Using all the latest technologies and algorithms, we present you with android apps that perform and help you achieve your business goals. 
We guarantee that our team of skillful android mobile application developers will leave no stones unturned to produce top-class business applications. At Invictus Studio, we present you with unique, elegant, and innovative applications to ensure that the end-user will have an immersive mobile experience. Our apps also enlist solutions for data protection while providing a trouble-free end-user experience. We also offer you seamless migration and upgrading services. 
Partner with us and experience the future that android mobile applications hold. 

								</p>

						   </div>
						</Col>
						<Col md={5}>
						   <div className="exp-img">
							   {/* <img src={Build_Right}/> */}

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
												    <p>We provide you full-cycle development and efficient android mobile application services that include designing, developing, and deploying mobile products that build a strong brand presence and identity. We make sure that our client business ranks top among their target audiences. </p>

												   
											   </div>

									   </div>
								   </li>
								   <li>
									   <div className="skill-box">
										   	<img src={sk02} />
											   <h4 className="text-center">User Experience</h4>
											   <div className="skill-overlay">
												   
												   <h5>User Experience</h5>
												    <p>Our developers make sure to use user experience that leaves the end-user satisfied and asking for more. We completely understand that our UX developers play a crucial role in building impactful android applications. </p>

												   
											   </div>

									   </div>
								   </li>
								   <li>
									   <div className="skill-box">
										   	<img src={sk03} />
											   <h4 className="text-center">User Interface</h4>
											   <div className="skill-overlay">
												   
												   <h5>User Interface</h5>
												    <p>Our developers incorporate engaging and visually appealing UI designs that include interactive elements to keep the end-user engaged in reaching our client's business goals</p>

												   
											   </div>

									   </div>
								   </li>
								   <li>
									   <div className="skill-box">
										   	<img src={sk04} />
											   <h4 className="text-center">Target Market</h4>
											   <div className="skill-overlay">
												   
												   <h5>Target Market</h5>
												    <p>We understand the complexity of developing android applications that target a specific market. Therefore, our team is constantly working together to create innovatively tailored and promising mobile applications for our clients that work on different platforms.</p>

												   
											   </div>

									   </div>
								   </li>
							   </ul>
						  </div>

						</Col>
					</Row>
				</Container>
			</section>
			<section className="our-work-and">
				<Container fluid>
					<Row>
						<Col md={12} style={{    paddingLeft: "0"}}>
							<div className="and-content">
							 <h4>Our Work</h4>
							 <h2><span>A</span>ndroid Portfolio </h2>
							</div>
							<Slider {...settings} className = "mbleSlider">
                              {mbileList.map((mbile,index)=>{
								  return(
                                <div className="mbile-parent" key={index}>
									<div className="mbile-box">
										<img src={mbile}/>
									</div>
								</div>)
							  })}
							</Slider>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="technology-box">
				<Container fluid>
					<Row>
						<Col md={12} className="p-0">
							<div className="tech-detail">
								<div className="tech-img">
									<img src={half_bg} alt="" />
								</div>
								<div className="tech-content">
							    	<h4>Technologies used</h4>
							       <h2><span>I</span>N Android Apps</h2>

								</div>
							</div>
							<ul className="lang-list">
								<li>
									<div className="lang-box">
										<img src={lang1}/>
										 <p>Java</p>
										 
									</div>
								</li>
								<li>
									<div className="lang-box">
										<img src={lang2}/>
										<p>Kotlin</p>

										 
									</div>
								</li>
								<li>
									<div className="lang-box">
										<img src={lang3}/>
										<p>Android Studio</p>
										 
									</div>
								</li>
								<li>
									<div className="lang-box">
										<img src={lang4}/>
										<p>Neat Beans</p>

										 
									</div>
								</li>
								<li>
									<div className="lang-box">
										<img src={lang5}/>
										<p>SQ Lite</p>

										 
									</div>
								</li>
								<li>
									<div className="lang-box">
										<img src={lang6}/>
										<p>RealmDB</p>

										 
									</div>
								</li>
								<li>
									<div className="lang-box">
										<img src={lang7}/>
										<p>Android NDK</p>

										 
									</div>
								</li>
								<li>
									<div className="lang-box">
										<img src={lang8}/>
										<p>Android SDK</p>

										 
									</div>
								</li>
								
								
							</ul>
						
						</Col>
					</Row>
				</Container>
			</section>
			<section className="android-app">
				<Container >
					<Row>
						<Col md={12}>
							<div className="app-content">
								<h4>ANDROID APP</h4>
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
			<section className = "app_dev">
				<Container>
                    <Row>
						<Col md={3} sm={12} xs={12} lg={3} xl={3}>
							<div className="app-img">
								<img src={app_dev_left} alt="" />
							</div>
						
						</Col>
						<Col md={9} sm={12} xs={12} lg={9} xl={9}>
							<div className="appDev-content">
								<h4>Android App</h4>
								<h2>Development Service</h2>
								


							</div>
							<ul className="dev_list">
									<li>
										<div className="dev-box">
											<Row>
											<Col md={4} sm={12} xs={12} lg={4} xl={4}>	
											<span>
												<img src={dev_01} alt="" />
											</span>
											
											</Col>
											<Col md={8} sm={12} xs={12} lg={8} xl={8}>
											<div>		
											<h5>Custom App Development</h5>
											<p>We offer you android mobile application development services through all the latest technologies and market trends. </p>
											</div>
											</Col>
											</Row>
										</div>
										
									</li>
									<li>
										<div className="dev-box">
										<Row>
											<Col md={4}>	
											<span>
												<img src={dev_02} alt="" />
											</span>
											
											</Col>
											<Col md={8}>
											<div>		
											<h5>Web – Apps For Android</h5>
											<p>Our team of skillful mobile developers offers engaging, feature-packed, and visually appealing digital apps that optimize business performances</p>
											</div>
											</Col>
											</Row>
										</div>
									</li>
									<li>
										<div className="dev-box">
										<Row>
											<Col md={4}>	
											<span>
												<img src={dev_03} alt="" />
											</span>
											
											</Col>
											<Col md={8}>
											<div>		
											<h5>UI & UX Design For Android</h5>
											<p>We proudly offer aesthetically pleasing android mobile applications with unrivaled templates to our clients. Our developers use modern techniques and algorithms to build an interactive user interface to provide a seamless user experience</p>
											</div>
											</Col>
											</Row>
										</div>
									</li>
									<li>
										<div className="dev-box">
										<Row>
											<Col md={4}>	
											<span>
												<img src={dev_04} alt="" />
											</span>
											
											</Col>
											<Col md={8}>
											<div>		
											<h5>Android App Testing</h5>
											<p>We make sure to run regular and rigorous tests to ensure that the applications are free from any bugs or problems.  </p>
											</div>
											</Col>
											</Row>
										</div>
									</li>
								</ul>
						
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
export default Android