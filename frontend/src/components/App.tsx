import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './Header';
import Body from "./Body";
import Footer from "./Footer";

const App = () => {
    return (
        <Router>
            <body className="home page-template-default page page-id-2 woocommerce-no-js ct-layout--full ct-layout--fixed ct-layout--with-slider ct-hero--without-image ct-menu--align-right ct-menu--floating ct-menu--normal  ct-content-with-vc wpb-js-composer js-comp-ver-5.7 vc_responsive">
            <div className="ct-site">
                <Header/>
                <Body />
                <Footer/>
            </div>
            </body>
        </Router>
    );
};

export default App;
