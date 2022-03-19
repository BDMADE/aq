import React from "react";
import {useQuery} from "@apollo/client";
import GET_EVENT_DETAILS_QUERY from "../../../queries/events/GetEventDetailsQuery";
import {useParams} from "react-router-dom";
import getImageUrl from "../../../utils/getImageUrl";
import Seo from "../../Seo";
import EventBanner from "./EventBanner";
import EventDescription from "./EventDescription";
import EventImages from "./EventImages";

const EventDetails = () => {
    interface ParamTypes {
        id: string | undefined;
    }
    const {id}  = useParams<ParamTypes>();

    let { loading, error, data } = useQuery(GET_EVENT_DETAILS_QUERY, { variables: { id: id }});
    if(loading) return (<p>Loading...</p>);
    if(error) return(<h4>Error!! `${error.message}`</h4>);
    const event = data.event;

    let metaTitle: string = event.seo.metaTitle;
    let metaDescription: string = event.seo.metaDescription;
    let shareImage: any = getImageUrl(event.seo.shareImage[0]);
    let twitterCard: string = event.seo.twitterCardType;
    let twitterUsername: string = event.twitterUsername;
    let bannerTitle: string = event.title;
    let venue: string = event.venue;
    let dateFormat = require("dateformat");
    let start_date =  dateFormat(event.start, "dd mmm, yyyy");
    let end_date = dateFormat(event.end, "dd mmm, yyyy");
    let description = event.description;

    // let imageUrls: any = getImageUrl(event.images.url);
    let bannerUrl: string = event.banner.url;

    return(
        <div id="our-artists-details">
            { event && (
                <>
                    <Seo title={ metaTitle } description={ metaDescription } image={ shareImage } twitterCardType={ twitterCard } twitterUsername={ twitterUsername }/>
                    <EventBanner title={ bannerTitle }  venue={ venue } start={ start_date } end={ end_date } image={ bannerUrl } />
                    <div className="container-fluid">
                        <article id="post-2" className="ct-page__entry-content post-2 page type-page status-publish hentry">
                            <div id="staff-board" data-stellar-offset-parent="true" className="vc_row wpb_row vc_row-fluid content-padding-lg vc_row-o-content-middle vc_row-flex">
                                <div className="wpb_column vc_column_container vc_col-sm-7">
                                    <EventDescription description={description} />
                                </div>
                                <div className="wpb_column vc_column_container vc_col-sm-3 vc_col-sm-offset-2">
                                    <EventImages images={event.images}/>
                                </div>
                            </div>
                        </article>
                    </div>
                </>
            ) }
        </div>
    );
}

export default EventDetails;
