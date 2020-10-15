import React, {Component, Fragment} from 'react';
import {Col, Container, Navbar, Row} from "react-bootstrap";
import google from '../Images/googleplay.png';
import appStore from '../Images/app store.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons/faTwitter";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import bkash from '../Images/bkas.png';
import roket from '../Images/roket.png';
import bank from '../Images/bank.png';
import chash2 from '../Images/chash2.png';

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true}>
                    <hr/>
                    <Row className="mt-5 bg-light p-3">
                        <Col sm={12} md={6} lg={3}  >
                            <h5>Buy</h5>
                            <a href="#" >Registration </a><br/>
                            <a href="#"> Returns & refunds</a><br/>
                            <a href="#"> Stores</a><br/>
                            <a href="#">  eShop guides</a><br/>
                        </Col>
                        <Col sm={12} md={6} lg={3} >
                            <h5>About eShop</h5>
                            <a href="#">Company info</a><br/>
                            <a href="#">   News</a><br/>
                            <a href="#">   Investors</a><br/>
                            <a href="#">  Careers</a><br/>
                            <a href="#"> Advertise with us</a><br/>
                               <a href="#"> Policies</a><br/>
                            <a href="#"> Trams and condition</a><br/>
                        </Col>
                        <Col sm={12} md={6} lg={3} >
                            <h5>Payment Method</h5>
                              <img style={{width:'30px',marginLeft:'5px'}} src={bkash} alt="biksa"/>
                            <img style={{width:'30px',marginLeft:'5px'}} src={roket} alt="roket"/>
                            <img style={{width:'30px',marginLeft:'5px'}} src={bank} alt="bank"/>
                            <img style={{width:'30px',marginLeft:'5px'}} src={chash2} alt="chash"/>
                        </Col>
                        <Col sm={12} md={6} lg={3} >
                            <h5>Download App</h5>
                            <img style={{width:"150px",marginTop:"10px"}} src={google} alt="google play"/>
                            <img style={{width:"150px",marginTop:"10px"}} src={appStore} alt="App store"/>
                            <h6 className="mt-2">Follow us</h6>
                            <FontAwesomeIcon icon={faFacebook} className="footer-social-link" />
                            <FontAwesomeIcon icon={faTwitter} className="footer-social-link" />
                            <FontAwesomeIcon icon={faInstagram} className="footer-social-link" />
                        </Col>
                    </Row>

                    <p className="bg-light text-center" style={{fontSize:'10px'}}>Copyright © 2020 eShop.com. All Rights Reserved. Accessibility, User Agreement, Privacy, Cookies, Do not sell my personal information and AdChoice</p>
                    <hr/>
                </Container>


            </Fragment>
        );
    }
}

export default Footer;