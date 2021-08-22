import React from 'react';
import SliderList from "../components/Slider/SliderList";
import { useQuery } from "@apollo/client";
import GET_HOMEPAGE_QUERY from "../queries/pages/HomepageQuery";
import Seo from "../components/Seo";
import Details from "../components/Homepage/Details";
import Exhibitions from "../components/Exhibition/Exhibitions";

const Homepage = () => {
    let { loading, error, data } = useQuery(GET_HOMEPAGE_QUERY);
    if(loading) return (<p>Loading..</p>);
    if(error) return(<h4>Error! `${error.message}`</h4>);

    //TODO:: Have to use hook
    let shareImageUrl: string | 'undefined' = data.homepage.seo.shareImage[0];
    if (shareImageUrl !== undefined) {
        if (process.env.NODE_ENV === 'development') {
            shareImageUrl = `${process.env.REACT_APP_BACKEND_URL}${data.homepage.seo.shareImage[0].url}`;
        } else {
            shareImageUrl = `${data.membership.homepage.shareImage[0].url}`;
        }
    }

    // seo data start
    let metaTitle = data.homepage.seo.metaTitle;
    let metaDescription = data.homepage.seo.metaDescription;
    let shareImage = shareImageUrl;
    let twitterCard = data.homepage.seo.twitterCardType;
    let twitterUsername = data.homepage.seo.twitterUsername;
    // seo data end

    /* Section Home details start */
    let title = data.homepage.title;
    let description = data.homepage.description;
    /* Section Home details end */

    return (
        <>
        <Seo title={ metaTitle } description={ metaDescription } image={ shareImage } twitterCardType={ twitterCard } twitterUsername={ twitterUsername }/>
        { data.homepage.settings.sliders && <SliderList /> }
        <div className="container-fluid">
            <article id="post-2" className="ct-page__entry-content post-2 page type-page status-publish hentry">
                { data.homepage.settings.exhibitions && <Exhibitions /> }
            <Details title={ title }   description={ description }/>
            </article>
        </div>
        </>
    );
};

export default Homepage;
