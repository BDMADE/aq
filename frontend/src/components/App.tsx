import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './Header';
import Body from "./Body";
import Footer from "./Footer";

const App = () => {
    return (
        <Router>
            <div className="ct-site">
                <Header/>
                <Body />
                <Footer/>
            </div>
        </Router>
    );
};

export default App;
