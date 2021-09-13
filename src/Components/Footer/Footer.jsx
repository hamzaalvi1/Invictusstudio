import { Container,Row,Col } from "react-bootstrap"
import { useHistory } from "react-router"
import "./footer.css"
import {Link} from "react-router-dom"
import thumb from "../../Assets/images/__001.png"
const Footer = ()=>{
    const history = useHistory()
  
	return(
		<footer>
      <div className="footer-main-wrapper">
        <Container>
            <Row>
                <Col md={4} lg={4} xl={4} sm={12} xs={12}>
                    <div className="heading">
                        <h3>About</h3>
                    </div>
                   <div className="footer-para">
                       <p>Invictus Studio is a prominent online design service provider that offers services to different companies and businesses.</p>
                      
                        <a href={()=>false} onClick={()=>history.push("/about")}>Learn More</a>
                        <p class="awards">
          <a href="https://www.thumbtack.com/-Dallas-TX/service/2644534" class="widget ng-scope" ng-href="https://www.thumbtack.com/-Dallas-TX/service/2644534" target="_blank">
            <img src={thumb}/>
          </a>
          <a href="https://www.trustpilot.com/review/invictusstudio.com" class="widget ng-scope" ng-href="https://www.trustpilot.com/review/invictusstudio.com" target="_blank">
            <img src="https://cdn.trustpilot.net/brand-assets/1.1.0/logo-white.svg" style={{height: "auto",width: "80px"}} ng-src="//cdn.trustpilot.net/brand-assets/1.1.0/logo-white.svg"/>
          </a>
          <a href="https://reviews.birdeye.com/invictus-studio-157356397125277" class="widget ng-scope" ng-href="https://reviews.birdeye.com/invictus-studio-157356397125277" target="_blank">
            <img src="https://d3cnqzq0ivprch.cloudfront.net/public-site/freeprod/assets/images/header/logo-white.svg" style={{height: "auto",width: "80px"}} ng-src="https://d3cnqzq0ivprch.cloudfront.net/public-site/freeprod/assets/images/header/logo-white.svg"/>
          </a>
          <a href="https://www.bark.com/en/company/invictus-studio/EayR/" class="widget ng-scope" ng-href="https://www.bark.com/en/company/invictus-studio/EayR/" target="_blank">
            <img src="https://d18jakcjgoan9.cloudfront.net/s/img/images/barklogo-dark.png!d=KY4fXZ" style={{height: "auto",width: "80px",filter:"brightness(0) invert(1)"}} ng-src="https://d18jakcjgoan9.cloudfront.net/s/img/images/barklogo-dark.png!d=KY4fXZ"/>
          </a>
          <script type="text/javascript" src="https://www.thumbtack.com/profile/widgets/scripts/?service_id=HJ1:tsvirjvVJA&amp;widget_id=profile"></script>
        </p>                  
                    </div>
                </Col>
                <Col md={4} lg={4} xl={4} sm={12} xs={12} className="text-center">
                  
                     <div className="ftr-links">
                            <ul className="ftr-list">
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/pricing">Pricing</Link></li>
                                <li><Link to="/portfolio">Portfolio</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                <li><Link to="/terms-conditions">Terms & Conditions</Link></li>

                               
                            </ul>
                

                     </div>
                    
                </Col>
                <Col md={4} lg={4} xl={4} sm={12} xs={12}>
                    <div className="heading">
                        <h3>Contact Us</h3>
                        
                        <div className="ftr-contact">
                            <ul className="ct">
                                <li><a href="tel:+1-800-664-4191"><i className="fas fa-phone-alt"></i><span>Phone:</span> +1-800-664-4191</a></li>
                                <li> <a href="mailto:info@invictusstudio.com"><i className="fas fa-envelope"></i><span>Email:</span> info@invictusstudio.com</a></li>
                                <li className="mp"><a href="https://goo.gl/maps/LTK1RRqXaE9S4oFT9" target="_blank"><i className="fas fa-map-marker-alt"></i>950 E Hwy 114 Suite 160, Southlake, TX 76092</a></li>

                            </ul>
                            <div className="social_footer">
                            {/* <a href="https://www.trustpilot.com/review/invictusstudio.com " target="_blank"><img src={Trustpilot}/></a> */}
                          </div>
                        </div>
                    </div>
                    
                </Col>
            </Row>
        </Container>
    </div>
   
    <div className="copyrights-box">
        <Container >
            <Row >
                <Col md={12} lg={12} xl={12} sm={12} xs={12} >
                   <h6>DISCLAIMER:</h6>
                   <p>The logo, name and Graphics of Invictus Studio and its products and services are the trademarks of Invictus Studio. All other company names, brand names, trademarks and logos mentioned on this website are the property of their respective owners and do not constitute or imply endorsement, sponsorship or recommendation thereof by Invictus Studio and do not constitute or imply endorsement, sponsorship or recommendation of Invictus Studio by the respective trademark owner.</p>
                   <p>© 2021 - All Rights Reserved, KoderLabs, LLC DBA Invictus Studio</p>
                </Col>
             
            </Row>
        </Container>
    </div>
</footer>
	)
}
export default Footer