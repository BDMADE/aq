import React from 'react';
import { Route, Switch } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Memberships from "../pages/About/Memberships";
import Directors from "../pages/About/Directors";
import Gallery from "../pages/About/Gallery";
import Support from "../pages/About/Support";
import Events from "../pages/Events";
import Exhibitions from "../pages/Exhibitions";
import Artists from "../pages/Artists";
import Archive from "../pages/Archive";
import Contact from "../pages/Contact";

const Body = () => {
    return (
        <div className="ct-content">
            <div className="container-fluid">
                <article id="post-2" className="ct-page__entry-content post-2 page type-page status-publish hentry">
                    <Switch>
                        <Route exact path='/' component={Homepage} />
                        <Route path='/memberships' component={Memberships} />
                        <Route path='/board-of-directors' component={Directors} />
                        <Route path='/photo-gallery' component={Gallery} />
                        <Route path='/support-us' component={Support} />
                        <Route path='/events' component={Events} />
                        <Route path='/exhibitions' component={Exhibitions} />
                        <Route path='/artists' component={Artists} />
                        <Route path='/archive' component={Archive} />
                        <Route path='/contact-us' component={Contact} />
                    </Switch>
                </article>
            </div>
        </div>
    );
};

export default Body;
