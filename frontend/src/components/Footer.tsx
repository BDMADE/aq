import React from 'react';
import Nav from "./Footer/Nav";
import SocialLinkList from "./Footer/SocialLinkList";
import FooterDetails from "./Footer/FooterDetails";
import FooterAddress from "./Footer/FooterAddress";
import FooterTermsLinks from "./Footer/FooterTermsLinks";

const Footer = () => {
    return (
        <footer className="ct-footer">
            <div className="container-fluid">
                <Nav/>
                <div id="absolute-footer">
                    <div className="row">
                        <SocialLinkList/>
                        <FooterDetails/>
                        <FooterAddress/>
                        <FooterTermsLinks/>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
