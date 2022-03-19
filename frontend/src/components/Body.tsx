import React from 'react';
import { Route, Switch } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Memberships from "../pages/About/Memberships";
import Directors from "../pages/About/Directors";
import Support from "../pages/About/Support";
import Events from "../pages/Events";
import Exhibitions from "../pages/Exhibitions";
import Artists from "../pages/Artists";
import Archive from "../pages/Archive";
import Contact from "../pages/Contact";
import ArtistMember from "../pages/ArtistMember";
import PhotoGallery from "../pages/PhotoGallery";
import EventDetails from "./Event/Detail/EventDetails";
import ExhibitionDetails from "./Exhibition/Detail/ExhibitionDetails";

const Body = () => {
    return (
        <div className="ct-content">
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route path='/memberships' component={Memberships} />
                <Route path='/board-of-directors' component={Directors} />
                <Route path='/photo-gallery' component={PhotoGallery} />
                <Route path='/support-us' component={Support} />
                <Route exact path='/events' component={Events} />
                <Route path='/events/:id' component={EventDetails}/>
                <Route exact path='/exhibitions' component={Exhibitions} />
                <Route path='/exhibitions/:id' component={ExhibitionDetails}/>
                <Route exact path='/artists' component={Artists} />
                <Route path='/artists/:id' component={ArtistMember} />
                <Route exact path='/archives' component={Archive} />
                <Route exact path='/archives/:id' component={ArtistMember} />
                <Route path='/contact-us' component={Contact} />
            </Switch>
        </div>
    );
};

export default Body;
