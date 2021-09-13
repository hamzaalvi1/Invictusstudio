import "./cms.css"
import { Container,Row,Col } from "react-bootstrap"
import bannerBg from "../../../../Assets/images/services/website-development/cms/banner/bg-banner.jpg"
import BannerImg from "../../../../Assets/images/services/website-development/cms/banner/banner-img.png"
import InspiringImg from "../../../../Assets/images/services/website-development/cms/inspiring/ins-left.png"

import Benefit_Banner from "../../../../Assets/images/services/website-development/cms/benefit-cms/bg-banner.png"
import benef01 from "../../../../Assets/images/services/website-development/cms/benefit-cms/list/01.png"
import benef02 from "../../../../Assets/images/services/website-development/cms/benefit-cms/list/02.png"
import benef03 from "../../../../Assets/images/services/website-development/cms/benefit-cms/list/03.png"
import benef04 from "../../../../Assets/images/services/website-development/cms/benefit-cms/list/04.png"
import benef05 from "../../../../Assets/images/services/website-development/cms/benefit-cms/list/05.png"
import benef06 from "../../../../Assets/images/services/website-development/cms/benefit-cms/list/06.png"
import SlideImg from "../../../../Assets/images/services-slider-img.png"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OurWork from "../../digital-marketing/our-work"
import OurProcess from "../b2b/our-process"
import WantBusiness from "../b2b/wantBusiness"
import Ftrform from "../../../Home/Form/Form"
import ClientTestimonaials from "../../video-animation/clientTestimonail"
import IndWorks from "../b2b/IndWorks"
import Inspiring from "./inspiring"
import { useEffect,useState} from "react"
import Preloader from "../../../Preloader/preloader"
import tab02 from "../../../../Assets/images/services/website-development/cms/tabs/02.png"
import tab04 from "../../../../Assets/images/services/website-development/cms/tabs/04.png"
import tab05 from "../../../../Assets/images/services/website-development/cms/tabs/05.png"
import SocialIcons from "../../../Home/Social-Icons/Social-icons"
import {useHistory} from "react-router-dom"
import {Helmet} from "react-helmet";





