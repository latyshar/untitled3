import Sliders from "../components/sliders";
import Cards from "../components/cards";
import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import Email from "../components/email";

const Main = () => {
    return (
        <div>
            <Header/>
            <Sliders/>
            <Cards/>
            <Email/>
            <Footer/>
        </div>
    );
};

export default Main;