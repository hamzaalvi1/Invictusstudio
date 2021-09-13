import WorkBg from "../../../Assets/images/services/digital-marketing/work/bg.png"
import Workbx1 from "../../../Assets/images/services/digital-marketing/work/web/01.png"
import Workbx2 from "../../../Assets/images/services/digital-marketing/work/web/02.png"
import Workbx3 from "../../../Assets/images/services/digital-marketing/work/web/03.png"
import Workbx4 from "../../../Assets/images/services/digital-marketing/work/web/04.png"
import Workbx5 from "../../../Assets/images/services/digital-marketing/work/web/05.png"
import {Container,Row,Col} from "react-bootstrap"

const OurWork = ()=>{
	return(
		<section className="our-work" style={{background:`url(${WorkBg})`}}>
				<Container>
					<Row className="align-items-center">
						<Col md={12}>
							<div className="work-parent">
							<div className="our-work-content" >
								<h4>Our Work</h4>
								<h2>Portfolio We Created</h2>
							</div>
							<ul className="our-work-list">
								<li>
									<div className="workbox">
										<img src={Workbx1}/>
										<div className="workbox-overlay">
											<span>
											<i class="fas fa-plus"></i> 
											</span>
										</div>
									</div>
								</li>
								<li>
									<div className="workbox">
										<img src={Workbx2}/>
										<div className="workbox-overlay">
											<span>
											<i class="fas fa-plus"></i> 
											</span>
										</div>
									</div>
								</li>
								<li>
									<div className="workbox">
										<img src={Workbx3}/>
										<div className="workbox-overlay">
											<span>
											<i class="fas fa-plus"></i> 
											</span>
										</div>
									</div>
								</li>
								<li>
									<div className="workbox">
										<img src={Workbx4}/>
										<div className="workbox-overlay">
											<span>
											<i class="fas fa-plus"></i> 
											</span>
										</div>
									</div>
								</li>
								<li>
									<div className="workbox">
										<img src={Workbx5}/>
										<div className="workbox-overlay">
											<span>
											<i class="fas fa-plus"></i> 
											</span>
										</div>
									</div>
								</li>
							</ul>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		
	)
}
export default OurWork