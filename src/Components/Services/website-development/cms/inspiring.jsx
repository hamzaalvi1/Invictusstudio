import { Container,Row,Col } from "react-bootstrap"
import {useContext} from "react"
import {MainContext} from "../../../Context/GlobalState"

const Inspiring = ({img,alldetail})=>{
	const countryData = useContext(MainContext)
	const {popOpen} = countryData
	return(
<section className="inspiring">
	
<Container>
	<Row className="align-items-center">
		<Col md={6}>
			<div className="inspire-img">
				<img src={img}/>

			</div>
		</Col>
		<Col md={6}>
			<div className="inspire-content">
				<h4>{alldetail.title}</h4>
				<h2><span>{alldetail.gradWork}</span>{alldetail.mainHeading}</h2>
				<p>
				{alldetail.detail}
				</p>
				<div className="bann-btn">
					<a href= {()=>false} onClick={popOpen} > {alldetail.anchorText} <i class="far fa-chevron-right"></i></a>
				</div>
			</div>
		
		</Col>
	</Row>
</Container>
</section>
	)
}
export default Inspiring