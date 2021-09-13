import React from 'react';
import {useQuery} from "@apollo/client";
import getImageUrl from "../utils/getImageUrl";
import Seo from "../components/Seo";
import Banner from "../components/Common/Banner";
import GET_EXHIBITION_PAGE_QUERY from "../queries/pages/ExhibitionQuery";
import PresentExhibition from "../components/Exhibition/PresentExhibition";
import PastExhibition from "../components/Exhibition/PastExhibition";
import FutureExhibition from "../components/Exhibition/FutureExhibition";

const Exhibitions = () => {
    let { loading, error, data } = useQuery(GET_EXHIBITION_PAGE_QUERY);
    if(loading) return (<p>Loading...</p>);
    if(error) return(<h4>Error!! `${error.message}`</h4>);

    let shareImageUrl: any = getImageUrl(data.exhibitionPage.seo.shareImage[0])
    // seo data start
    let metaTitle: string = data.exhibitionPage.seo.metaTitle;
    let metaDescription: string = data.exhibitionPage.seo.metaDescription;
    let shareImage: any = shareImageUrl;
    let twitterCard: string = data.exhibitionPage.seo.twitterCardType;
    let twitterUsername: string = data.exhibitionPage.seo.twitterUsername;

    // event page data
    let bannerTitle: string = data.exhibitionPage.title;
    let bannerUrl: string = data.exhibitionPage.banner.url;

    // event page settings
    let visibleTitle: boolean = data.exhibitionPage.settings.visibleTitle;
    let visiblePastExhibition: boolean = data.exhibitionPage.settings.visiblePastCeremony;
    let visiblePresentExhibition: boolean = data.exhibitionPage.settings.visiblePresentCeremony;
    let visibleFutureExhibition: boolean = data.exhibitionPage.settings.visibleFutureCeremony;

    return (
        <>
            <Seo title={ metaTitle } description={ metaDescription } image={ shareImage } twitterCardType={ twitterCard }   twitterUsername={ twitterUsername }/>
            <Banner title={ bannerTitle } image={ bannerUrl } visibleTitle={visibleTitle} />
            <div className="container-fluid">
                <article id="post-2" className="ct-page__entry-content post-2 page type-page status-publish hentry">
                    { visiblePresentExhibition && <PresentExhibition/> }
                    { visiblePastExhibition && <PastExhibition/> }
                    { visibleFutureExhibition && <FutureExhibition/> }
                </article>
            </div>
        </>
    );
};

export default Exhibitions;
