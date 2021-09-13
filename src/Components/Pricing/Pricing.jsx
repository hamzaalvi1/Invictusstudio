import { Container,Row,Col } from "react-bootstrap";
import "./pricing.css"
import FtrForm from "../Home/Form/Form"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BrandPkg from "./brand-pkg"
import { useEffect,useState } from "react";
import Preloader from "../../Components/Preloader/preloader"
import LogoPkg from "./logo_pkg"
import WebPkg from "./web-pkg"
import {useHistory} from "react-router-dom"
import SocialIcons from "../Home/Social-Icons/Social-icons"
import {Helmet} from "react-helmet";


const Pricing = ()=>{
    const history = useHistory()
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
        <div className="pricing">
            <Helmet>
            <meta name="description" content="We have customized packages. Choose the best pricing option for your creative identity design, web development and copywriting needs."/>
            <title>Pricing | Invictus Studio</title>
            </Helmet>
            {load ? <Preloader/> : null }
            <SocialIcons/>
	  <section className="inner-banner pricing">
        <div className="wrapper">
            <Container>
                <Row>
                    <Col md={12}>
          
           
                    <h3>
                        Pricing
                    </h3>
                </Col>
               </Row>
           </Container>
           
        </div>
    </section>
	
    <section className="packages">

        <Container>
			<Row>
			<Col>	
            <div className="head-desc">
                <h3>
                    Affordable packages
                </h3>
                <h2>
                    for your business
                </h2>
                <p>
                    Here at Invictus Studio, our primary goal is to provide appropriate services that are affordable and
                    within your budget. We believe in providing satisfactory solutions with guarantees of getting what
                    you want!
                </p>
				<Tabs>
			 <div className="pf-tabs">
			                 <TabList>
                             
                                
                                <Tab>
                                    <a href={()=>false} className="wb-nest">Website  <span>Development</span><i className="fas fa-caret-down"></i></a>
                                </Tab>
                                <Tab>
                                    <a href={()=>false}>Logo <span>Design</span></a>
                                </Tab>
                                <Tab>
                                    <a href={()=>false}>Video <span>Animation</span></a>
                                </Tab>	
                                <Tab>
                                    <a href={()=>false} onClick={()=>history.push("/android")}>Mobile <span>Application</span></a>
                                </Tab>
                            </TabList>

							
							<TabPanel>
                            <div className="tab_box" >
                            <div className="tab-content">
							 <WebPkg/>
                              </div>
                            </div>
							</TabPanel>
                            <TabPanel>
                            <div className="tab_box" >
                            <div className="tab-content">
							 <LogoPkg/>
                              </div>
                            </div>
							</TabPanel>
							<TabPanel>
                            <div className="tab_box" >
                            <div className="tab-content">
							 <BrandPkg/>
                              </div>
                            </div>
							</TabPanel>
							
							
						
							
							

			 </div>
			 </Tabs>
            </div>
			</Col>
			</Row>
		</Container>
		</section>
		<FtrForm/>


		</div>
	)
}
export default Pricing