
import {Container,Row,Col} from "react-bootstrap"
import FoapLogo from "../../../Assets/images/foapp-logo.png"
import FoapDevice from "../../../Assets/images/foapp-device.png"
import FoapImg from "../../../Assets/images/foapp-img.jpg"
import ShedLogo from "../../../Assets/images/shed-card-logo.png"
import ShedDevice from "../../../Assets/images/shed-card-device.png"
import ShedImg from "../../../Assets/images/shed-card-img.jpg"
import CruseFCLogo from "../../../Assets/images/cruze-for-cash-logo.png"
import CruseFCDevice from "../../../Assets/images/cruze-for-cash-device.png"
import CruseFCImg from "../../../Assets/images/cruze-for-cash-img.jpg"
import RangeBLogo from "../../../Assets/images/range-booth-logo.png"
import RangeBDevice from "../../../Assets/images/range-booth-device.png"
import RangeBImg from "../../../Assets/images/range-booth-img.jpg"
import CatherDLogo from "../../../Assets/images/caterday-order-app-logo.png"
import CatherDDevice from "../../../Assets/images/caterday-order-app-device.png"
import CatherDImg from "../../../Assets/images/caterday-order-app-img.jpg"
import MomentPLogo from "../../../Assets/images/moment-pin-logo.png"
import MomentPDevice from "../../../Assets/images/momentpin-device.png"
import MomentPImg from "../../../Assets/images/moment-pin-img.jpg"
import ArenaELogo from "../../../Assets/images/arena-eatz-logo.png"
import ArenaEDevice from "../../../Assets/images/arena-eatz-device.png"
import ArenaEImg from "../../../Assets/images/arena-eatz-img.jpg"
import StacLogo from "../../../Assets/images/stac-logo.png"
import StacDevice from "../../../Assets/images/stac-device.png"
import StacImg from "../../../Assets/images/stac-img.jpg"
import Slider from "react-slick"
import "./case-studies.css"
import {MainContext} from "../../Context/GlobalState"
import { useContext } from "react"


const CaseStudies = ()=>{
	const countryData = useContext(MainContext)
	const {popOpen} = countryData

	
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 4000,
	pauseOnHover: false,
	adaptiveHeight: true,

	
  };

