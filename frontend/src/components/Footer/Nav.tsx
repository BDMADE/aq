import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
    return(
        <nav id="footer-navigation">
            <ul id="menu-menu-1" className="menu">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-114"><Link to="/memberships">Memberships</Link></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-176"><Link to="/board-of-directors">Board Directors</Link></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-299"><Link to="/events">Events</Link></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-113"><Link to="/exhibitions">Exhibitions</Link></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-109"><Link to="/artists">Artists</Link></li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-222"><Link to="/support-us">Donations</Link></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-112"><Link to="/contact-us">Contact Us</Link></li>
            </ul>
            <Link to="#top" className="ct-smooth-scroll" id="ct-scroll-top"><em className="ti-angle-up" /> Back to top of the page</Link>
        </nav>);
}

export default Nav;
