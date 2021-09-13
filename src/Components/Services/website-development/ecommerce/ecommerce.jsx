import "./ecommerce.css"
import { Container,Row,Col } from "react-bootstrap"
import bannerBg from "../../../../Assets/images/services/website-development/e-commerce/banner/bg-banner.jpg"
import BannerImg from "../../../../Assets/images/services/website-development/e-commerce/banner/banner-img.png"
import solutionL01 from "../../../../Assets/images/services/website-development/e-commerce/solutions/01.png"
import solutionL02 from "../../../../Assets/images/services/website-development/e-commerce/solutions/02.png"
import solutionL03 from "../../../../Assets/images/services/website-development/e-commerce/solutions/03.png"
import Inspiring from "../cms/inspiring"
import InspImg from "../../../../Assets/images/services/website-development/e-commerce/what-we-do/img-left.png"
import OurWork from "../../digital-marketing/our-work"
import OurProcess from "../b2b/our-process"
import WantBusiness from "../b2b/wantBusiness"
import Ftrform from "../../../Home/Form/Form"
import ClientTestimonaials from "../../video-animation/clientTestimonail"
import IndWorks from "../b2b/IndWorks"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SlideImg from "../../../../Assets/images/services-slider-img.png"
import feat_01 from "../../../../Assets/images/services/website-development/e-commerce/feature/01.png"
import feat_02 from "../../../../Assets/images/services/website-development/e-commerce/feature/02.png"
import feat_03 from "../../../../Assets/images/services/website-development/e-commerce/feature/03.png"
import feat_04 from "../../../../Assets/images/services/website-development/e-commerce/feature/04.png"
import { useEffect,useState } from "react"
import Preloader from "../../../Preloader/preloader"
import  tab01 from "../../../../Assets/images/services/website-development/cms/tabs/01.png"
import  tab02 from "../../../../Assets/images/services/website-development/cms/tabs/02.png"
import  tab03 from "../../../../Assets/images/services/website-development/cms/tabs/03.png"
import SocialIcons from "../../../Home/Social-Icons/Social-icons"
import {Helmet} from "react-helmet";


