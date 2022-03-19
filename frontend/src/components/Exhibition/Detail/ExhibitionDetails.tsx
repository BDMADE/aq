import React from "react";
import {useQuery} from "@apollo/client";
import {useParams} from "react-router-dom";
import getImageUrl from "../../../utils/getImageUrl";
import Seo from "../../Seo";
import ExhibitionBanner from "./ExhibitionBanner";
import ExhibitionDescription from "./ExhibitionDescription";
import ExhibitionImages from "./ExhibitionImages";
import GET_EXHIBITION_DETAILS_QUERY from "../../../queries/exhibition/GetExhibitionDetailsQuery";

const ExhibitionDetails = () => {
    interface ParamTypes {
        id: string | undefined;
    }
    const {id}  = useParams<ParamTypes>();

    let { loading, error, data } = useQuery(GET_EXHIBITION_DETAILS_QUERY, { variables: { id: id }});
    if(loading) return (<p>Loading...</p>);
    if(error) return(<h4>Error!! `${error.message}`</h4>);
    const exhibition = data.exhibition;

    let metaTitle: string = exhibition.seo.metaTitle;
    let metaDescription: string = exhibition.seo.metaDescription;
    let shareImage: any = getImageUrl(exhibition.seo.shareImage[0]);
    let twitterCard: string = exhibition.seo.twitterCardType;
    let twitterUsername: string = exhibition.twitterUsername;
    let bannerTitle: string = exhibition.title;
    let venue: string = exhibition.venue;
    let dateFormat = require("dateformat");
    let start_date =  dateFormat(exhibition.start, "dd mmm, yyyy");
    let end_date = dateFormat(exhibition.end, "dd mmm, yyyy");
    let description = exhibition.description;

    // let imageUrls: any = getImageUrl(exhibition.images.url);
    let bannerUrl: string = exhibition.banner.url;

    return(
        <div id="our-artists-details">
            { exhibition && (
                <>
                    <Seo title={ metaTitle } description={ metaDescription } image={ shareImage } twitterCardType={ twitterCard } twitterUsername={ twitterUsername }/>
                    <ExhibitionBanner title={ bannerTitle } venue={ venue } start={ start_date } end={ end_date } image={ bannerUrl } />
                    <div className="container-fluid">
                        <article id="post-2" className="ct-page__entry-content post-2 page type-page status-publish hentry">
                            <div id="staff-board" data-stellar-offset-parent="true" className="vc_row wpb_row vc_row-fluid content-padding-lg vc_row-o-content-middle vc_row-flex">
                                <div className="wpb_column vc_column_container vc_col-sm-7">
                                    <ExhibitionDescription description={description} />
                                </div>
                                <div className="wpb_column vc_column_container vc_col-sm-3 vc_col-sm-offset-2">
                                    <ExhibitionImages images={exhibition.images}/>
                                </div>
                            </div>
                        </article>
                    </div>
                </>
            ) }
        </div>
    );
}

export default ExhibitionDetails;
