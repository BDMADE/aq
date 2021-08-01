import React from 'react';
import SliderList from "../components/Slider/SliderList";
import { useQuery } from "@apollo/client";
import GET_HOMEPAGE_QUERY from "../queries/pages/HomepageQuery";
import Seo from "../components/Seo";

const Homepage = () => {
    let { loading, error, data } = useQuery(GET_HOMEPAGE_QUERY);
    if(loading) return (<p>Loading..</p>);
    if(error) return(<h4>Error! `${error.message}`</h4>);

    // seo data start
    let metaTitle = data.homepage.Seo.metaTitle;
    let metaDescription = data.homepage.Seo.metaDescription;
    let shareImage = `${process.env.REACT_APP_BACKEND_URL}` + data.homepage.Seo.shareImage[0].url;
    let twitterCard = data.homepage.Seo.twitterCardType;
    let twitterUsername = data.homepage.Seo.twitterUsername;
    // seo data end

    return (
        <>
        <Seo title={ metaTitle } description={ metaDescription } image={shareImage} twitterCardType={twitterCard}   twitterUsername={twitterUsername}/>
        { data.homepage.Slider && <SliderList /> }
        <div className="container-fluid">
            <article id="post-2" className="ct-page__entry-content post-2 page type-page status-publish hentry">
                <h3>This is Home page</h3>
            </article>
        </div>
        </>
    );
};

export default Homepage;
