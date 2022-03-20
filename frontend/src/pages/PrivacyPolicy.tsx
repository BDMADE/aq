import React from 'react';
import Seo from "../components/Seo";
import {useQuery} from "@apollo/client";
import Banner from "../components/Common/Banner";
import Details from "../components/ContactUs/Details";
import getImageUrl from "../utils/getImageUrl";
import GET_PRIVACY_POLICY_QUERY from "../queries/pages/PrivacyPolicyQuery";

const PrivacyPolicy = () => {
    let { loading, error, data } = useQuery(GET_PRIVACY_POLICY_QUERY);
    if(loading) return (<p>Loading...</p>);
    if(error) return(<h4>Error!! `${error.message}`</h4>);

    // seo data start
    let metaTitle: string = data.privacyPolicyPage.seo.metaTitle;
    let metaDescription: string = data.privacyPolicyPage.seo.metaDescription;
    let shareImage: any = getImageUrl(data.privacyPolicyPage.seo.shareImage[0]);
    let twitterCard: string = data.privacyPolicyPage.seo.twitterCardType;
    let twitterUsername: string = data.privacyPolicyPage.seo.twitterUsername;

    // membership data
    let bannerTitle: string = data.privacyPolicyPage.title;
    let bannerUrl: string = data.privacyPolicyPage.banner.url;
    let details: string = data.privacyPolicyPage.description;

    // membership settings data
    let visibleTitle: boolean = data.privacyPolicyPage.settings.visibleTitle;
    let visibleDescription: boolean = data.privacyPolicyPage.settings.visibleDescription;

    return (
        <>
            <Seo title={ metaTitle } description={ metaDescription } image={ shareImage } twitterCardType={ twitterCard }   twitterUsername={ twitterUsername }/>
            <Banner title={ bannerTitle } image={ bannerUrl }  visibleTitle={visibleTitle} />
            <div className="container-fluid">
                <article id="post-2" className="ct-page__entry-content post-2 page type-page status-publish hentry">
                    <div id="staff-board" data-stellar-offset-parent="true" className="vc_row wpb_row vc_row-fluid content-padding-lg vc_row-o-content-middle vc_row-flex">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                            <Details description={details} visibleDescription={visibleDescription}/>
                        </div>
                    </div>
                </article>
            </div>
        </>
    );
};

export default PrivacyPolicy;
