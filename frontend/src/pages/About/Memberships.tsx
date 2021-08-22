import React from 'react';
import Seo from "../../components/Seo";
import {useQuery} from "@apollo/client";
import GET_MEMBERSHIP_QUERY from "../../queries/pages/MembershipQuery";
import Banner from "../../components/common/Banner";
import Details from "../../components/Membership/Details";
import SideImages from "../../components/Membership/SideImages";

const Memberships = () => {
    let { loading, error, data } = useQuery(GET_MEMBERSHIP_QUERY);
    if(loading) return (<p>Loading...</p>);
    if(error) return(<h4>Error!! `${error.message}`</h4>);

    let shareImageUrl: string | 'undefined' = data.membership.seo.shareImage[0];
    if(shareImageUrl !== undefined) {
        if (process.env.NODE_ENV === 'development') {
            shareImageUrl = `${process.env.REACT_APP_BACKEND_URL}${data.membership.seo.shareImage[0].url}`;
        } else {
            shareImageUrl = `${data.membership.seo.shareImage[0].url}`;
        }
    }

    // seo data start
    let metaTitle: string = data.membership.seo.metaTitle;
    let metaDescription: string = data.membership.seo.metaDescription;
    let shareImage: string = shareImageUrl;
    let twitterCard: string = data.membership.seo.twitterCardType;
    let twitterUsername: string = data.membership.seo.twitterUsername;

    // membership data
    let bannerTitle: string = data.membership.title;
    let bannerUrl: string = data.membership.banner.url;
    let details: string = data.membership.description;
    let formLink: string = data.membership.membership_form_link;

    return (
        <>
            <Seo title={ metaTitle } description={ metaDescription } image={ shareImage } twitterCardType={ twitterCard }   twitterUsername={ twitterUsername }/>
              <Banner title={ bannerTitle } image={ bannerUrl }  />
            <div className="container-fluid">
                <article id="post-2" className="ct-page__entry-content post-2 page type-page status-publish hentry">
                    <div id="staff-board" data-stellar-offset-parent="true" className="vc_row wpb_row vc_row-fluid content-padding-lg vc_row-o-content-middle vc_row-flex">
                        <div className="wpb_column vc_column_container vc_col-sm-7">
                          <Details description={details} formLink={formLink}/>

                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-3 vc_col-sm-offset-2">
                            <div className="vc_column-inner ">
                                <div className="wpb_wrapper">
                                    { data.membership.side_images && (
                                        <>
                                            { data.membership.side_images.map((item: any)=> (
                                                <div key={item.url}>
                                                    <SideImages image={ item.formats.medium.url }/>
                                                </div>
                                            ))  }
                                        </>
                                    ) }
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </>
    );
};

export default Memberships;
