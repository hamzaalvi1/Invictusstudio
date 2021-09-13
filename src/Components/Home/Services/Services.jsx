import {Container,Row,Col} from "react-bootstrap"
import SlideImg from "../../../Assets/images/services-slider-img.png"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./services.css"
import { useHistory } from "react-router";
import  tabsImg from "../../../Assets/images/02_tab.png"
import  tabsImg2 from "../../../Assets/images/03_tab.png"
import  tabsImg3 from "../../../Assets/images/04_tab.png"

const Services = ()=>{
    const history = useHistory()
    const redirectTo=(route)=>{
        history.push(route)
    
    }
	return(
		<section className="home-our-services">
        <Container className="container">
			<Row>
			 <Col md={12}>
            <div className="head-desc">
                <h3>
                    What We Do
                </h3>
                <h2>
                    <span>S</span>ervices We offer
                </h2>
            </div>
			</Col>
			</Row>
			<Tabs>
            <div className="tabs-container">
                <Row>
					<Col md={1} sm={12} xs={12} lg={1} xl={1} >
                    
                        <div className="tabs-menu">
                            <TabList>
                                <Tab>
                                    <a href={()=>false} >Website Development</a>
                                </Tab>
                                <Tab>
                                    <a href={()=>false}>Video Animation</a>
                                </Tab>
                                <Tab>
                                    <a href={()=>false} >Mobile Application</a>
                                </Tab>
                                <Tab>
                                    <a href={()=>false} >Digital Marketing</a>
                                </Tab>
                               
                            </TabList>
                        </div>
                  
					</Col>
				
                    <Col md={11} sm={12} xs={12} lg={11} xl={11}>
					
                        <div className="tabs-wrapper">
						<TabPanel>
                            <div className="tab-box" >
                                <Row >
                                    <Col md={5}>
                                        <div className="desc-box">
                                            <h3>
                                                Website 
                                                <span>
                                                    Development
                                                </span>
                                            </h3>
                                            <p>
                                            At Invictus Studio, we believe that web design and development is an act of carefully maintaining the balance between visual beauty and functionality while delivering tangible results. Our developers and designers work tirelessly to create and build websites that are both aesthetically appealing and functional. We develop websites that aim to entice visitors so they explore more pages. At Invictus Studio, our web design and development team uses the latest technology, SEO, and UX practices to craft templates and mockups for your business. We build websites with zero issues of performance and compatibility. Whether it's a creative website, SEO-friendly, responsive, WordPress, or an Ecommerce website, we turn your web idea into a reality.
                                             View our web design and development portfolio to see how we can transform the company's website into its most valuable asset.

                                            </p>
                                         
                                            <div className="cta-box">
                                                <a href={()=> false} onClick={()=>redirectTo("/portfolio")}>View Portfolio <i className="fas fa-chevron-right"></i></a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={7}>
                                        <div className="img-wrapper">
                                            <img src={SlideImg} alt=""/>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
							</TabPanel>
                            <TabPanel>
                            <div className="tab-box" data-tab="video-animation">
                                  <Row>
                                    <Col md={5}>
                                        <div className="desc-box">
                                            <h3>
                                                Video
                                                <span>
                                                    Animation
                                                </span>
                                            </h3>
                                            <p>
                                            Invictus Studio's video animation services help you attract your target audience using video animations. We aim to create animations that carry the right message to your potential audience. At Invictus Studio, we believe that animations have the power to generate growth and increase your company's overall ROI. Our team of professional video animators works hard around the clock to create animations and videos that your end-user will like. Our team works to achieve your business goal by utilizing different animation techniques and tricks. At Invictus Studio, our clients are as much a part of our team as our team members. Our clients are always there with us, overseeing our progress until we produce a final result. Whether your need an animated video for promotion, launch or corporate event, we work around the clock.
                                             At Invictus Studio, our video animation helps capture audience attention, high engagement and convert them into your customers. Please have a look at our video animation portfolio and see how we do things differently.

                                            </p>
                                           
                                            <div className="cta-box">
                                                <a href={()=> false} onClick={()=>redirectTo("/portfolio")}>View Portfolio <i className="fas fa-chevron-right"></i></a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={7}>
                                        <div className="img-wrapper">
                                            <img src={tabsImg3} alt=""/>
                                        </div>
                                    </Col>
								</Row>
                            </div>
							</TabPanel>
							<TabPanel>
                            <div className="tab-box" data-tab="mobile-app">
                                <Row>
                                    <Col md={5}>
                                        <div className="desc-box">
                                            <h3>
                                                Mobile
                                                <span>
                                                    Application
                                                </span>
                                            </h3>
                                            <p>
                                            Invictus Studio offers startups, growing businesses, and industry giants successful mobile applications. Our mobile application services include native and cross-platform app, app strategy, monetization, and mobility of applications. The experienced and skillful team of developers creates stunning mobile applications, giving you the leading edge in the ever-changing industry. We take pride in being the experts in developing attractive and feature-packed mobile app solutions. Our mobile app solutions are efficient and client-centric. At Invictus Studio, we bring you along the incredible journey of developing a mobile app for your business. From ideation to mockup, prototype, and the actual product, we do it all together.
                                        Check out our outstanding mobile applications portfolio that includes hundreds of mobile applications from the national to the global level.

                                            </p>
                                           
                                            <div className="cta-box">
                                                <a href={()=> false} onClick={()=>redirectTo("/portfolio")}>View Portfolio <i className="fas fa-chevron-right"></i></a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={7}>
                                        <div className="img-wrapper">
                                            <img src={tabsImg2} alt=""/>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
							</TabPanel>
							<TabPanel>
                            <div className="tab-box" data-tab="digital-marketing">
                                <Row >
                                    <Col md={5}>
                                        <div className="desc-box">
                                            <h3>
                                                Digital
                                                <span>
                                                    Marketing
                                                </span>
                                            </h3>
                                            <p>
                                            Invictus Studio is a full-time digital agency that offers bespoke, honest, and innovative digital marketing services. Our digital marketing services include Advertisement Campaigns, Email Marketing, Search Engine Optimization (SEO), Search Engine Marketing (SEM), and Social Media Marketing. At Invictus Studio, our team of digital marketers gives you the exposure your brand deserves. We are a team of unique and hardworking individuals who work in harmony to create extraordinary brand experiences. We all have a shared passion for working with agility to master the art of digital marketing. All of our digital marketing services are personalized according to our client's unique goals and objectives.
                                            Experience world-class digital marketing experience through our previously done work. Check out our team's latest work as a digital marketing agency to expand our client's business
                                            </p>
                                          
                                            <div className="cta-box">
                                                <a href={()=> false} onClick={()=>redirectTo("/portfolio")}>View Portfolio <i className="fas fa-chevron-right"></i></a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={7}>
                                        <div className="img-wrapper">
                                            <img src={tabsImg} alt=""/>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
							</TabPanel>
							
                        </div>
                    </Col>
                </Row>
            </div>
			</Tabs>
	
		
        </Container>
    </section>
	)
}
export default Services