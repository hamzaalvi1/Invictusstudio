import { useEffect,useState,useRef} from "react"
import "./video-animation.css"
import Aos from "aos"
import "aos/dist/aos.css"
import { Container,Col,Row } from "react-bootstrap"
import bannerBg from "../../../Assets/images/services/video-animation/banner/banner.png"
import Rocket from "../../../Assets/images/services/video-animation/reference/rocket.png"
import WhyBg from "../../../Assets/images/services/video-animation/why-us/bg.png"
import Icon1 from "../../../Assets/images/services/video-animation/why-us/icons/01.png"
import Icon2 from "../../../Assets/images/services/video-animation/why-us/icons/02.png"
import Icon3 from "../../../Assets/images/services/video-animation/why-us/icons/03.png"
import Icon4 from "../../../Assets/images/services/video-animation/why-us/icons/04.png"
import Icon5 from "../../../Assets/images/services/video-animation/why-us/icons/05.png"
import Icon6 from "../../../Assets/images/services/video-animation/why-us/icons/06.png"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import _2D from "../../../Assets/images/services/video-animation/service-anime/2d.png"
import HowBg from "../../../Assets/images/services/video-animation/how-it-works/bg.png"
import FtrForm from "../../Home/Form/Form"
import SocialIcons from "../../Home/Social-Icons/Social-icons"
import ClientTestimonials from "./clientTestimonail.jsx"
import Slider from "react-slick"
import useMediaQuery from "../../Utils/windowSize"
import {MainContext} from "../../Context/GlobalState"
import { useContext } from "react"
import Preloader from "../../../Components/Preloader/preloader"
import tabIMG03 from "../../../Assets/images/services/video-animation/service-anime/04.png"
import tabIMG02 from "../../../Assets/images/services/video-animation/service-anime/02.jpg"
import tabIMG04 from "../../../Assets/images/services/video-animation/service-anime/03.gif"
import Vd1 from "../../../Assets/images/portfolio/tabs/2d/v1.png"
import Vd2 from "../../../Assets/images/portfolio/tabs/2d/v2.png"
import Vd3 from "../../../Assets/images/portfolio/tabs/2d/v3.png"
import Vd4 from "../../../Assets/images/portfolio/tabs/2d/v4.png"
import Vd5 from "../../../Assets/images/portfolio/tabs/2d/v5.png"
import Vd6 from "../../../Assets/images/portfolio/tabs/2d/v6.png"
import Vd7 from "../../../Assets/images/portfolio/tabs/2d/v7.png"
import Vd8 from "../../../Assets/images/portfolio/tabs/2d/v8.png"
import Vd9 from "../../../Assets/images/portfolio/tabs/2d/v9.png"
import Vd10 from "../../../Assets/images/portfolio/tabs/2d/v10.png"
import Vd11 from "../../../Assets/images/portfolio/tabs/2d/v11.png"
import Vd12 from "../../../Assets/images/portfolio/tabs/2d/v12.png"
import Vd13 from "../../../Assets/images/portfolio/tabs/2d/v13.png"
import Vd14 from "../../../Assets/images/portfolio/tabs/2d/v14.png"
import Vd15 from "../../../Assets/images/portfolio/tabs/2d/v15.png"
import Vd16 from "../../../Assets/images/portfolio/tabs/2d/v16.png"
import Vd17 from "../../../Assets/images/portfolio/tabs/2d/v17.png"
import Vd18 from "../../../Assets/images/portfolio/tabs/2d/v18.png"
import Vd19 from "../../../Assets/images/portfolio/tabs/2d/v19.png"
import Vd20 from "../../../Assets/images/portfolio/tabs/2d/v20.png"
import Vd21 from "../../../Assets/images/portfolio/tabs/2d/v21.png"
import Vd22 from "../../../Assets/images/portfolio/tabs/2d/v22.png"
import Vd23 from "../../../Assets/images/portfolio/tabs/2d/v23.png"
import Vd24 from "../../../Assets/images/portfolio/tabs/2d/v24.png"
import Vd25 from "../../../Assets/images/portfolio/tabs/2d/v25.png"
import Vd26 from "../../../Assets/images/portfolio/tabs/2d/v26.png"
import 'react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {Helmet} from "react-helmet";




