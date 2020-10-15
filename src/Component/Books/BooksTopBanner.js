import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import  art from '../../Images/art.jpg';
import  bg5 from '../../Images/bg5.png';
import  bsckg from '../../Images/backg.jpg';
import  delivary from '../../Images/delivary4.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class BooksTopBanner extends Component {
    render() {
        const settings = {
            autoplaySpeed:3000,
            autoplay:true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Fragment>
                <Container  className="">
                    <div>
                        <Slider {...settings}>
                            <div>
                               <img className="books-fade-carousel" src={art}/>
                            </div>
                            <div>
                                <img className="books-fade-carousel" src={bsckg}/>
                            </div>
                            <div>
                                <img className="books-fade-carousel" src={bg5}/>
                            </div>
                            <div>
                                <img className="books-fade-carousel" src={delivary}/>
                            </div>

                        </Slider>
                    </div>



                </Container>
                <Container className="bg-light p-4">
                    <Row className="mt-2">
                        <Col >
                            <Card> <a href="#" >
                                <Card.Body className="text-center Books-card-offer">
                                    <Card.Text className="text-white">
                                        আপনার প্রীয়জনের আদর্শ উপহার ধম্রীয় বই
                                        <span className="text-warning"> Click Heare</span>
                                    </Card.Text>
                                </Card.Body>
                            </a>
                            </Card>
                        </Col>
                        <Col >
                            <Card><a href="#" >

                                <Card.Body className="text-center Books-card-offer">
                                    <Card.Text className="text-white">
                                        ক্যরিয়ার কালেকশান<br/>সর্বউচ্চ <span style={{width:"30px"}}><strong>50%</strong></span> ছার<br/>
                                        <span className="text-warning"> Click Heare</span>
                                    </Card.Text>
                                </Card.Body>
                            </a>
                            </Card>
                        </Col>
                        <Col >
                            <Card><a href="#" >

                                <Card.Body className="text-center Books-card-offer">
                                    <Card.Text className="text-white">
                                    ভ্রতি,নিয়োগ,প্রস্ত্তি মুলক সকল বই  <span style={{width:"50px"}}>55% ছার</span>
                                        <span className="text-warning"> Click Heare</span>
                                    </Card.Text>
                                </Card.Body>
                            </a>
                            </Card>
                        </Col>
                        <Col >
                            <Card><a href="#" >

                                <Card.Body className="text-center Books-card-offer">
                                    <Card.Text className="text-white">
                                        নতুন সংসক্রন<br/>
                                      কলেজ,অনাস্র সকল বই
                                        <span className="text-warning"> Click Heare</span>
                                    </Card.Text>
                                </Card.Body>
                            </a>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default BooksTopBanner;