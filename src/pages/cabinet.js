import React from 'react';
import Profile from "../components/profile";
import Card from "../components/cardred";
import Header from "../components/header";
import Footer from "../components/footer";
import Email from "../components/email";

const Cabinet = () => {
    return (
        <div>
            <Header/>
            <Profile/>
            <Card/>
            <Email/>
            <Footer/>
        </div>
    );
};

export default Cabinet;