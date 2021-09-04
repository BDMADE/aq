import React from 'react';
import Seo from "../../components/Seo";
import {useQuery} from "@apollo/client";
import GET_DONATION_QUERY from "../../queries/pages/DonationQuery";
import Banner from "../../components/common/Banner";
import Details from "../../components/MembershipPage/Details";
import SideImages from "../../components/MembershipPage/SideImages";
import getImageUrl from "../../utils/getImageUrl";

const Support = () => {
    let { loading, error, data } = useQuery(GET_DONATION_QUERY);
    if(loading) return (<p>Loading...</p>);
    if(error) return(<h4>Error!! `${error.message}`</h4>);

    let shareImageUrl: any = getImageUrl(data.donationPage.seo.shareImage[0]);
    // seo data start
    let metaTitle: string = data.donationPage.seo.metaTitle;
    let metaDescription: string = data.donationPage.seo.metaDescription;
    let shareImage: any = shareImageUrl;
    let twitterCard: string = data.donationPage.seo.twitterCardType;
    let twitterUsername: string = data.donationPage.seo.twitterUsername;

    // membership data
    let bannerTitle: string = data.donationPage.title;
    let bannerUrl: string = data.donationPage.banner.url;
    let details: string = data.donationPage.description;
    let formLink: string = data.donationPage.donation_form_link;
    // membership settings data
    let visibleTitle: boolean = data.donationPage.settings.visible_title;
    let visibleDescription: boolean = data.donationPage.settings.visible_description;
    let visibleSideImages: boolean = data.donationPage.settings.visible_side_images;
    let visibleMembershipFormLink: boolean = data.donationPage.settings.visible_form_link;

    return (
        <>
            <Seo title={ metaTitle } description={ metaDescription } image={ shareImage } twitterCardType={ twitterCard }   twitterUsername={ twitterUsername }/>
            <Banner title={ bannerTitle } image={ bannerUrl }  visibleTitle={visibleTitle} />
            <div className="container-fluid">
                <article id="post-2" className="ct-page__entry-content post-2 page type-page status-publish hentry">
                    <div id="staff-board" data-stellar-offset-parent="true" className="vc_row wpb_row vc_row-fluid content-padding-lg vc_row-o-content-middle vc_row-flex">
                        <div className="wpb_column vc_column_container vc_col-sm-7">
                            <Details description={details} formLink={formLink} visibleDescription={visibleDescription} visibleMembershipFormLink={visibleMembershipFormLink}/>
                        </div>
                        { visibleSideImages &&
                        <div className="wpb_column vc_column_container vc_col-sm-3 vc_col-sm-offset-2">
                            <div className="vc_column-inner ">
                                <div className="wpb_wrapper">
                                    { data.donationPage.side_images && (
                                        <>
                                            { data.donationPage.side_images.map((item: any)=> (
                                                <div key={item.url}>
                                                    <SideImages image={ item.formats.medium.url }/>
                                                </div>
                                            ))  }
                                        </>
                                    ) }
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                </article>
            </div>
        </>
    );
};

export default Support;
