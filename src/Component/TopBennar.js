import React, {Component, Fragment} from 'react';
import {Accordion, Card, Col, Container, Navbar, Row} from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import delivary3 from '../Images/delivary3.png';
import delivary4 from '../Images/delivary4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';


class TopBennar extends Component {
    render() {
        const settings = {
            autoplay:true,
            autoplaySpeed:3000,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };

        return (
            <Fragment>

                    <Container fluid={true}>
                       <Row>
                           <Col sm={12} md={12} lg={3} >

                               <Accordion defaultActiveKey="0">

                                   <Card>
                                       <Accordion.Toggle className="text-center bg-info "  as={Card.Header} eventKey="0">
                                           Cetegory
                                       </Accordion.Toggle>

                                   </Card>

                                   <Card>
                                       <Accordion.Toggle as={Card.Header} eventKey="1">
                                      <FontAwesomeIcon className="siteNavIcon" icon={faCaretRight}/>    Books
                                       </Accordion.Toggle>
                                       {/*<Accordion.Collapse eventKey="1">*/}
                                       {/*    <Card.Body><a href="#">All Books</a> </Card.Body>*/}
                                       {/*</Accordion.Collapse>*/}
                                   </Card>

                                   <Card>
                                       <Accordion.Toggle as={Card.Header} eventKey="2">
                                           <FontAwesomeIcon className="siteNavIcon" icon={faCaretRight}/>   Electronics Device
                                       </Accordion.Toggle>
                                       {/*<Accordion.Collapse eventKey="2">*/}
                                       {/*    <Card.Body>Hello! I'm another body</Card.Body>*/}
                                       {/*</Accordion.Collapse>*/}
                                   </Card>
                                   <Card>
                                       <Accordion.Toggle as={Card.Header} eventKey="3">
                                           <FontAwesomeIcon className="siteNavIcon" icon={faCaretRight}/>   Electronics Accessorise
                                       </Accordion.Toggle>
                                       {/*<Accordion.Collapse eventKey="3">*/}
                                       {/*    <Card.Body>Hello! I'm another body</Card.Body>*/}
                                       {/*</Accordion.Collapse>*/}
                                   </Card>
                                   <Card>
                                       <Accordion.Toggle as={Card.Header} eventKey="4">
                                           <FontAwesomeIcon className="siteNavIcon" icon={faCaretRight}/>   Leather Goods
                                       </Accordion.Toggle>
                                       {/*<Accordion.Collapse eventKey="4">*/}
                                       {/*    <Card.Body>Hello! I'm another body</Card.Body>*/}
                                       {/*</Accordion.Collapse>*/}
                                   </Card>
                                   <Card>
                                       <Accordion.Toggle as={Card.Header} eventKey="5">
                                           <FontAwesomeIcon className="siteNavIcon" icon={faCaretRight}/>  Men Fashion
                                       </Accordion.Toggle>
                                       {/*<Accordion.Collapse eventKey="5">*/}
                                       {/*    <Card.Body>Hello! I'm another body</Card.Body>*/}
                                       {/*</Accordion.Collapse>*/}
                                   </Card>
                                   <Card>
                                       <Accordion.Toggle as={Card.Header} eventKey="6">
                                           <FontAwesomeIcon className="siteNavIcon" icon={faCaretRight}/>   Women fashion
                                       </Accordion.Toggle>
                                       {/*<Accordion.Collapse eventKey="6">*/}
                                       {/*    <Card.Body>Hello! I'm another body</Card.Body>*/}
                                       {/*</Accordion.Collapse>*/}
                                   </Card>
                                   <Card>
                                       <Accordion.Toggle as={Card.Header} eventKey="7">
                                           <FontAwesomeIcon className="siteNavIcon" icon={faCaretRight}/>   Health and Beauty
                                       </Accordion.Toggle>
                                       {/*<Accordion.Collapse eventKey="7">*/}
                                       {/*    <Card.Body>Hello! I'm another body</Card.Body>*/}
                                       {/*</Accordion.Collapse>*/}
                                   </Card>
                               </Accordion>

                           </Col>

                          <Col sm={12} md={12} lg={9}>
                    <div>
                            <Slider {...settings}>
                            <div>
                                <img className="TopBannarImg" src={delivary3} alt="delivary"/>
                            </div>
                            <div>
                            <img className="TopBannarImg" src={delivary4} alt="delivary"/>
                            </div>
                            <div>
                            <img className="TopBannarImg" src={delivary3} alt="delivary"/>
                            </div>
                            <div>
                            <img className="TopBannarImg" src={delivary4} alt="delivary"/>
                            </div>

                            </Slider>
                    </div>

                            </Col>
                       </Row>

                    </Container>


            </Fragment>
        );
    }
}

export default TopBennar;