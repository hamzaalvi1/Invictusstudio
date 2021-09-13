import PortfolioBg from "../../../Assets/images/portfolio-sect-bg.jpg"
import {Container,Row,Col} from "react-bootstrap"
import "./portfolio.css"
import PortfolioIMG from "../../../Assets/images/portfolio-img.png"

import { useHistory } from "react-router"

const Portfolio = ()=>{
    const history = useHistory()
    const redirectTo=(route)=>{
        history.push(route)
    
    }
	return(
		<section className="portfolio" style={{background:`url(${PortfolioBg})`}}>
        <Container fluid >
            <Row>
             <Col md={12}>
            <div className="head-desc">
                <h3>
                EXPERIENCES
                </h3>
                <h2>
                    <span>W</span>E'VE CREATED
                </h2>
                <p>Our vast experience involves working with clients and brands from across the <br/> globe and industries. We let our work do the rest of the talk!</p>
            </div>
            <div className="port-img">
                <img src={PortfolioIMG} alt="" />
            </div>
            <div className="cta-box">
            <a href="javascript:;" onClick={()=>redirectTo("/portfolio")}>Explore Now <i className="fas fa-chevron-right"></i></a>
            </div>
            

          
            </Col>
            </Row>
        </Container>
    </section>
	)
} 
export default Portfolio