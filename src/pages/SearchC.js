import React from 'react';
import Search from "../components/Search";
import Header from "../components/header";
import Footer from "../components/footer";
import Email from "../components/email";

const SearchC = () => {
    return (
        <div>
            <Header/>
            <Search/>
            <Email/>
            <Footer/>
        </div>
    );
};

export default SearchC;