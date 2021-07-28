import React from 'react';
import SliderList from "../components/Slider/SliderList";

const Homepage = () => {
    return (
        <>
        <SliderList />
        <div className="container-fluid">
            <article id="post-2" className="ct-page__entry-content post-2 page type-page status-publish hentry">
                <h3>This is Home page</h3>
            </article>
        </div>
        </>
    );
};

export default Homepage;
