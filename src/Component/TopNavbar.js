import React, {Component, Fragment, useState} from 'react';
import {Button, Container, Dropdown, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faBell } from "@fortawesome/free-regular-svg-icons/faBell";



class TopNavbar extends Component {
    render() {
        const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
            <a
                href=""
                ref={ref}
                onClick={(e) => {
                    e.preventDefault();
                    onClick(e);
                }}
            >
                {children}
                &#x25bc;
            </a>
        ));
        const CustomMenu = React.forwardRef(
            ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
                const [value, setValue] = useState('');

                return (
                    <div
                        ref={ref}
                        style={style}
                        className={className}
                        aria-labelledby={labeledBy}
                    >
                        <FormControl
                            autoFocus
                            className="mx-3 my-2 w-auto"
                            placeholder="Type to filter..."
                            onChange={(e) => setValue(e.target.value)}
                            value={value}
                        />
                        <ul className="list-unstyled">
                            {React.Children.toArray(children).filter(
                                (child) =>
                                    !value || child.props.children.toLowerCase().startsWith(value),
                            )}
                        </ul>
                    </div>
                );
            },
        );

        return (
            <Fragment>
                <Container>
                    <div >
                        <h2 className="text-center">Welcome to<span className="eshop"> E</span>shop</h2>
                    </div>
                </Container>

                <Container fluid={true} className="TopNav ">
                <Navbar bg="primary" variant="dark fixed-top" >
                    <Navbar.Brand href="#home">ESHOP</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Register</Nav.Link>
                        <Nav.Link href="#">Sign In</Nav.Link>
                        <Nav.Link href="#">Watch List</Nav.Link>
                        {/*=============================*/}



                        {/*// The forwardRef is important!!*/}
                        {/*// Dropdown needs access to the DOM node in order to position the Menu*/}


                        {/*// forwardRef again here!*/}
                        {/*// Dropdown needs access to the DOM of the Menu to measure it*/}

                        {/*render(*/}
                        <Dropdown>
                            <Dropdown.Toggle as={CustomToggle}className="megaMenu" id="dropdown-custom-components">
                                Custom toggle
                            </Dropdown.Toggle>

                            <Dropdown.Menu as={CustomMenu}>
                                <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                                <Dropdown.Item eventKey="3" active>
                                    Orange
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>




                       {/*==================== */}
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button className="Search" variant="outline-light">Search</Button>
                    </Form>
                    <FontAwesomeIcon icon={faBell} className="Bell" />
                    <FontAwesomeIcon icon={faShoppingCart} className="cart" />
                </Navbar>
                </Container>
            </Fragment>
        );
    }
}

export default TopNavbar;