import "./portfolio.css"
import { Container,Row,Col } from "react-bootstrap"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import LogoTabs from "./logo_tabs"
import MobileTabs from "./mobile_tab"
import WebTabs from "./web_tab"
import VideoTab from "./video_tab"
import { useEffect,useState } from "react";
import FtrForm from "../Home/Form/Form"
import Preloader from "../../Components/Preloader/preloader"
import SocialIcons from "../Home/Social-Icons/Social-icons"
import {Helmet} from "react-helmet";


const Portfolio = () =>{
	const [load,setLoad]=useState(true)

    const preFunc = ()=>{
        setLoad(false)
        document.body.classList.remove("overHide")
    }
    useEffect(()=>{
    
     setTimeout(()=>{
        preFunc()
     },1000)   
    },[])



    useEffect(()=>{

        window.scrollTo(0,0) 
      
   
   },[])

	return(
		<div className="portfolio">
            <Helmet>
            <meta name="description" content="Our portfolio includes all of our logo design, website design, marketing and brand identity work that we have done for our happy customers."/>
            <title>Our Portfolio | Invictus Studio</title>
            </Helmet>
              {load ? <Preloader/> : null }
               <SocialIcons/>

		<section class="inner-banner portfolio-banner">
        <div class="wrapper">
            <Container>
                <Row>
                   <Col md={12}> 
                    <h3>
                        Portfolio
                    </h3>

                    </Col>
             </Row>    
          </Container>           
           
			
        </div>
    </section>
	<section class="portfolio-sect">
        <Container>
			<Row>
			  <Col md={12}>	
            <div class="head-desc">
                <h3>
                    Our <span>Work</span>
                </h3>
            
                <p>
                    At Invictus Studio, our team seeks to communicate continuously with customers and meet their needs. We
                    are driven by creativity, and we strive to make your company stand out. Please take a look at these
                    beautiful works of art prepared by our experts exclusively for our customers.
                </p>
            </div>
			<Tabs>
			 <div className="pf-tabs">
			                 <TabList>
                                <Tab>
                                    <a href="javascript:;">Website <span>Development</span></a>
                                </Tab>
                                <Tab>
                                    <a href="javascript:;">Logo <span>Design</span></a>
                                </Tab>
                                <Tab>
                                    <a href="javascript:;">Video <span>Animation</span></a>
                                </Tab>
                                <Tab>
                                    <a href="javascript:;" >Mobile <span>Application</span></a>
                                </Tab>
                                
                            </TabList>
                            <TabPanel>
                            <div className="tab_box" >
                            <div class="tab-content mbile">
                            <WebTabs/>
                        
                              </div>
                            </div>
							</TabPanel>
                            <TabPanel>
                            <div className="tab_box" >
                            <div class="tab-content">
                            <LogoTabs/>
                         
                              </div>
                            </div>
							</TabPanel>
                            <TabPanel>
                            <div className="tab_box" >
                            <div class="tab-content">
                            <VideoTab/>
                        
                              </div>
                            </div>
							</TabPanel>
                            <TabPanel>
                            <div className="tab_box" >
                            <div class="tab-content mbile">
                            <MobileTabs/>
                        
                              </div>
                            </div>
							</TabPanel>

							
						
						
							
							
							

			 </div>
			 </Tabs>
			</Col>
			</Row>
		</Container>
		</section>
		<FtrForm/>

		</div>
	)
}
export default Portfolio