import featuredBanner from "../../../../Assets/images/services/website-development/e-commerce/feature/banner.jpg"
const Ecommerce = ()=>{
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
	const inspiringDetail = {
        title:`What We Do`,
        gradWork: `W`,
        mainHeading: `ebsite Branding
		Services in USA`,
        detail: `The branding of your ecommerce site can make or break your brand's online conversions and impact revenues. An eCommerce brand's website includes multiple layers of functionality that conventional sites do not have, such as a webserver to host a shop, payment processing, an inventory database, and a complex dispatch system used to ship items. Invictus Studio helps you and your business stand out from the crowd. From designing company-centric logos to developing smartphone apps, landing page web designs, websites, email marketing, infographics, promotional videos, to brochure designs, we do it all. At Invictus Studio, our team provides you with robust plans to transform your small business into a world-class brand. `,
    anchorText: `Get a Quote`}
	return(
		<div className = "Ecommerce">
            <Helmet>
            <meta name="description" content="Manage your business with our simplified and convenient e-commerce solutions."/>
            <title>E-commerce Solutions | Invictus Studio</title>
            </Helmet>
            {load ? <Preloader/> : null }
             <SocialIcons/>
             <section className="main-Banner" style={{background: `url(${bannerBg})`}}>
				<Container>
                   <Row>
					   <Col md={5} sm={5} lg={5} xl={5} xs={5} >
						   <div className="banner-content" >
						   <h1 >Web Design & Development</h1>
							<h3 >(Ecommerce)</h3>
						        
						   </div>
					   
					   </Col>
					   <Col md={7} sm={7} lg={7} xl={7} xs={7}>
						   <div className="banner-img">
                              <img src={BannerImg} alt="" loading="lazy" />

						   </div>
					   
					   </Col>
				   </Row>
				</Container>

			</section>
			<section className = "our-solution">
				<Container>
                   <Row className = "align-items-center">
                     <Col md={12}>
						 <div className="solution-content">
							<h4>Our Solution</h4> 
							<h2><span>A</span>mplify Your Brand’s <br /> Digital Presence</h2>
						 </div>
						 <ul className="solutions-list">
							 <li>
								 <div className="solution-box">
									 <span><img src={solutionL01} loading="lazy"/></span>
									 <h4>User Experience</h4>
									  <p>Enhance your ecommerce platforms by offering engaging client-focused, interactive, innovative, and graphically pleasing user interfaces to your visitors.   </p>
								 </div>
							 </li>
							 <li>
								 <div className="solution-box">
									 <span><img src={solutionL02} loading="lazy"/></span>
									 <h4>Digital Rebranding</h4>
									  <p>Develop customer-focused digital brand strategies to engage your audiences, improve your website performance, and build an unforgettable brand identity.  </p>
								 </div>
							 </li>
							 <li>
								 <div className="solution-box">
									 <span><img src={solutionL03} loading="lazy"/></span>
									 <h4>Rate Optimization</h4>
									  <p>Improve your ecommerce site’s conversion rate to drive your business growth and revenue up, and convert your leads into your customers.   </p>
								 </div>
							 </li>
						 </ul>
					 </Col>          
				   </Row>
				</Container>
			</section>
			<Inspiring img={InspImg} alldetail={inspiringDetail}/>
			<section className="featured" style={{background: `url(${featuredBanner})`}}>
               <Container>
				   <Row className ="align-items-center">
					   <Col md={4}>
						   <div className ='featured-content'>
							   <h4>Features Used In</h4>
							   <h2>Ecommerce Websites</h2>
							    <p>
								With the growing popularity of eCommerce websites, there are several features that an online ecommerce store should incorporate. An online store's web features significantly influence consumer experience and decision-making at various stages of their purchasing journey. Therefore, we only use selected and most valuable features for your brand's site. 
Invictus Studio takes immense pride in mentioning that we only use the best ecommerce platform designs and development solutions to make your platform stand out. 
								</p>

						   </div>
					   </Col>
					   <Col md={8}>
                           <div className="featured-right">
                               <ul className="featured-list">
                                   <li>
                                       <div className="featured-box">
                                           <span><img src={feat_01} /></span>
                                           <div className="f-boxContent">
                                               <h5>HTMLS Web Design & Development </h5>
                                                <p> Incorporating HTML web designs and development processes will make your eCommerce platform the most satisfying user experience. It will make your site adaptable, manageable, and secure to your visitors. </p>
                                           </div>
                                       </div>
                                   </li>
                                   <li>
                                       <div className="featured-box">
                                           <span><img src={feat_02} /></span>
                                           <div className="f-boxContent">
                                               <h5>Wordpress Design & Development</h5>
                                                <p>Using the latest WordPress web designs and development solutions, we create potent interfaces along with the best end-to-end platforms. </p>
                                           </div>
                                       </div>
                                   </li>
                                   <li>
                                       <div className="featured-box">
                                           <span><img src={feat_03} /></span>
                                           <div className="f-boxContent">
                                               <h5>Enterprise Web Development Services</h5>
                                                <p>Opting for enterprise web development solutions will ensure a high-functional, visually pleasing, and engaging eCommerce platform for your customers. </p>
                                           </div>
                                       </div>
                                   </li>
                                   <li>
                                       <div className="featured-box">
                                           <span><img src={feat_04} /></span>
                                           <div className="f-boxContent">
                                               <h5>Laravel Web Development Solutions</h5>
                                                <p>Integrating open-source Laravel web development services will help you design custom web solutions resulting in impeccable site performance. </p>
                                           </div>
                                       </div>
                                   </li>
                               </ul>
                           </div>
					   </Col>

				   </Row>
			   </Container>
			</section>
			<section className="home-our-services">
        <Container className="container">
			<Row>
			 <Col md={12}>
            <div className="head-desc">
                <h3>
                    Ecommerce Website
                </h3>
                <h2>
                    <span>P</span>latforms we work on
                </h2>
            </div>
			</Col>
			</Row>
			<Tabs>
            <div className="tabs-container">
                <Row>
					
				
                    <Col md={11}>
					
                        <div className="tabs-wrapper">
						<TabPanel>
                            <div className="tab-box" >
                                <Row >
                                    
                                    <Col md={7}>
                                        <div className="img-wrapper">
                                            <img src={SlideImg} alt=""/>
                                        </div>
                                    </Col>
									<Col md={5}>
                                        <div className="desc-box">
                                            <h3>
                                            MAGENTO 
                                                <span>
                                                DEVELOPMENT
                                                </span>
                                            </h3>
                                            <p>
                                            Invictus Studio offers you custom-built Magento eCommerce websites for your business. We create scalable, adaptable, and feature-rich websites employing cutting-edge digital tools. Our team holds all the essential abilities to form engaging, interactive, and aesthetically pleasing websites according to your brand. We not only offer you feature-rich yet easy-to-navigate web pages. We also offer a massive selection of Magento extensions that are beneficial to your Magento eCommerce shops, such as Magento2, Magento 2 Dropship extension, Apple Pay Payfort, and Magento 2 scraper extension
                                            </p>
                                            <p>
                                            At Invictus Studio, we aim to improve your site by adding highlights based on your requirements. 
                                            </p>
                                            <div className="cta-box">
                                                <a href="#">View Portfolio <i className="fas fa-chevron-right"></i></a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
							</TabPanel>
							<TabPanel>
                            <div className="tab-box" data-tab="mobile-app">
                                <Row>

                                    <Col md={7}>
                                        <div className="img-wrapper">
                                            <img src={tab02} alt=""/>
                                        </div>
                                    </Col>
									<Col md={5}>
                                        <div className="desc-box">
                                            <h3>
                                            WOOCOMMERCE 
                                                <span>
                                                DEVELOPMENT  
                                                </span>
                                            </h3>
                                            <p>
                                            We are fully aware of the potential WooCommerce platform here at Invictus Studio. Therefore, we have a specialized team that can create powerful and responsive eCommerce websites with WooCommerce plugin for your business. We tailor your business platforms according to your specifications, business requirements, goals, and target audience. At Invictus Studio, we are continually growing, learning, and designing new WooCommerce modules to guarantee that the end-user experience in our client's stores is exceptional
                                            </p>
                                            <p>
                                            Our offered WooCommerce development services ensure companies and organizations a powerful online marketplace with unique and powerful features. We guarantee to build and develop cutting-edge apps with an intuitive design and a beautiful appearance for your online business.
                                            </p>
                                            <div className="cta-box">
                                                <a href="#">View Portfolio <i className="fas fa-chevron-right"></i></a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
							</TabPanel>
							<TabPanel>
                            <div className="tab-box" data-tab="digital-marketing">
                                <Row >
                                    
                                    <Col md={7}>
                                        <div className="img-wrapper">
                                            <img src={tab03} alt=""/>
                                        </div>
                                    </Col>
									<Col md={5}>
                                        <div className="desc-box">
                                            <h3>
                                            OPENCART
                                                <span>
                                                DEVELOPMENT
                                                </span>
                                            </h3>
                                            <p>
                                            Invictus Studio helps you create feature-rich eCommerce stores that are scalable, robust, and user-friendly. Quality integration of OpenCart will let your end users have various product categories to search from. We operate across multiple industry verticals and serve the requirements of big, mid-sized, and small businesses. The OpenCart eCommerce solutions we build help enterprises take their stores to new heights. Our developers waste no time integrating robust OpenCart eCommerce solutions for brands.
                                            </p>
                                            <p>
                                            Optimizing OpenCart development solutions help you gain a solid spot in the global market for the specific industry. The ability to handle a massive amount of data without slowing or pausing is one of the top features OpenCart offers to its users. At Invictus Studio, we make sure to provide superior eCommerce store development services. The user-centric approach that we have helps us in developing globally recognized websites. 
                                            </p>
                                            <div className="cta-box">
                                                <a href="#">View Portfolio <i className="fas fa-chevron-right"></i></a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
							</TabPanel>
							<TabPanel>
                            <div className="tab-box" data-tab="video-animation">
                                  <Row>
                                    
                                    <Col md={7}>
                                        <div className="img-wrapper">
                                            <img src={tab03} alt=""/>
                                        </div>
                                    </Col>
									<Col md={5}>
                                        <div className="desc-box">
                                            <h3>
                                            SHOPPING CART 
                                                <span>
                                                DEVELOPMENT
                                                </span>
                                            </h3>
                                            <p>
                                            Shopping Cart Development is the most efficient and cost-effective approach to grow your business using an online platform. Integrating Shopping cart development solutions helps you in evaluating your ROI. Another significant benefit of using a Shopping Cart is that your business will be available 24 hours a day to your customers. At Invictus Studio, we offer cost-effective and engaging shopping cart development solutions through which you can connect with your target audience and improve your sales. Our professional shopping cart team develops cutting-edge shopping carts by utilizing their superior programming skills in PHP and ASP.Net.
                                            At Invictus Studio, we combine all online shopping elements into a single shopping cart solution, assuring increased customer conversion rates, lead generation, revenue growth, and customer engagement.

                                            </p>
                                            
                                            <div className="cta-box">
                                                <a href="#">View Portfolio <i className="fas fa-chevron-right"></i></a>
                                            </div>
                                        </div>
                                    </Col>
								</Row>
                            </div>
							</TabPanel>
                        </div>
                    </Col>
					<Col md={1}>
                    
                        <div className="tabs-menu">
                            <TabList>
                                <Tab>
                                    <a href="javascript:;">Magento </a>
                                </Tab>
                                <Tab>
                                    <a href="javascript:;" >Woo-Commerce </a>
                                </Tab>
                                <Tab>
                                    <a href="javascript:;" >Open Cart</a>
                                </Tab>
                                <Tab>
                                    <a href="javascript:;">Shopping Cart</a>
                                </Tab>
                            </TabList>
                        </div>
                  
					</Col>
                </Row>
            </div>
			</Tabs>
	
		
        </Container>
    </section>
			<OurWork/>
			<OurProcess/>
			<WantBusiness webName="e-commerce" />
			<IndWorks/>
			<ClientTestimonaials/>
			<Ftrform/>
		</div>
	)
}
export default Ecommerce