import React from 'react';
import Seo from "../components/Seo";
import {useQuery} from "@apollo/client";
import Banner from "../components/Common/Banner";
import getImageUrl from "../utils/getImageUrl";
import GET_ARTIST_PAGE_QUERY from "../queries/pages/ArtistQuery";
import ArtistDetails from "../components/Artist/ArtistDetails";

const ArtistMember = () => {
    let { loading, error, data } = useQuery(GET_ARTIST_PAGE_QUERY);
    if(loading) return (<p>Loading...</p>);
    if(error) return(<h4>Error!! `${error.message}`</h4>);

    // seo data start
    let metaTitle: string = data.artistPage.seo.metaTitle;
    let metaDescription: string = data.artistPage.seo.metaDescription;
    let shareImage: any = getImageUrl(data.artistPage.seo.shareImage[0]);
    let twitterCard: string = data.artistPage.seo.twitterCardType;
    let twitterUsername: string = data.artistPage.seo.twitterUsername;

    // board Members page data
    let bannerTitle: string = data.artistPage.title;
    let bannerUrl: string = data.artistPage.banner.url;

    // board Members page data settings
    let visibleTitle: boolean = data.artistPage.settings.visibleTitle;

    return (
        <>
            <Seo title={ metaTitle } description={ metaDescription } image={ shareImage } twitterCardType={ twitterCard } twitterUsername={ twitterUsername }/>
            <Banner title={ bannerTitle } image={ bannerUrl }  visibleTitle={visibleTitle} />
            <div className="container-fluid">
                <article id="post-2" className="ct-page__entry-content post-2 page type-page status-publish hentry">
                    <ArtistDetails/>
                </article>
            </div>
        </>
    );
};

export default ArtistMember;
