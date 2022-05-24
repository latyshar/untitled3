import Slider from "../components/slider";
import Cards from "../components/cards";
import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import Email from "../components/email";

const Main = () => {
    return (
        <div>
            <Header/>
            <Slider/>
            <Cards/>
            <Email/>
            <Footer/>
        </div>
    );
};

export default Main;