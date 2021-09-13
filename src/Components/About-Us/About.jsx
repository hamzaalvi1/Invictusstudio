
import "./About.css"
import {Container,Row,Col} from "react-bootstrap"
import FtrForm from "../Home/Form/Form"
import SocialIcons from "../Home/Social-Icons/Social-icons"
import {useState,useEffect} from "react"
import Preloader from "../../Components/Preloader/preloader"
import {Helmet} from "react-helmet";

const About = ()=>{

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
	return(
		<div className="aboutus">
            <Helmet>
            <meta name="description" content="Prominent logo and web design service provider that offers services to different companies and businesses."/>
            <title>About Us | Invictus Studio</title>
            </Helmet>
              {load ? <Preloader/> : null }
			<SocialIcons/>
		<section className="inner-banner about-us">
           
        <div className="wrapper">
            <Container>
                <Row> 
                <Col md={12}>
                    <h3>
                        About Us
                    </h3>
                    </Col>
            </Row>
            </Container>
             
           
			</div>
            
      </section>
	  <section className="about-detail">
        <Container>
			<Row>
			  <Col md={12}>
            <div className="head-desc">
                <h3>
                    Time To
                </h3>
                <h2>
                    Scale Up
                </h2>
            </div>
            <p>
                Creativity and growth are inherent to everyone. But we do more than that at Invictus Studio. We are a
                creative design agency that sits with you on the coffee table and discusses your business's core. With
                us as your partners, your visibility increases with strategies tailored to boost revenue. Since we live
                in the online world, we embed your visionary streak with meaningfulness. We make your customer an
                integral part of your brand and design hold-fast relationships that defeat the race of time.
            </p>
            <p>
                For us, it’s always a matter of bringing a brand to the stage and let it perform. And by that, we mean
                that our creative directors, web designers and developers, storytellers, and creatives in the closet
                entertain you well. You see that it’s time to take a step forward without complicating your business
                growth. Invictus Studio gets you where you want to go – even if it’s the stars or the moon or infinity and
                beyond.
            </p>
           
			</Col>
			</Row>
		</Container>
    </section>
	
	<FtrForm/>


     
		</div>
	)
}
export default About