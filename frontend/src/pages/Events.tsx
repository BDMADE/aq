import React from 'react';
import {useQuery} from "@apollo/client";
import GET_EVENT_PAGE_QUERY from "../queries/pages/EventsQuery";
import getImageUrl from "../utils/getImageUrl";
import Seo from "../components/Seo";
import Banner from "../components/Common/Banner";
import PresentEvent from "../components/Event/PresentEvent";
import FutureEvent from "../components/Event/FutureEvent";
import PastEvent from "../components/Event/PastEvent";

const Events = () => {
    let { loading, error, data } = useQuery(GET_EVENT_PAGE_QUERY);
    if(loading) return (<p>Loading...</p>);
    if(error) return(<h4>Error!! `${error.message}`</h4>);

    let shareImageUrl: any = getImageUrl(data.eventsPage.seo.shareImage[0])
    // seo data start
    let metaTitle: string = data.eventsPage.seo.metaTitle;
    let metaDescription: string = data.eventsPage.seo.metaDescription;
    let shareImage: any = shareImageUrl;
    let twitterCard: string = data.eventsPage.seo.twitterCardType;
    let twitterUsername: string = data.eventsPage.seo.twitterUsername;

    // event page data
    let bannerTitle: string = data.eventsPage.title;
    let bannerUrl: string = data.eventsPage.banner.url;

    // event page settings
    let visibleTitle: boolean = data.eventsPage.settings.visibleTitle;
    let visiblePastEvent: boolean = data.eventsPage.settings.visiblePastCeremony;
    let visiblePresentEvent: boolean = data.eventsPage.settings.visiblePresentCeremony;
    let visibleFutureEvent: boolean = data.eventsPage.settings.visibleFutureCeremony;

    return (
        <>
            <Seo title={ metaTitle } description={ metaDescription } image={ shareImage } twitterCardType={ twitterCard }   twitterUsername={ twitterUsername }/>
            <Banner title={ bannerTitle } image={ bannerUrl } visibleTitle={visibleTitle} />
            <div className="container-fluid">
                <article id="post-2" className="ct-page__entry-content post-2 page type-page status-publish hentry">
                    { visiblePresentEvent && <PresentEvent/> }
                    { visiblePastEvent && <PastEvent/> }
                    { visibleFutureEvent && <FutureEvent/> }
                </article>
            </div>
        </>
    );
};

export default Events;
