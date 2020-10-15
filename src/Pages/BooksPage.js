import React, {Component, Fragment} from 'react';
import TopNavbar from "../Component/TopNavbar";
import BooksTopNav from "../Component/Books/BooksTopNav";
import BooksTopBanner from "../Component/Books/BooksTopBanner";
import BooksCatagoryList from "../Component/Books/Books-catagory-List";
import StockBooks from "../Component/Books/StockBooks";
import Footer from "../Component/Footer";

class BooksPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavbar/>
                <BooksTopNav/>
                <BooksTopBanner/>
                <BooksCatagoryList/>
                <StockBooks/>
                <StockBooks/>
                <StockBooks/>
                <Footer/>

            </Fragment>
        );
    }
}

export default BooksPage;