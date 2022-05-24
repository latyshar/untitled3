import Add from "../components/Add";
import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import Email from "../components/email";

const AddC = () => {
    return (
        <div>
            <Header/>
            <Add/>
            <Email/>
            <Footer/>
        </div>
    );
};

export default AddC;