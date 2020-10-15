import React, {Component, Fragment} from 'react';
import {Button, ButtonGroup, ButtonToolbar, Card, Col, Container, Row} from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import booksCover from '../../Images/bookcover.png';
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class StockBooks extends Component {
    render() {
        const settings = {
            arrows:true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 2,
            autoplay: false,
            speed: 1000,
            autoplaySpeed: 1000,
            cssEase: "linear"
        };
        return (
            <Fragment>
                <Container >

                        <div className="books-catagory-main">
                            <h2>Popular items </h2><hr/>
                            <Slider {...settings}>
                                <div >
                                    <Card className="mr-2 stock-books-card">
                                        <Card.Img variant="top stock-books-card-img"  src={booksCover} />
                                        <Card.Body>
                                            <Card.Title>Book Title</Card.Title>
                                            <Card.Text>
                                               Tk.250
                                            </Card.Text>
                                            <ButtonToolbar aria-label="Toolbar with button groups">
                                                <ButtonGroup className="mr-2" aria-label="First group">
                                                    <Button variant="outline-info">View details</Button>
                                                </ButtonGroup>
                                                <ButtonGroup className="mr-2" aria-label="Second group">
                                                    <Button variant="outline-primary stock-books-card-btn"><FontAwesomeIcon icon={faShoppingCart} className="cart" /></Button>
                                                </ButtonGroup>
                                            </ButtonToolbar>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="mr-2 stock-books-card">
                                        <Card.Img variant="top stock-books-card-img" style={{height:'150px'}} src={booksCover} />
                                        <Card.Body>
                                            <Card.Title>Book Title</Card.Title>
                                            <Card.Text>
                                                Tk.250
                                            </Card.Text>
                                            <ButtonToolbar aria-label="Toolbar with button groups">
                                                <ButtonGroup className="mr-2" aria-label="First group">
                                                    <Button variant="outline-info">View details</Button>
                                                </ButtonGroup>
                                                <ButtonGroup className="mr-2" aria-label="Second group">
                                                    <Button variant="outline-primary stock-books-card-btn"><FontAwesomeIcon icon={faShoppingCart} className="cart" /></Button>
                                                </ButtonGroup>
                                            </ButtonToolbar>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="mr-2 stock-books-card">
                                        <Card.Img variant="top stock-books-card-img" style={{height:'150px'}} src={booksCover} />
                                        <Card.Body>
                                            <Card.Title>Book Title</Card.Title>
                                            <Card.Text>
                                                Tk.250
                                            </Card.Text>
                                            <ButtonToolbar aria-label="Toolbar with button groups">
                                                <ButtonGroup className="mr-2" aria-label="First group">
                                                    <Button variant="outline-info">View details</Button>
                                                </ButtonGroup>
                                                <ButtonGroup className="mr-2" aria-label="Second group">
                                                    <Button variant="outline-primary stock-books-card-btn"><FontAwesomeIcon icon={faShoppingCart} className="cart" /></Button>
                                                </ButtonGroup>
                                            </ButtonToolbar>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="mr-2 stock-books-card">
                                        <Card.Img variant="top stock-books-card-img" style={{height:'150px'}} src={booksCover} />
                                        <Card.Body>
                                            <Card.Title>Book Title</Card.Title>
                                            <Card.Text>
                                                Tk.250
                                            </Card.Text>
                                            <ButtonToolbar aria-label="Toolbar with button groups">
                                                <ButtonGroup className="mr-2" aria-label="First group">
                                                    <Button variant="outline-info">View details</Button>
                                                </ButtonGroup>
                                                <ButtonGroup className="mr-2" aria-label="Second group">
                                                    <Button variant="outline-primary stock-books-card-btn"><FontAwesomeIcon icon={faShoppingCart} className="cart" /></Button>
                                                </ButtonGroup>
                                            </ButtonToolbar>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="mr-2 stock-books-card">
                                        <Card.Img variant="top stock-books-card-img" style={{height:'150px'}} src={booksCover} />
                                        <Card.Body>
                                            <Card.Title>Book Title</Card.Title>
                                            <Card.Text>
                                                Tk.250
                                            </Card.Text>
                                            <ButtonToolbar aria-label="Toolbar with button groups">
                                                <ButtonGroup className="mr-2" aria-label="First group">
                                                    <Button variant="outline-info">View details</Button>
                                                </ButtonGroup>
                                                <ButtonGroup className="mr-2" aria-label="Second group">
                                                    <Button variant="outline-primary stock-books-card-btn"><FontAwesomeIcon icon={faShoppingCart} className="cart" /></Button>
                                                </ButtonGroup>
                                            </ButtonToolbar>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="mr-2 stock-books-card">
                                        <Card.Img variant="top stock-books-card-img" style={{height:'150px'}} src={booksCover} />
                                        <Card.Body>
                                            <Card.Title>Book Title</Card.Title>
                                            <Card.Text>
                                                Tk.250
                                            </Card.Text>
                                            <ButtonToolbar aria-label="Toolbar with button groups">
                                                <ButtonGroup className="mr-2" aria-label="First group">
                                                    <Button variant="outline-info">View details</Button>
                                                </ButtonGroup>
                                                <ButtonGroup className="mr-2" aria-label="Second group">
                                                    <Button variant="outline-primary stock-books-card-btn"><FontAwesomeIcon icon={faShoppingCart} className="cart" /></Button>
                                                </ButtonGroup>
                                            </ButtonToolbar>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="mr-2 stock-books-card">
                                        <Card.Img variant="top stock-books-card-img" style={{height:'150px'}} src={booksCover} />
                                        <Card.Body>
                                            <Card.Title>Book Title</Card.Title>
                                            <Card.Text>
                                                Tk.250
                                            </Card.Text>
                                            <ButtonToolbar aria-label="Toolbar with button groups">
                                                <ButtonGroup className="mr-2" aria-label="First group">
                                                    <Button variant="outline-info">View details</Button>
                                                </ButtonGroup>
                                                <ButtonGroup className="mr-2" aria-label="Second group">
                                                    <Button variant="outline-primary stock-books-card-btn"><FontAwesomeIcon icon={faShoppingCart} className="cart" /></Button>
                                                </ButtonGroup>
                                            </ButtonToolbar>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="mr-2 stock-books-card">
                                        <Card.Img variant="top stock-books-card-img" style={{height:'150px'}} src={booksCover} />
                                        <Card.Body>
                                            <Card.Title>Book Title</Card.Title>
                                            <Card.Text>
                                                Tk.250
                                            </Card.Text>
                                            <ButtonToolbar aria-label="Toolbar with button groups">
                                                <ButtonGroup className="mr-2" aria-label="First group">
                                                    <Button variant="outline-info">View details</Button>
                                                </ButtonGroup>
                                                <ButtonGroup className="mr-2" aria-label="Second group">
                                                    <Button variant="outline-primary stock-books-card-btn"><FontAwesomeIcon icon={faShoppingCart} className="cart" /></Button>
                                                </ButtonGroup>
                                            </ButtonToolbar>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="mr-2 stock-books-card">
                                        <Card.Img variant="top stock-books-card-img" style={{height:'150px'}} src={booksCover} />
                                        <Card.Body>
                                            <Card.Title>Book Title</Card.Title>
                                            <Card.Text>
                                                Tk.250
                                            </Card.Text>
                                            <ButtonToolbar aria-label="Toolbar with button groups">
                                                <ButtonGroup className="mr-2" aria-label="First group">
                                                    <Button variant="outline-info">View details</Button>
                                                </ButtonGroup>
                                                <ButtonGroup className="mr-2" aria-label="Second group">
                                                    <Button variant="outline-primary stock-books-card-btn"><FontAwesomeIcon icon={faShoppingCart} className="cart" /></Button>
                                                </ButtonGroup>
                                            </ButtonToolbar>
                                        </Card.Body>
                                    </Card>
                                </div>

                            </Slider>
                        </div>

                </Container>
            </Fragment>
        );
    }
}

export default StockBooks;