const sliderSlides = [{title:'FOAPP',details:`Foapp is your multipurpose obituary app that is one of the digita innovators in
the funeral industry. Using this app allows you to share your obituaries with
your family and friends online, order floral arrangements, access an online urn
market, or get cremation services among many others.
To make online funeral services a reality, we employed several technologies like
Ionic 2, Handlebars.js, Python and jQuery so to support the diverse
functionalities of the app. With that, weaimed to project FOAPP on a new
spectrum in the funeral industry.`,link:`click here`,m_logo:FoapLogo,m_device:FoapDevice,m_Img:FoapImg
},
{title:'SHED CARD',details:`Shed Card is a leading financial solution for all you outdoor structure need,
where you get a personal load to build you sheds, gazebos, and other backyard
structures. The idea behind introducing fintech in this project is to add
flexibility to rental and funding solutions.
Here, Invictus Star Technology joined hands with the client to help you secure
the fastest load options. We used the quickest UI toolkit to build a performant,
high-quality app for Shed Card, where we used ASP.NET WEB API 2 to create an
unseamed experience for the users.`,link:`click here`,m_logo:ShedLogo,m_device:ShedDevice,m_Img:ShedImg
},
{title:'CRUZE4CASH',details:`
  Real estate never got this better. Cruze4Cash is an app for investors who want
  to find properties conveniently around them, find deals, and save their time
  using the app instead of driving around town. The app allows them to close deals
  and create lists with exciting features that help your business.

   Invictus Star Technology developed on the idea of the app by providing it with a
   robust yet simplistic design and a lead generation system. We also implemented a
   real-time GPS, a list builder, and customized direct mail with other exciting
   features to help investors find their perfect business support with Cruze4Cash.                             
`,link:`click here`,m_logo:CruseFCLogo,m_device:CruseFCDevice,m_Img:CruseFCImg
},
{title:'RANGE BOOTH',details:`
Range Booth is an iOS app that allows Country clubs to boost their brand
presence using a digital photo booth inside the club’s property. The app works
by having the booth installed at any prime spot in the club where users take
photos while having fun. The images are shared on the social media platforms,
which helps the Club capture new leads in the form of new members.
To bring the idea of digital photo booths, in reality, Invictus Star Technology
employed seamless integration of social channels in the app to build a simple
yet smooth experience for both the users and the administration.                          
`,link:`click here`,m_logo:RangeBLogo,m_device:RangeBDevice,m_Img:RangeBImg
},
{title:'Caterdaay Order App',details:`
 Caterdaay is a Canadian catering market where you find catering services as per
 your location and events. The app connects people with hundreds of reliable
 caterers and restaurants across Canada. Since the app required a structured
 framework with cart and sales order integration, Invictus Star Technology had to
 work with a diverse range of technologies for smooth networking
 <br>
  To make the app a work of art, our developing teams worked vigorously with the
  clients to pin the idea of the app. We designed a timeline for the integration
  of multiple technologies that helped the app emerge as an early bird in the
  catering industry.
						 
`,link:`click here`,m_logo:CatherDLogo,m_device:CatherDDevice,m_Img:CatherDImg
},
{title:'Moment Pin',details:`
Momentpin allows you to connect with your family and friends and share your
content in a highly secure space. Besides sharing, you can create and organize
your content so you enjoy socializing. Here, Invictus Star Technology puts your
privacy and data security on priority so every moment shared remains secure.
						 
`,link:`click here`,m_logo:MomentPLogo,m_device:MomentPDevice,m_Img:MomentPImg
},
{title:'Arena Eatz',details:`
Arena Eatz is your go-to event food app where you ditch the stand-in-line hassle
at your favorite concert or the big game. Just place your order using the app
and pick up food from your selected vendor only when it’s ready.						 
`,link:`click here`,m_logo:ArenaELogo,m_device:ArenaEDevice,m_Img:ArenaEImg
},
{title:'S.T.A.C',details:`
 S.T.A.C is an easy-to-use app that allows content creators to enjoy socializing
 and earn at the same time. If you are a blogger, personal trainer, or anything
 that engages people around you, you can get paid for the exclusive content you
 upload. With S.T.A.C’s easy management features, build a profile, upload
 content, and quickly connect with fans and other content creators. Unlike other
 social media platforms, the time you spend time on S.T.A.C can be turned into
 capital.		 
`,link:`click here`,m_logo:StacLogo,m_device:StacDevice,m_Img:StacImg
},
]


	return(
		<section className="case-studies">
        <Container>
			<Row>
			<Col md={12}>	
            <div className="head-desc">
                <h3>
                    Case Studies
                </h3>
                <h2>
                    <span>W</span>e build great products
                </h2>
            </div>
			</Col>
			</Row>
			<Row>
			 <Col md={12}>
			<Slider {...settings} className="case-studies-slider">
              {sliderSlides.map((slides,index)=>{
				   return(
					   <div className="item" key={index}>
                          <Row > 
							  <Col md={5}>
								  <div className="img-box">
									  <img src={slides.m_Img} />
								  </div>
								  <div className="device-box">
									  <img src={slides.m_device} className="device" />
								  </div>
								  <span className="logo-box">
									  <img src={slides.m_logo} />
								  </span>
							  </Col>
							  <Col md={{span: 6, offset: 1 }}>
								  <div className="desc">
									  <h3>{slides.title}</h3>
									   <p>{slides.details}</p>
									   <div className="cta-box">
									   <a href={()=>false}  onClick = {popOpen}>Get A Quote <i className="fas fa-chevron-right"></i></a>
									   </div>
								  </div>
							  </Col>

						  </Row>
					   </div>
				   )
			  })}
			</Slider>
			</Col>
			</Row>
            
        </Container>
    </section>
	)
}
export default CaseStudies