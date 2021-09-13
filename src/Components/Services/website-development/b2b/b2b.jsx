import "./b2b.css"
import bannerBg from "../../../../Assets/images/services/website-development/b2b/banner/bg-banner.jpg"
import { Container,Row,Col } from "react-bootstrap"
import BannerImg from "../../../../Assets/images/services/website-development/b2b/banner/bg-img.png"
import devLeft from "../../../../Assets/images/services/website-development/b2b/design-dev/left-bg.png"
import designBg from "../../../../Assets/images/services/website-development/b2b/design-dev/design-bg.jpg"
import expList from "../../../../Assets/images/services/website-development/b2b/expertise/01.png"
import OurWork from "../../digital-marketing/our-work.jsx"
import WantBusiness from "./wantBusiness"
import Ftrform from "../../../Home/Form/Form"
import ClientTestimonaials from "../../video-animation/clientTestimonail"

import OurProcess  from "./our-process"
import IndWorks from "./IndWorks"
import {useEffect,useContext,useState} from "react"
import { MainContext } from "../../../Context/GlobalState"
import Preloader from "../../../Preloader/preloader"
import SocialIcons from "../../../Home/Social-Icons/Social-icons"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {Helmet} from "react-helmet";








const B2B = ()=>{
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

return(
	<div className="B2B">
		  <Helmet>
            <meta name="description" content="Building revenue generating gateways for small to big businesses."/>
            <title>B2B & B2C Portals | Invictus Studio</title>
            </Helmet>
            {load ? <Preloader/> : null }

         <SocialIcons/>
		<section className="main-Banner" style={{background: `url(${bannerBg})`}}>
				<Container>
                   <Row>
					   <Col md={5} xl={5} lg={5} sm={6} xs={6}>
						   <div className="banner-content" >
						   <h1 >Web Design & Development</h1>
							<h3 >(B2B website)</h3>
						        
						   </div>
					   
					   </Col>
					   <Col md={7} lg={7} xl={7} sm={6} xs={6}>
						   <div className="banner-img">
                              <LazyLoadImage src={BannerImg} effect="blur" />

						   </div>
					   
					   </Col>
				   </Row>
				</Container>

			</section>
			<section className="design-development" style={{background:`url(${designBg})`}}>
				<Container>
					<div className="design-dev-card">
					<Row>
						<Col md={5}>
							<div className="dev-img">
								<LazyLoadImage src={devLeft} effect="blur" />
							</div>

						</Col>
						<Col md={7}>
							<div className="dev-content">
								<h4>What is</h4>
								<h2><span>B</span>2b website design & Development </h2>
								<p>There have been some eye-opening innovations in B2B purchase decisions in recent years. A B2B website design and development is the process of developing web page layouts in such a way that they can sell products and services. An effective B2B website design necessitates a thorough grasp of the visitor journey and how users engage with a website. A captivating B2B design can also assist in nurturing a lead from a basic inquire to a particular opportunity leading to genuine collaboration. It not only allows users to browse your site easily and quickly finding information with the minimum amount of clicks but it also encourages website visitors into potential leads.</p>
                                <div className="bann-btn">
									<a href={()=>false} onClick={popOpen} > Get a Quote <i class="far fa-chevron-right"></i></a>


								</div>

							</div>
						</Col>
					</Row>
					</div>
				</Container>
			</section>
			<section className="expertise">
				<Container>
					<Row>
						<Col md={12}>
							<div className="expertise-content">
								<h4>We’ve Expertise In</h4>
								<h2><span>B</span>2b Website Design & <br/>Development</h2>
								<p>Invictus Studio takes pleasure in delivering elegant, responsive, and engaging web development solutions that integrate all of its target market's necessities. We ensure that our client's website has all of the features it requires to be an effective marketing platform for their organization through our provided services.</p>
							</div>
							<ul className="exp-list">
								<li>
									<div className="exp-box">
									<div className="exp-img">
									<span>
										<img src={expList} alt="" />
										</span>	
										</div>
										<h6>Strategise & Plan</h6>
										 <p>We conduct in-depth research on your business or organization to start with our initial plan and create strategies for future designs. </p>
									</div>
								</li>
								<li>
									<div className="exp-box">
									<div className="exp-img">
									<span>
										<img src={expList} alt="" />
										</span>	
										</div>
										<h6>Create & Design</h6>
										 <p>After proper planning and strategizing, we plan and design modern, unique, and appealing website designs for your B2B business.</p>
									</div>
								</li>
								<li>
									<div className="exp-box">
									<div className="exp-img">
									<span>
										<img src={expList} alt="" />
										</span>	
										</div>
										<h6>Connect & Engage</h6>
										 <p>Using our interactive and alluring B2B website design, we will connect and engage with your potential customers</p>
									</div>
								</li>
								<li>
									<div className="exp-box">
									<div className="exp-img">
									<span>
										<img src={expList} alt="" />
										</span>	
										</div>
										<h6>Activate & Optimise</h6>
										 <p>Our team activates the design and development changes on your B2B website to optimize it for future leads.</p>
									</div>
								</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</section>
			<OurProcess/>

			<OurWork/>
			<WantBusiness webName="b2b"/>
			<IndWorks/>
			
		
		

			<ClientTestimonaials/>
			<Ftrform/>



	</div>
)

}
export default B2B 