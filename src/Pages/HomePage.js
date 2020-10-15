import React, {Component, Fragment} from 'react';
import TopNavbar from "../Component/TopNavbar";
import TopBennar from "../Component/TopBennar";
import FeatureProduct from "../Component/FeatureProduct";
import NewArivelProduct from "../Component/NewArivel_product";
import Allcategorice from "../Component/Allcategorice";
import Footer from "../Component/Footer";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavbar/>
                <TopBennar/>
                <FeatureProduct/>
                <NewArivelProduct/>
                <Allcategorice/>
                <Footer/>
            </Fragment>
        );
    }
}

export default HomePage;