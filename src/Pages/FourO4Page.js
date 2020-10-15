import React, {Component, Fragment} from 'react';
import TopNavbar from "../Component/TopNavbar";
import BooksTopNav from "../Component/Books/BooksTopNav";
import BooksTopBanner from "../Component/Books/BooksTopBanner";
import BooksCatagoryList from "../Component/Books/Books-catagory-List";
import StockBooks from "../Component/Books/StockBooks";
import Footer from "../Component/Footer";
import FourO4 from "../Component/FourO4";


class FourO4Page extends Component {
    render() {
        return (
            <Fragment>

                    <TopNavbar/>
                     <FourO4/>
                    <Footer/>


            </Fragment>
        );
    }
}

export default FourO4Page;