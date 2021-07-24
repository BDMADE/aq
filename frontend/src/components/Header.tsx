import React from 'react';
import { Link } from 'react-router-dom';
import logoBlack from '../images/branding/logo-black.png';
import logoBlackSmall from '../images/branding/logo-black-small.png';

const Header = () => {
    return (
        <header className="ct-header">
            <div className="ct-header__wrapper">
                <div className="container-fluid">
                    <div className="ct-header__toolbar"/>
                    <div className="ct-header__logo-nav">
                        <Link to="/" className="ct-header__logo">
                            <img className="ct-logo__image" alt="Art Quest Canada" src={logoBlack} srcSet={logoBlackSmall}/>
                        </Link>
                        <label id="ct-main-nav__toggle-navigation" htmlFor="ct-main-nav__toggle-navigation-main">Menu <i className="ti-align-justify" /></label>
                        <div id="ct-main-nav">
                            <input type="checkbox" hidden id="ct-main-nav__toggle-navigation-main" />
                                <nav id="ct-main-nav__wrapper">
                                    <ul id="menu-menu" className="ct-main-navigation">
                                        <li id="menu-item-114" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-114"><a href="/memberships">About</a>
                                        <ul className="sub-menu">
                                                <li id="menu-item-143" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-143"><Link to="/memberships">Memberships</Link></li>
                                                <li id="menu-item-144" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-144"><Link to="/board-of-directors">Board of Directors</Link></li>
                                                <li id="menu-item-145" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-145"><Link to="/photo-gallery">Photo Gallery</Link></li>
                                                <li id="menu-item-146" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-146"><Link to="/support-us">Support/Donations</Link></li>
                                            </ul>
                                        </li>
                                        <li id="menu-item-176" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-176"><Link to="/events">Events</Link></li>
                                        <li id="menu-item-299" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-299"><Link to="/exhibitions">Exhibitions</Link></li>
                                        <li id="menu-item-113" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-113"><Link to="/artists">Artists</Link></li>
                                        <li id="menu-item-109" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-109"><Link to="/archive">Archive</Link></li>
                                        <li id="menu-item-112" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-112"><Link to="/contact-us">Contact Us</Link></li>
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
