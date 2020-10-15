import React, {Component, Fragment} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

class BooksTopNav extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                <Nav variant="tabs " style={{marginTop:'21px'}} defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home"> বিষয় ভিতি্তক বই <FontAwesomeIcon icon={faAngleDown} className=""> </FontAwesomeIcon></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">লেখক<FontAwesomeIcon icon={faAngleDown} className="ml-1"> </FontAwesomeIcon></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" >প্রকাশনী <FontAwesomeIcon icon={faAngleDown} className=""> </FontAwesomeIcon> </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3" >ইসলামিক বই

                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-4" >গিফ্ট বক্স

                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-5" >বেস্ট সেলস

                        </Nav.Link>
                    </Nav.Item>

                </Nav>
                </Container>

            </Fragment>
        );
    }
}

export default BooksTopNav;