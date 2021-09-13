import { Container,Row,Col } from "react-bootstrap"
import bboxImg from "../../../../Assets/images/services/website-development/b2b/business/img-left.png"
import { useContext } from "react"
import { MainContext } from "../../../Context/GlobalState"
const WantBusiness = ({webName})=>{
	const countryData = useContext(MainContext)
	const {popOpen} = countryData
	return(
		<section className="want-business">
		<Container>
			<Row>
				<Col md={12}>
					<div className="want-business-box">
						<Row>
							<Col md={6}>
								<h4>Do You Want to</h4>
								<h2>Take your business Onine with a website</h2>
								 <p>Invictus Studio turns your {webName} website ideas to life through custom web design and development services. Let's work on your business website today!</p>
								 <div className="bann-btn">
								 <a href={()=>false} onClick={popOpen} > Get a Quote <i class="far fa-chevron-right"></i></a>
							   </div>
							</Col>
							<Col md={6}>
							   <div className="bbox-right">
								  <img src={bboxImg}/>
							   </div>

							</Col>
						</Row>
					</div>
				
				</Col>
			</Row>
		</Container>
	</section>
	)
}
export default WantBusiness