import React from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../images/branding/logo-white.png';
import logoWhiteSmall from '../images/branding/logo-white-small.png';


function openMobileMenu() {
    let menuBody = document.querySelector("#ct-main-nav");

    if (menuBody!= null) {
        if(menuBody.classList.contains("closed")) {
            menuBody.classList.remove("closed");
        }
    }
}

function closeMobileMenu() {
    let menuBody = document.querySelector("#ct-main-nav");

    if (menuBody!= null) {
        menuBody.classList.add("closed");
    }
}

const Header = () => {
    return (
        <header className="ct-header">
            <div className="ct-header__wrapper">
                <div className="container-fluid">
                    <div className="ct-header__toolbar"/>
                    <div className="ct-header__logo-nav">
                        <Link to="/" className="ct-header__logo">
                            <img className="ct-logo__image" alt="Art Quest Canada" src={logoWhite} srcSet={logoWhiteSmall}/>
                        </Link>
                        <label onClick={ openMobileMenu } id="ct-main-nav__toggle-navigation" htmlFor="ct-main-nav__toggle-navigation-main">Menu <i className="ti-align-justify" /></label>
                        <div id="ct-main-nav">
                            <input type="checkbox" hidden id="ct-main-nav__toggle-navigation-main" />
                            <nav id="ct-main-nav__wrapper">
                                <ul id="menu-menu" className="ct-main-navigation">
                                    <li id="menu-item-114" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-114"><span>About</span>
                                        <ul className="sub-menu">
                                            <li id="menu-item-143" onClick={ closeMobileMenu } className="menu-item menu-item-type-custom menu-item-object-custom menu-item-143"><Link to="/memberships">Memberships</Link></li>
                                            <li id="menu-item-144" onClick={ closeMobileMenu } className="menu-item menu-item-type-custom menu-item-object-custom menu-item-144"><Link to="/board-of-directors">Board of Directors</Link></li>
                                            <li id="menu-item-145" onClick={ closeMobileMenu } className="menu-item menu-item-type-custom menu-item-object-custom menu-item-145"><Link to="/photo-gallery">Photo Gallery</Link></li>
                                            <li id="menu-item-146" onClick={ closeMobileMenu } className="menu-item menu-item-type-custom menu-item-object-custom menu-item-146"><Link to="/support-us">Support/Donations</Link></li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-176" onClick={ closeMobileMenu } className="menu-item menu-item-type-post_type menu-item-object-page menu-item-176"><Link to="/events">Events</Link></li>
                                    <li id="menu-item-299" onClick={ closeMobileMenu } className="menu-item menu-item-type-post_type menu-item-object-page menu-item-299"><Link to="/exhibitions">Exhibitions</Link></li>
                                    <li id="menu-item-113" onClick={ closeMobileMenu } className="menu-item menu-item-type-post_type menu-item-object-page menu-item-113"><Link to="/artists">Artists</Link></li>
                                    <li id="menu-item-109" onClick={ closeMobileMenu } className="menu-item menu-item-type-post_type menu-item-object-page menu-item-109"><Link to="/archives">Archives</Link></li>
                                    <li id="menu-item-112" onClick={ closeMobileMenu } className="menu-item menu-item-type-post_type menu-item-object-page menu-item-112"><Link to="/contact-us">Contact Us</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
