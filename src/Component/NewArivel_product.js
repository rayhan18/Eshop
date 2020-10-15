import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Mobile from '../Images/mobile.png';
import watch from '../Images/watch.png';
import book1 from '../Images/book1.png';
import headphone from '../Images/headphone-159569_1280.png';
import bag from '../Images/bag.png';

class NewArivelProduct extends Component {
    render() {
        const settings = {

            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed:3000
        };

        return (
            <Fragment>
                <div className="featureHeading">
                    <h3>New Arivel</h3>
                    <h5>Exclusive Product,You May Need</h5>
                </div>

                <Container>
                    <Row className="card-wrepar">
                        <Col sm={12} md={6} lg={4}>
                            <div>

                                <Slider {...settings}>
                                    <div>
                                        <Card style={{width:'285px',marginTop:'40px'}}>
                                            <Card.Img className="mobile-big-img" variant="top" src={Mobile} />
                                            <Card.Body>
                                                <Card.Text>
                                                    samsong sA10 - mobile<br/>
                                                    Tk-4500
                                                </Card.Text>
                                                <Button variant="primary">Buy Now</Button>{' '}
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div>
                                        <Card style={{width:'285px',marginTop:'40px'}}>
                                            <Card.Img className="mobile-big-img" variant="top" src={watch} />
                                            <Card.Body>
                                                <Card.Text>
                                                    samsong sA10 - mobile<br/>
                                                    Tk-4500
                                                </Card.Text>
                                                <Button variant="primary">Buy Now</Button>{' '}
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div>
                                        <Card style={{width:'285px',marginTop:'40px'}}>
                                            <Card.Img className="mobile-big-img" variant="top" src={headphone} />
                                            <Card.Body>
                                                <Card.Text>
                                                    samsong sA10 - mobile<br/>
                                                    Tk-4500
                                                </Card.Text>
                                                <Button variant="primary">Buy Now</Button>{' '}
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div>
                                        <Card style={{width:'285px',marginTop:'40px'}}>
                                            <Card.Img className="mobile-big-img" variant="top" src={bag} />
                                            <Card.Body>
                                                <Card.Text>
                                                    samsong sA10 - mobile<br/>
                                                    Tk-4500
                                                </Card.Text>
                                                <Button variant="primary">Buy Now</Button>{' '}
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div>
                                        <Card style={{width:'285px',marginTop:'40px'}}>
                                            <Card.Img className="mobile-big-img" variant="top" src={book1} />
                                            <Card.Body>
                                                <Card.Text>
                                                    samsong sA10 - mobile<br/>
                                                    Tk-4500
                                                </Card.Text>
                                                <Button variant="primary">Buy Now</Button>{' '}
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div>
                                        <Card style={{width:'285px',marginTop:'40px'}} className="bigCard">
                                            <Card.Img className="mobile-big-img" variant="top" src={Mobile} />
                                            <Card.Body>
                                                <Card.Text>
                                                    samsong sA10 - mobile<br/>
                                                    Tk-4500
                                                </Card.Text>
                                                <Button variant="primary">Buy Now</Button>{' '}
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Slider>
                            </div>

                        </Col>
                        <Col>
                            <div>
                                <Card style={{width:'285px',marginTop:'40px'}}>
                                    <Card.Img className="mobile-big-img" variant="top" src={Mobile} />
                                    <Card.Body>
                                        <Card.Text>
                                            samsong sA10 - mobile<br/>
                                            Tk-4500
                                        </Card.Text>
                                        <Button variant="primary">Add to Card</Button>{' '}
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>

                        <Col>
                            <div>
                                <Card style={{width:'285px',marginTop:'40px'}}>
                                    <Card.Img className="mobile-big-img" variant="top" src={Mobile} />
                                    <Card.Body>
                                        <Card.Text>
                                            samsong sA10 - mobile<br/>
                                            Tk-4500
                                        </Card.Text>
                                        <Button variant="primary">Add to Card</Button>{' '}
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default NewArivelProduct;