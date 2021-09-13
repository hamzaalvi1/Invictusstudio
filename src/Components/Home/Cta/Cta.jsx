import ctaImg from "../../../Assets/images/cta-banner-bg.jpg" 
import "./cta.css"
import {Container,Row,Col} from "react-bootstrap"
import { MainContext } from "../../Context/GlobalState"
import {useContext} from "react"
const Cta = ()=>{
    const countryData = useContext(MainContext)
    const {popOpen} = countryData
	return(
		
		<section className="cpcta-sect" id="cta-sect" style={{background:`url(${ctaImg})`}}>
        <Container>
            <Row>
                <Col md={9} sm={12} xs={12} lg={9} xl={9}>
                    <h3>
                        We’re Constantly Evolving &
                        <strong>Creating Opportunities</strong>
                    </h3>
                    <p>
                    At Invictus Studio, we provide our customers with out-of-the-box and stirring results. We embrace every challenge head-on and churn out solutions to even the most technical and complex problems. If you wish to get innovative design and digital solutions for your brand, contact our team and get a free quote.
                    </p>
                </Col>
                <Col md={3} sm={12} xs={12} lg={3} xl={3}>
                    <div className="cta-box">
                        <a href={()=>false} onClick={popOpen}>Get A Quote</a>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
	)
}
export default Cta