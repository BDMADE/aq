import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="ct-footer">
            <div className="container-fluid">
                <nav id="footer-navigation">
                    <ul id="menu-menu-1" className="menu"><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-114"><Link to="/memberships">Memberships</Link></li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-176"><Link to="/board-of-directors">Board Directors</Link></li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-299"><Link to="/events">Events</Link></li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-113"><Link to="/exhibitions">Exhibitions</Link></li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-109"><Link to="/artists">Artists</Link></li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-222"><Link to="/support-us">Donations</Link></li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-112"><Link to="/contact-us">Contact Us</Link></li>
                    </ul> <Link to="#top" className="ct-smooth-scroll" id="ct-scroll-top"><em className="ti-angle-up" /> Back to top of the page</Link>
                </nav>
                <div id="absolute-footer">
                    <div className="row">
                        <aside id="text-1" className="col-12 col-md-2  text-center text-md-left  sidebar-widget widget_text"> <div className="textwidget"><p><Link to="#"><i className="far fa-fw fa-facebook fab fa-lg " style={{}} /></Link> &nbsp;&nbsp;<Link to="#" target="_self" className="nice-scroll" rel="noopener"><i className="far fa-fw fa-twitter fab fa-lg " style={{}} /></Link> &nbsp;&nbsp;<Link to="#" target="_self" className="nice-scroll" rel="noopener"><i className="far fa-fw fa-instagram fab fa-lg " style={{}} /></Link> &nbsp;&nbsp;<Link to="#" target="_self" className="nice-scroll" rel="noopener"><i className="far fa-fw fa-pinterest fab  fa-lg " style={{}} /></Link></p>
                        </div>
                        </aside><aside id="text-2" className="col-12 col-md-4  text-center text-md-left  sidebar-widget widget_text"> <div className="textwidget"><p>Morbi odio eros, volutpat ut pharetra vitae, lobortis sed nibh. Donec sed odio operae, eu vulputate felis rhoncus. Quo usque tandem abutere, Catilina, patientia nostra? Etiam habebis sem dicantur.</p>
                    </div>
                    </aside><aside id="text-3" className="col-6 col-md-2  offset-md-2 text-center text-md-left ml-auto sidebar-widget widget_text"> <div className="textwidget"><p>Art Gallery WP<br />
                        36 Battersea Square, London<br />
                        Tel: 01624-621440</p>
                    </div>
                    </aside><aside id="text-4" className="col-6 col-md-2  offset-md-1 text-center text-md-left  sidebar-widget widget_text"> <div className="textwidget"><p>Terms &amp; conditions<br />
                        Privacy policy &amp; cookies<br />
                        Terms of use</p>
                    </div>
                    </aside> </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
