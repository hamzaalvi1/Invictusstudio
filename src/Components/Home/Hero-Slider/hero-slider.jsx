import {Container} from "react-bootstrap"
import anime1 from "../../../Assets/images/hero-anime-img-1.jpg"

import anime2 from "../../../Assets/images/hero-anime-img-2.jpg"
import anime4 from "../../../Assets/images/Banner-02.jpg"
import anime3 from "../../../Assets/images/Banner-021.jpg"
import anime5 from "../../../Assets/images/Banner-03.jpg"
import anime6 from "../../../Assets/images/Banner-031.jpg"
import "./hero.css"
import { MainContext } from "../../Context/GlobalState"
import { useContext } from "react"
import Slider from "react-slick"
import useMediaQuery from "../../Utils/windowSize"

const HeroSlider = () =>{
    const countryData = useContext(MainContext)
    const matches = useMediaQuery("(max-width: 824px)");
    const {popOpen} = countryData
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: "hero_dots",
        autoplay: false,
        autoplaySpeed : 5000,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 824,
                settings:{
                  slidesToShow: 1,
                  slidesToScroll: 1,
            
                }
            }
          ]
      };
    
	return(
		<section className="hero">
            <Slider {...settings}>
        <div className="hero-slider">
            <div className="item-box">
                <div className="anime one" >
                    <Container>
						
                        <div className="desc">
                            <h2>
                                Digital
                            </h2>
                            <p>
                            We are a full-stack digital agency run by creative, intelligent, and passionate individuals who
                             create world-leading brands with exceptional digital services.
                            </p>
                            <a  onClick={popOpen}>
                                Get Started
                                <i className="fas fa-chevron-right"></i>
                            </a>
                        </div>
                    </Container>
                </div>
                <div className="anime two" style={{background: matches ? `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${anime2})` : `url(${anime2})`}}>
                    <Container >
                        <div className="desc __right">
                            <h2>
                                Creative
                            </h2>
                            <p>
                            We incorporate result-driven methodology to deliver solutions that have the highest levels of
                            creativity to bring brands to life.
                            </p>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
        <div className="hero-slider">
            <div className="item-box">
                <div className="anime one __3" style={{background: matches ? `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${anime3})` : `url(${anime3})`}}>
                    <Container>
						
                        <div className="desc">
                            <h2>
                            MARKETING 
                            </h2>
                            <p>
                            We devise comprehensive and innovative marketing campaigns that produce measurable outcomes, leading businesses to connect with their target audience.
                            </p>
                            <a  onClick={popOpen}>
                                Get Started
                                <i className="fas fa-chevron-right"></i>
                            </a>
                            
                        </div>
                    </Container>
                </div>
                <div className="anime two __4" style={{background: matches ? `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${anime4})` : `url(${anime4})`}}>
                    <Container >
                        <div className="desc __right">
                            <h4>
                            COPYWRITING
                            </h4>
                           <p>We hire writers who outshine in using innovative channels to produce optimal content. We assure effective copywriting strategies that generate more clicks and conversations.</p>
                           
                        </div>
                    </Container>
                </div>
            </div>
        </div>
        <div className="hero-slider">
            <div className="item-box">
                <div className="anime one" style={{background: matches ? `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${anime5})` : `url(${anime5})`}}>
                    <Container>
						
                        <div className="desc">
                            <h2 className="ev">
                            FUTURISTIC
                            </h2>
                            <p>
                            Invictus Studio provides futuristic, quality-driven, innovative, and cutting-edge app development solutions to help you thrive in today's evolving business environment.
                            </p>
                            <a  onClick={popOpen} className="sm_ph">
                                Get Started
                                <i className="fas fa-chevron-right"></i>
                            </a>
                          
                        </div>
                    </Container>
                </div>
                <div className="anime two" style={{background:matches ? `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${anime6})` : `url(${anime6})`}}>
                    <Container >
                        <div className="desc __right">
                           <h2 >
                             VISIONARY
                            </h2>
                            <p className = "p__3">
                            To maintain the level of our services, we never cease to learn about the newest trends while upgrading our services, including design and development
                            </p>
                            
                        </div>
                    </Container>
                </div>
            </div>
        </div>
        </Slider>
        
    </section>
	)
}

export default HeroSlider