import React, {Fragment} from 'react';
import './Css/style.css';
import './App.css';
import HomePage from "./Pages/HomePage";
import FourO4Page from "./Pages/FourO4Page";
import BooksPage from "./Pages/BooksPage";
import Writer from "./Component/Books/Writer";
import TopNavbar from "./Component/TopNavbar";
import Footer from "./Component/Footer";
import BooksTopNav from "./Component/Books/BooksTopNav";
import Pagination from "./Component/Pagination";



function App() {
  return (
    <Fragment>
        <TopNavbar/>
        <BooksTopNav/>
        <Writer/>
        <Pagination/>
        <Footer/>
    </Fragment>
  );
}

export default App;