const VideoAnimation = ()=>{
	const showRef = useRef(null)
	const [visible, setVisible] = useState(6)
	const showMore = (index)=>{
		setVisible((prevVal)=> prevVal + 6)
		if(index >= 21) {
			showRef.current.style.display = "none"   
		}
		console.log(index)

	}
 const VideoImg = [
	{imageURL:Vd1,videoURL:"Y7vvP4HRubY"},
 {imageURL:Vd2,videoURL:"rXScxmBxlcA"},
 {imageURL:Vd3,videoURL:"wgic44kezPo"},
 {imageURL:Vd4,videoURL:"1KrijYvQsfo"},
 {imageURL:Vd5,videoURL:"dZsd0kka078"},
 {imageURL:Vd6,videoURL:"w7Tpz1ouuc4"},
 {imageURL:Vd7,videoURL:"cA4Ur0zTKQM"},
 {imageURL:Vd8,videoURL:"XIWwKShBzxM"},
 {imageURL:Vd9,videoURL:"00jv2uifNlU"},
 {imageURL:Vd10,videoURL:"eaFyiXBOBA0"},
 {imageURL:Vd11,videoURL:"bDnXl9ROjb0"},
 {imageURL:Vd12,videoURL:"ncXluOIKaD4"},
 {imageURL:Vd13,videoURL:"Br7AuoFowmU"},
 {imageURL:Vd14,videoURL:"E2mJtw5pkMA"}, 
 {imageURL:Vd15,videoURL:"Tyj_VlR72Ss"},
 {imageURL:Vd16,videoURL:"bej12WADq5Q"},
 {imageURL:Vd17,videoURL:"5sYsn_vgE6I"},
 {imageURL:Vd18,videoURL:"rsrAodxcwOE"},
 {imageURL:Vd19,videoURL:"XvRcXFmJVrc"},
 {imageURL:Vd20,videoURL:"yghRZ9yFGpM"},
 {imageURL:Vd21,videoURL:"RPFaZPlKURk"},
 {imageURL:Vd22,videoURL:"Qlcqc1acySc"},
 {imageURL:Vd23,videoURL:"ZRbOC3MS1Lg"},
 {imageURL:Vd24,videoURL:"xINJMtd14hg"},
 {imageURL:Vd25,videoURL:"5049zRLL2Z0"},
 {imageURL:Vd26,videoURL:"UzRsGpUO8NQ"},
 ]
	const countryData = useContext(MainContext)
	const {popOpen} = countryData
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
	const responsiveSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		arrows:false,
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

	}

	const whyuslist = [{imgURL:Icon1,title:"We are experienced",details:"We have years of industry-relevant experience in designing and developing notice-worthy videos."},
	{imgURL:Icon2,title:"We are friendly",details:"Our client assistance crew is forever ready to assist you with the best of our services. "},
	{imgURL:Icon3,title:"We are innovative",details:"We only integrate and use unique, innovative solutions to create a video animation that helps you stand out."},
	{imgURL:Icon4,title:"We are flexible",details:"Our team works according to our client's needs and requirements of video and timeline."},
	{imgURL:Icon5,title:"We are transparent",details:"Our process is fair, just, and transparent with all our customers. We hide nothing from our clients and keep them up-to-date."},
	{imgURL:Icon6,title:"We are different",details:"We assure quality and make sure to provide audiences with immersive video experiences."},
	]
	const matches = useMediaQuery("(max-width: 824px)");

	const whyCheck = (
		<div className="why-check">
		 {matches  ?
			 <Slider {...responsiveSettings} className="responsive_Slider">
	 
			 {whyuslist.map((list,index)=>{
				 return(
						  <div className="why-parent" key={index}>
						 <div className="why-box">
						 <span className="why-img">
						 <img src={list.imgURL}/>
						 </span>
						 <div className="why-cc">
						 <h5>{list.title}</h5>
						 <p>{list.details}</p>
						</div>
					   </div>
					   </div>
			 
				 )
			 })}
		 
			 
				   
			 </Slider>:
			<ul className="why-us-list">
			 {whyuslist.map((list,index)=>{
				 return(
					 <li key={index} >
						 <div className="why-box">
						 <span className="why-img">
						 <img src={list.imgURL}/>
						 </span>
						 <div className="why-cc">
						 <h5>{list.title}</h5>
						 <p>{list.details}</p>
						</div>
					   </div>
					 </li>
				 )
			 })}
		 
			 
		 </ul> }
		 </div>
	 )

	useEffect(()=>{ 
		Aos.init({duration:1500})
	},[])

	const [isOpen, setIsOpen] = useState(false)
	const [photoIndex,setPhotoIndex]  = useState(0)
	const lightboxOpen = (index)=>{
		setIsOpen(true)
		setPhotoIndex(index)
	   }


	return(
		<div className="video-animation">
			 <Helmet>
            <meta name="description" content="We design interactive animated videos, which increase user engagement and provide better explanation of your business, products and services."/>
            <title>Video Animation Services | Invictus Studio</title>
            </Helmet>
            {load ? <Preloader/> : null }

			<SocialIcons/>
            <section className="banner" style={{background: `url(${bannerBg})`}}>
				<Container>
                   <Row>
					   <Col md={12} sm={12} xs={12} lg={12} xl={12}>
						   <div className="banner-content" >
							   <h3>Everyone’s Got A</h3>
							   <h1>EVERYONE HAS A STORY TO TELL, <br/> SO LET’S KEEP IT NOTEWORTHY</h1>
							   <p>Invictus Studio helps businesses present their story in an exciting and innovative way <br/> that no one can dare to miss.  We make brand stories memorable!</p>
						        <div className="bann-btn"data-aos="fade-right">
									<a href={()=>false} onClick = {()=>popOpen()}> Get Started <i class="far fa-chevron-right"></i></a>
									<a href={"javascript:;"}> Chat Now <i class="far fa-chevron-right"></i></a>


								</div>
						   </div>
					   
					   </Col>
				   </Row>
				</Container>

			</section>
			<section className="refernce">
              <Container>
				  <Row className="align-items-center">
					  <Col md={6} sm={12} xs={12} lg={6} xl={6}>
						  <div className="ref-img"> 
							  <img src={Rocket} />
						  </div>

					  </Col>
					  <Col md={6} sm={12} xs={12} lg={6} xl={6}>
						  <div className="ref-content"  > 
							  <p>
							  Video animations that are visually appealing guarantee to create a lasting impression on your audience! An animated film helps you present your organization, product, or service creatively and distinctively that other videos cannot. Videos let your business stand out or engage fast with the audience, and when it's animation, videos work like magic.

							  </p>
							
							  <p>
							  With the direction of animated videos, you can graphically convey abstract thoughts to your audience. This type of content is very beneficial for introducing new goods or technological procedures in a clear manner.
							  </p>

						  </div>
					  </Col>
				  </Row>
			  </Container>
			</section>
	
			<section class="why-us" style={{background:`url(${WhyBg})`}}>
				<Container>
					<Row className="align-items-center">
						<Col md={12} sm={12} xs={12} lg={12} xl={12}>
							<div className="why-us-content">
								<h2 >Why Us?</h2>
								 {whyCheck}
								

								
							</div>
						</Col>
					</Row>
				</Container>

			</section>

			<section className="animation-service">
				<Container>
					<Row>
						<Col md={12}>
						  <div className="anime-serv-content">
							  <h4>Expose Your Services Through Our</h4>
							  <h2>Proficient Animation Service</h2>

						  </div>
						  <div className="anime-tabs">
						  <Tabs>

							  <Row className="align-items-center">
							  <Col md={12}>
								 
							  <div className="anime-tabs-menu">

                               <TabList >
                                <Tab>
                                    <a href={()=>false} >2D Animation</a>
                                </Tab>
                                <Tab>
                                    <a href={()=>false} >3D Animation</a>
                                </Tab>
                                <Tab>
                                    <a href={()=>false} >Whiteboard Animation</a>
                                </Tab>
                                <Tab>
                                    <a href={()=>false} >Logo Animation</a>
                                </Tab>
                            </TabList>
                        </div>
							  </Col>
							  <TabPanel >
								 <Row className="align-items-center"> 
							   <Col md={5} xs={12} sm={12} lg={5} xl={5}>
								   <div className="tab-img">
								   <img src={_2D}/>
								   </div>

							   </Col>
							   <Col md={7} xs={12} sm={12} lg={7} xl={7}>
								   <div className="tab-content">
									   <h4>2D Animated Videos</h4>
									    <p>
										A 2D animation helps you properly communicate your brand's content in a simple way while positively affecting them. This allows people to grasp your creative concept. At Invictus Studio, our staff is at your service whether you want to lure a worldwide audience or improve your company performance. Our team of animators uses complex technologies to combine width and height into characters, pictures, and objects, giving them two dimensions.
										<br/>
										<br/>
                                        To stay ahead of the curve, keep in touch with our animation video team. We try to make great videos that can accurately reflect your brand, business, or group. We aim to produce immersive and attractive 2D animation with the utmost competence.</p>
								   </div>
							   </Col>
							   </Row>
							   </TabPanel>
							   <TabPanel >
								 <Row className="align-items-center">  
							   <Col md={5} xs={12} sm={12} lg={5} xl={5}>
								   <div className="tab-img">
								   <img src={tabIMG02}/>
								   </div>

							   </Col>
							   <Col md={7} xs={12} sm={12} lg={7} xl={7}>
								   <div className="tab-content">
									   <h4>3D Animated Videos</h4>
									    <p>
										Invictus Studio is a well-known 3D video creation company in the United States. We help startups, brands, and enterprises who want to communicate messages and their brand's story to a larger audience. Our team of multi-tasking professionals ensures 3D animation videos that are bound to capture audience attention.
										<br/>
										<br />
										We create 3D moving videos that adequately describe your brand's ongoing marketing campaign or plan. If you want to reach out to your audience with a 3D video, you've come to the perfect place.
										</p>
								   </div>
							   </Col>
							   </Row>
							   </TabPanel>
							   <TabPanel>
								 <Row className="align-items-center"> 
							   <Col  md={5} xs={12} sm={12} lg={5} xl={5}>
								   <div className="tab-img">
								   <img src={tabIMG03}/>
								   </div>

							   </Col>
							   <Col md={7} xs={12} sm={12} lg={7} xl={7}>
								   <div className="tab-content">
									   <h4>WhiteBoard Animation</h4>
									    <p>
										Whiteboard videos are ideal for instructional videos, educational guides, and linear narratives. Our team of experts creates whiteboard films that adequately communicate the idea you want to convey. We make a whiteboard video screenplay that can catch the target audience's attention after extensively researching the brand. From voice to visuals, every video element is synchronized according to the client's video requirements.
										<br/>
										<br />
								
										We take time to fully design, produce, and edit a whiteboard video and make it look and sound perfect. Our team also makes sure to add relevant background music to assist increase brand recognition.
										</p>
								   </div>
							   </Col>
							   </Row>
							   </TabPanel>
							   <TabPanel>
								 <Row className="align-items-center">  
							   <Col  md={5} xs={12} sm={12} lg={5} xl={5}>
								   <div className="tab-img">
								   <img src={tabIMG04}/>
								   </div>

							   </Col>
							   <Col md={7} xs={12} sm={12} lg={7} xl={7}>
								   <div className="tab-content">
									   <h4>LOGO ANIMATION</h4>
									    <p>
										The logo of your brand is the foundation image of every business. Your videos will be more dynamic with an animated logo. No matter how huge or small your firm is, a logo can either help it flourish or bring it to its knees. But with Invictus Studio on your side, you don't have to worry about anything. Our talented logo animators use fluid typography, 3D animation styles, and sound effects to create a quick yet memorable animated logo. We ensure that our developed logos improve brand memory and provide consistent branding throughout your marketing videos.
										<br/>
										<br />
							
										Whether you want to add animation, sound, or motion to your current logo or need an entirely new logo, we are here to assist you with exceptionally made animated logos
										</p>
								   </div>
							   </Col>
							   </Row>
							   </TabPanel>

							  </Row>
							  </Tabs>
							
						  </div>
						  
						</Col>
						
					</Row>
				</Container>
			</section>
			<section className="how-it-works" style={{background: `url(${HowBg})`}}>
				<Container>
					<Row>
						<Col md={12}>
							<div className="how-it-content">
                               <h2 ><span>Concerned About</span> How It Works?</h2> 
							    <p > Are you interested in learning how our team of creative thinkers and designers <br/> dives into the sea of creative video animation? Contact our team to  create your <br/> company a brand new animated movie or logo to help it succeed!</p>
								<div className="bann-btn" >
									<a href={()=>false} onClick = {()=>popOpen()}>  Get Started <i class="far fa-chevron-right"></i></a>
									<a href="javascript:;"> Chat Now <i class="far fa-chevron-right"></i></a>


								</div>
							</div>
						</Col>
						
					</Row>
				</Container>

			</section>
			<section className="packages">
				<Container>
					<Row>
						<Col md={12}>
							<div className="packages-content">
                                   <h2><span>Our Portfolio</span>For Your Business</h2>
								   <div className="pkges-imgs">
								   <Row>
									<ModalVideo channel='youtube' autoplay = "1" isOpen={isOpen} videoId={VideoImg[photoIndex].videoURL} onClose={() => setIsOpen(false)} />
									{VideoImg.slice(0,visible).map((video,index)=>{
									return(
										
										<Col md={4} key={index}>
										 <a className="pkg___img" href={()=>false}  onClick={()=>lightboxOpen(index) }>
                        				<LazyLoadImage  src={video.imageURL} alt="" />
                        				</a>
										</Col>
									
										)
			
			})}
				</Row>
			
								   </div>
								   <div className="bann-btn pkg-btn">
									<a href={()=>false}  onClick = {()=>showMore(visible)} ref={showRef}> Load More <i class="far fa-chevron-right"></i></a>


								</div>

							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<ClientTestimonials/>
			
			<FtrForm/>
			
		</div>
	)
}

export default VideoAnimation

