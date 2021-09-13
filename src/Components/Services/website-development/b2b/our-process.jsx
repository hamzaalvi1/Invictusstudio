import { Container,Row,Col } from "react-bootstrap"
import process01 from "../../../../Assets/images/services/website-development/b2b/our-process/01.png"
import process02 from "../../../../Assets/images/services/website-development/b2b/our-process/02.png"
import process03 from "../../../../Assets/images/services/website-development/b2b/our-process/03.png"
import process04 from "../../../../Assets/images/services/website-development/b2b/our-process/04.png"
import process05 from "../../../../Assets/images/services/website-development/b2b/our-process/05.png"
const OurProcess = ()=>{
	return(
		<section className="our-process">
				<Container>
					<Row>
						<Col md={12}>
							<div className="our-process-content">
								<h4>Our process</h4>
								<h2>Development Solutions</h2>
							</div>
							<ul className="process-details">
								<li >
									<div className="process-parent pos-1" >
                                  <div className="proces-box">
									  <span><img src={process01} alt="" /></span>
                                        <h6>Time <br/>Delivery</h6>
								  </div>
								  </div>
								</li>
								<li >
								<div className="process-parent pos-2">
                                  <div className="proces-box">
									  <span><img src={process02} alt="" /></span>
                                        <h6>Web Design & <br/>Dev Experts</h6>
								  </div>
								  </div>
								</li>
								<li >
								<div className="process-parent pos-3" >
                                  <div className="proces-box">
									  <span><img src={process03} alt="" /></span>
                                        <h6>Experienced <br/> Team</h6>
								  </div>
								  </div>
								</li>
								<li >
								<div className="process-parent pos-4">
                                  <div className="proces-box">
									  <span><img src={process04} alt="" /></span>
                                        <h6>Structured <br/> Process</h6>
								  </div>
								  </div>
								</li>
								<li >
								<div className="process-parent pos-5">
                                  <div className="proces-box">
									  <span><img src={process05} alt="" /></span>
                                        <h6>Planned <br/> Deliverables</h6>
								  </div>
								  </div>
								</li>

							</ul>
						</Col>
					</Row>
				</Container>
			</section>
	)
}
export default OurProcess