const CMS = ()=>{
    const [load,setLoad]=useState(true)
    const history = useHistory()

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
        title:`Inspiring clients`,

        mainHeading: `With CMS Website Experiences`,
        detail: `At Invictus Studio, we inspire our clients by developing distinctly custom CMS websites with secure and technologically advanced designs. We help you cater to your online business needs. We specialize in giving businesses of all sizes scalable, cost-effective, and cutting-edge website layouts that seamlessly adjust to your devices. At Invictus Studio, we ensure comprehensive delivery of stunning web layouts according to your business and choice. Our team has extensive industry-relevant UI/UX experience incorporating the latest CMS platforms to create engaging and interactive websites. We guarantee you a complete CMS website developing process from designing, producing, and customizing. `,
    anchorText: `Get a Quote`}
	return(
		<div className = "CMS">
            <Helmet>
            <meta name="description" content="Streamlining business operations to facilitate productivity and growth."/>
            <title>Custom CMS Development | Invictus Studio</title>
            </Helmet>
            {load ? <Preloader/> : null }
        <SocialIcons/>
		<section className="main-Banner" style={{background: `url(${bannerBg})`}}>
				<Container>
                   <Row>
					   <Col md={5} sm={5} xs={5} lg={5} xl={5}>
						   <div className="banner-content" >
						   <h1 >Web Design & Development</h1>
							<h3 >(Content Management System)</h3>
						        
						   </div>
					   
					   </Col>
					   <Col md={7} sm={7} xs={7} lg={7} xl={7}>
						   <div className="banner-img">
                              <img src={BannerImg} alt="" />

						   </div>
					   
					   </Col>
				   </Row>
				</Container>

			</section>
            <Inspiring img={InspiringImg} alldetail={inspiringDetail} />
		
			<section className="benefit-cms" style={{background: `url(${Benefit_Banner})`}}>
				<Container>
					<Row className="align-items-center">
						<Col md={12}>
							<div className="benefit-content">
								<h4>Benefits Of</h4>
								<h2><span>U</span>sing CMS Website</h2>
								 <p>There are countless benefits to using content management systems (CMS) websites for your business. CMS websites are known to be dynamic, interactive, and alluring.</p>
							</div>
							<ul className="benefit-list">
								<li>
									<div className="benif-box">
										<span>
											<img src={benef01} alt="" />
										</span>
										<h6>Asset <br/>Management</h6>
									</div>
								</li>
								<li>
									<div className="benif-box">
										<span>
											<img src={benef02} alt="" />
										</span>
										<h6>Order <br/>Management</h6>
									</div>
								</li>
								<li>
									<div className="benif-box">
										<span>
											<img src={benef03} alt="" />
										</span>
										<h6>User-Friendly <br/>Interface</h6>
									</div>
								</li>
								<li>
									<div className="benif-box">
										<span>
											<img src={benef04} alt="" />
										</span>
										<h6>One-Click <br/>Updating</h6>
									</div>
								</li>
								<li>
									<div className="benif-box">
										<span>
											<img src={benef05} alt="" />
										</span>
										<h6>User <br/>Management</h6>
									</div>
								</li>
								<li>
									<div className="benif-box">
										<span>
											<img src={benef06} alt="" />
										</span>
										<h6>Flexible <br/>Plugin Store</h6>
									</div>
								</li>
							</ul>
						
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
                    CMS Website
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
					
				
                    <Col md={11} sm={12} xs={12} lg={11} xl={11}>
					
                        <div className="tabs-wrapper">
						<TabPanel>
                            <div className="tab-box" >
                                <Row >
                                    
                                    <Col md={7} lg={7} xl={7} sm={12} xs={12}>
                                        <div className="img-wrapper">
                                            <img src={SlideImg} alt=""/>
                                        </div>
                                    </Col>
									<Col md={5} lg={5} xl={5} sm={12} xs={12}>
                                        <div className="desc-box">
                                            <h3>
                                            WORDPRESS  &amp;
                                                <span>
                                                DEVELOPMENT
                                                </span>
                                            </h3>
                                            <p>
                                            At Invictus Studio, we are dedicated individuals passionate about developing high-quality CMS systems and WordPress websites that provide you complete control over your online presence. As a trusted WordPress development company, our staff works quickly to create valuable, robust, and complex online solutions for the worldwide customer. We assure the capacity to integrate the necessary features and functions. Our designs offer the best UI/UX elements, allowing them to work seamlessly on web and mobile devices. At Invictus Studio, we fashion plugins and bespoke WordPress solutions to offer specific features that best match your demands and help you remain ahead of the market competitors.
                                            Our WordPress websites are created with the finest in industry features to keep you ahead of the competition. We accommodate you in promoting your products and services via controllable websites, boosting your efficiency, functionality, and usefulness.

                                            </p>
                                            
                                            <div className="cta-box">
                                                <a href={()=> false} onClick={()=>history.push("/portfolio")}>View Portfolio <i className="fas fa-chevron-right"></i></a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
							</TabPanel>
							<TabPanel>
                            <div className="tab-box" data-tab="mobile-app">
                                <Row>

                                    <Col md={7} lg={7} xl={7} sm={12} xs={12}>
                                        <div className="img-wrapper">
                                            <img src={tab02} alt=""/>
                                        </div>
                                    </Col>
									<Col  md={5} lg={5} xl={5} sm={12} xs={12}>
                                        <div className="desc-box">
                                            <h3>
                                            WOOCOMMERCE
                                                <span>
                                                DEVELOPMENT
                                                </span>
                                            </h3>
                                            <p>
                                            We are fully aware of the potential WooCommerce platform here at Invictus Studio. Therefore, we have a specialized team that can create powerful and responsive WooCommerce CMS websites for your business. We tailor your websites according to your specifications, business requirements, goals, and target audience. At Invictus Studio, we are continually growing, learning, and designing new modules to guarantee that the end-user experience in our client's stores is exceptional.
                                            As a CMS website designing company, Invictus Studio is well-known for providing cutting-edge WooCommerce solutions to many businesses. We offer companies and organizations powerful online marketplace features like a catalog page, one-page check-out, block administrator, and an inbuilt theme editor by utilizing WooCommerce. We guarantee to build and develop cutting-edge apps with an intuitive design and a beautiful appearance for your online business.

                                            </p>
                                           
                                            <div className="cta-box">
                                                <a href={()=> false} onClick={()=>history.push("/portfolio")}>View Portfolio <i className="fas fa-chevron-right"></i></a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
							</TabPanel>
							<TabPanel>
                            <div className="tab-box" data-tab="digital-marketing">
                                <Row >
                                    
                                    <Col md={7} lg={7} xl={7} sm={12} xs={12}>
                                        <div className="img-wrapper">
                                            <img src={tab05} alt=""/>
                                        </div>
                                    </Col>
									<Col  md={5} lg={5} xl={5} sm={12} xs={12}>
                                        <div className="desc-box">
                                            <h3>
                                              SHOPIFY 
                                                <span>
                                                DEVELOPMENT
                                                </span>
                                            </h3>
                                            <p>
                                            At Invictus Studio, we aim to offer our customers modified and exceptionally designed Shopify CMS websites. Our team of professionals works quickly to create practical, robust, flexible, and complex websites while integrating the necessary features and functions. Invictus Studio specializes in creating Shopify websites that are incredibly functional, efficient, and cost-effective. We provide Shopify shop personalization to our clients to help them maintain track of the stock, progress, and manage sales channels. We take pride in developing cross-platform websites so that your online Shopify business does not compromise your potential visitors and revenues.
                                             <br/> At Invictus Studio, every website we design has a quality standard that our team must meet. All of the Shopify eCommerce sites that we build are customized to meet the demands of our clients' online businesses. We also help our clients with their Shopify store configuration services to swiftly launch their website. We constantly make sure that our every solution is one-of-a-kind.

                                            </p>
                                            
                                            <div className="cta-box">
                                                <a href={()=> false} onClick={()=>history.push("/portfolio")}>View Portfolio <i className="fas fa-chevron-right"></i></a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
							</TabPanel>
							<TabPanel>
                            <div className="tab-box" data-tab="video-animation">
                                  <Row>
                                    
                                    <Col md={7} lg={7} xl={7} sm={12} xs={12}>
                                        <div className="img-wrapper">
                                            <img src={tab04} alt=""/>
                                        </div>
                                    </Col>
									<Col  md={5} lg={5} xl={5} sm={12} xs={12}>
                                        <div className="desc-box">
                                            <h3>
                                            MAGENTO
                                                <span>
                                                DEVELOPMENT
                                                </span>
                                            </h3>
                                            <p>
                                            Invictus Studio offers you custom-built CMS websites for your business on Magento. We create flexible, adaptable, and feature-rich websites employing cutting-edge digital tools. Our expert team and designers have the necessary skills to form engaging, interactive, and aesthetically pleasing websites according to your brand. We take pride in our expertise in Magento while guaranteeing you will always be up and running with the ever-changing online market. We not only offer you feature-rich yet easy-to-navigate web pages. Our designs on Magento are bound to improve your revenue and boost your brand's overall image and growth. 
                                            <br/>The entire process of developing a CMS website at Invictus Studio is honest and fair. Our transparent Magento CMS website generating process enables our clients to provide feedback on our work and assist us in improving its functioning.

                                            </p>
                                            
                                            <div className="cta-box">
                                                <a href={()=>false} onClick={()=>history.push("/portfolio")}>View Portfolio <i className="fas fa-chevron-right"></i></a>
                                            </div>
                                        </div>
                                    </Col>
								</Row>
                            </div>
							</TabPanel>
                        </div>
                    </Col>
					<Col md={1} sm={12} xs={12} lg={1} xl={1}>
                    
                        <div className="tabs-menu">
                            <TabList>
                                <Tab>
                                    <a href="javascript:;" >WordPress</a>
                                </Tab>
                                <Tab>
                                    <a href="javascript:;">Woo Commerce</a>
                                </Tab>
                                <Tab>
                                    <a href="javascript:;">Shopify</a>
                                </Tab>
                                <Tab>
                                    <a href="javascript:;">Magento</a>
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
	<WantBusiness webName="cms"/>
	<IndWorks/>
	<ClientTestimonaials/>
	<Ftrform/>
			
		</div>
	)
}
export default CMS