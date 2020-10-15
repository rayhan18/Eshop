import React, {Component, Fragment} from 'react';
import { Card, Col, Container, Row} from "react-bootstrap";
import Book1 from '../Images/book1.png';
import Mobile from '../Images/mobile.png';
import watch from '../Images/watch.png';
import headphone from '../Images/headphone-159569_1280.png';
import bag from '../Images/bag.png';
import arepods from '../Images/arepods.png';
import pice from '../Images/3pice.png';
import pice2 from '../Images/3pice2.png';
import shart2 from '../Images/shart.png';
import tshart2 from '../Images/tshart2.png';
import panjabi from '../Images/panjabi.png';

class Allcategorice extends Component {
    render() {

        return (
            <Fragment>
                <div className="featureHeading">
                    <h3>All Categorise</h3>
                    <h5>Exclusive Product,You May Need</h5>
                </div>

                <Container>
                    <Row className="feature-product">
                        <Col sm={12} md={6} lg={2}>
                            <Card className="feature_Card">
                                <Card.Img  src={Book1} />
                                <Card.Body>
                                    <Card.Title>Books</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={2}>
                            <Card className="feature_Card">
                                <Card.Img className="mobile-img" src={Mobile} />
                                <Card.Body>
                                    <Card.Title>Mobile</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={2}>
                            <Card className="feature_Card ">
                                <Card.Img style={{width:"80%"}} src={bag} />
                                <Card.Body>
                                    <Card.Title>ledar Bag</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} md={6} lg={2}>
                            <Card className="feature_Card">
                                <Card.Img className="headPhone_img" src={headphone} />
                                <Card.Body>
                                    <Card.Title>Headphone</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={2}>
                            <Card className="feature_Card">
                                <Card.Img className="watch_img" src={watch} />
                                <Card.Body>
                                    <Card.Title>Watch</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={2}>
                            <Card className="feature_Card">
                                <Card.Img className=" arepod" src={arepods} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={6} lg={2}>
                            <Card className="feature_Card">
                                <Card.Img className="pice" src={pice} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={2}>
                            <Card className="feature_Card">
                                <Card.Img className="pice2" src={pice2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={2}>
                            <Card className="feature_Card">
                                <Card.Img className="panjabi" src={panjabi} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={2}>
                            <Card className="feature_Card">
                                <Card.Img className="shart" src={shart2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={2}>
                            <Card className="feature_Card">
                                <Card.Img className="shart" src={shart2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={2}>
                            <Card className="feature_Card">
                                <Card.Img className="t-shart" src={tshart2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Allcategorice;

