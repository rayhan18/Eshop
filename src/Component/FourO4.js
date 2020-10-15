import React, {Component, Fragment} from 'react';
import {Button, Container} from "react-bootstrap";

class FourO4 extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <div className="four04Page">

                        </div>
                    <div className="four04PageContent">
                        <h4>OH! you're lost.</h4>
                        <p className="four04PageContent_p">The page you are looking for does not exist.How you got here is a
                            mystory.but you van click the button to go to the home page</p>
                        <Button className=" btn btn-warning"><a href="#">Go HOME </a> </Button>
                        </div>

                </Container>

            </Fragment>
        );
    }
}

export default FourO4;