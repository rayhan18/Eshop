import React, {Component, Fragment} from 'react';
import {Breadcrumb, Button, ButtonGroup, ButtonToolbar, Card, Col, Container, Media, Row} from "react-bootstrap";
import homaun from '../../Images/homaunAhmed.png';
import booksCover from "../../Images/bookcover.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import demoBooks from '../../Images/demobooks.png';

class Writer extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={3}>
                            <div className="vertical-menu">
                                <a href="#" className="active">Home</a>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                                <a href="#">Link 4</a>
                            </div>
                            <div className="vertical-menu">
                                <a href="#" className="active">Home</a>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                                <a href="#">Link 4</a>
                            </div>
                            <div className="vertical-menu-2">
                                <a href="#" className="active">Home</a>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                                <a href="#">Link 4</a>
                                <a href="#">Link 5</a>
                                <a href="#">Link 6</a>
                                <a href="#">Link 7</a>
                                <a href="#">Link 8</a>
                                <a href="#">Link 9</a>
                                <a href="#">Link 10</a>
                            </div>
                            <div className="vertical-menu-2">
                                <a href="#" className="active">Home</a>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                                <a href="#">Link 4</a>
                                <a href="#">Link 5</a>
                                <a href="#">Link 6</a>
                                <a href="#">Link 7</a>
                                <a href="#">Link 8</a>
                                <a href="#">Link 9</a>
                                <a href="#">Link 10</a>
                            </div>
                        </Col>


                        <Col sm={12} md={6} lg={9}>
                            <div>
                                <Breadcrumb className="top-fixd mt-1">
                                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                    <Breadcrumb.Item href="#">
                                        Library
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                            <Media className="writerMedia">
                                <img className="align-self-center mr-3 mediaImg" src={homaun} alt="writer"/>
                                <Media.Body>
                                    <h5>Media Heading</h5>
                                    <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                        Donec lacinia congue felis in faucibus.
                                    </p>
                                </Media.Body>
                            </Media>
                        </Col>
                        <Col sm={12} md={6} lg={3} className="">

                            <Card className="mr-2 writer-books-card">
                                <Card.Img variant="top writer-books-cardImg "  src={booksCover} />
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

                        </Col>
                        <Col sm={12} md={6} lg={3} className="">

                            <Card  className="mr-2 writer-books-card">
                                <Card.Img variant="top writer-books-cardImg "  src={booksCover} />
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

                        </Col>
                        <Col sm={12} md={6} lg={3} className="">

                            <Card className="mr-2 writer-books-card">
                                <Card.Img variant="top writer-books-cardImg "  src={demoBooks} />
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

                        </Col>
                    </Row>
                    <Row className="writer-books-row-2">

                        <Col sm={12} md={6} lg={3} className="">
                            <Card className="mr-2 writer-books-card-2">
                                <Card.Img variant="top writer-books-cardImg "  src={demoBooks} />
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
                        </Col>

                        <Col sm={12} md={6} lg={3} className="">
                            <Card className="mr-2 writer-books-card-2">
                                <Card.Img variant="top writer-books-cardImg" src={demoBooks} />
                                <Card.Body>
                                    <Card.Title>Book Title</Card.Title>
                                    <Card.Text> Tk.25 </Card.Text>
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
                        </Col>
                        <Col sm={12} md={6} lg={3} className="">
                            <Card className="mr-2 writer-books-card-2">
                                <Card.Img variant="top writer-books-cardImg" src={demoBooks} />
                                <Card.Body>
                                    <Card.Title>Book Title</Card.Title>
                                    <Card.Text> Tk.25 </Card.Text>
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
                        </Col>
                    </Row>
                    <Row className="writer-books-row-3">
                    <Col sm={12} md={6} lg={3} className="">
                        <Card className="mr-2 writer-books-card-3">
                            <Card.Img variant="top writer-books-cardImg" src={demoBooks} />
                            <Card.Body>
                                <Card.Title>Book Title</Card.Title>
                                <Card.Text> Tk.25 </Card.Text>
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
                    </Col>

                    <Col sm={12} md={6} lg={3} className="">
                        <Card className="mr-2 writer-books-card-3">
                            <Card.Img variant="top writer-books-cardImg" src={demoBooks} />
                            <Card.Body>
                                <Card.Title>Book Title</Card.Title>
                                <Card.Text> Tk.25 </Card.Text>
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
                    </Col>
                    <Col sm={12} md={6} lg={3} className="">
                        <Card className="mr-2 writer-books-card-3">
                            <Card.Img variant="top writer-books-cardImg" src={demoBooks} />
                            <Card.Body>
                                <Card.Title>Book Title</Card.Title>
                                <Card.Text> Tk.25 </Card.Text>
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
                    </Col>
                </Row>

                    <Row className="writer-books-row-3">
                        <Col sm={12} md={6} lg={3} className="">
                            <Card className="mr-2 writer-books-card-3">
                                <Card.Img variant="top writer-books-cardImg" src={demoBooks} />
                                <Card.Body>
                                    <Card.Title>Book Title</Card.Title>
                                    <Card.Text> Tk.25 </Card.Text>
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
                        </Col>

                        <Col sm={12} md={6} lg={3} className="">
                            <Card className="mr-2 writer-books-card-3">
                                <Card.Img variant="top writer-books-cardImg" src={demoBooks} />
                                <Card.Body>
                                    <Card.Title>Book Title</Card.Title>
                                    <Card.Text> Tk.25 </Card.Text>
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
                        </Col>
                        <Col sm={12} md={6} lg={3} className="">
                            <Card className="mr-2 writer-books-card-3">
                                <Card.Img variant="top writer-books-cardImg" src={demoBooks} />
                                <Card.Body>
                                    <Card.Title>Book Title</Card.Title>
                                    <Card.Text> Tk.25 </Card.Text>
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
                        </Col>
                    </Row>
                    <Row className="writer-books-row-3">
                        <Col sm={12} md={6} lg={3} className="">
                            <Card className="mr-2 writer-books-card-3">
                                <Card.Img variant="top writer-books-cardImg" src={demoBooks} />
                                <Card.Body>
                                    <Card.Title>Book Title</Card.Title>
                                    <Card.Text> Tk.25 </Card.Text>
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
                        </Col>

                        <Col sm={12} md={6} lg={3} className="">
                            <Card className="mr-2 writer-books-card-3">
                                <Card.Img variant="top writer-books-cardImg" src={demoBooks} />
                                <Card.Body>
                                    <Card.Title>Book Title</Card.Title>
                                    <Card.Text> Tk.25 </Card.Text>
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
                        </Col>
                        <Col sm={12} md={6} lg={3} className="">
                            <Card className="mr-2 writer-books-card-3">
                                <Card.Img variant="top writer-books-cardImg" src={demoBooks} />
                                <Card.Body>
                                    <Card.Title>Book Title</Card.Title>
                                    <Card.Text> Tk.25 </Card.Text>
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
                        </Col>
                    </Row>
                    <Row className="writer-books-row-3">
                        <Col sm={12} md={6} lg={3} className="">
                            <Card className="mr-2 writer-books-card-3">
                                <Card.Img variant="top writer-books-cardImg" src={demoBooks} />
                                <Card.Body>
                                    <Card.Title>Book Title</Card.Title>
                                    <Card.Text> Tk.25 </Card.Text>
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
                        </Col>

                        <Col sm={12} md={6} lg={3} className="">
                            <Card className="mr-2 writer-books-card-3">
                                <Card.Img variant="top writer-books-cardImg" src={demoBooks} />
                                <Card.Body>
                                    <Card.Title>Book Title</Card.Title>
                                    <Card.Text> Tk.25 </Card.Text>
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
                        </Col>
                        <Col sm={12} md={6} lg={3} className="">
                            <Card className="mr-2 writer-books-card-3">
                                <Card.Img variant="top writer-books-cardImg" src={demoBooks} />
                                <Card.Body>
                                    <Card.Title>Book Title</Card.Title>
                                    <Card.Text> Tk.25 </Card.Text>
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
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default Writer;
