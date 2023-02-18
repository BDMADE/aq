import React from 'react';
import Seo from "../../components/Seo";
import {useQuery} from "@apollo/client";
import GET_MEMBERSHIP_QUERY from "../../queries/pages/MembershipQuery";
import Banner from "../../components/Common/Banner";
import Details from "../../components/MembershipPage/Details";
import SideImages from "../../components/MembershipPage/SideImages";
import getImageUrl from "../../utils/getImageUrl";

const Memberships = () => {
    let { loading, error, data } = useQuery(GET_MEMBERSHIP_QUERY);
    if(loading) return (<p>Loading...</p>);
    if(error) return(<h4>Error!! `${error.message}`</h4>);

    let shareImageUrl: any = getImageUrl(data.membership.seo.shareImage[0]);
    // seo data start
    let metaTitle: string = data.membership.seo.metaTitle;
    let metaDescription: string = data.membership.seo.metaDescription;
    let shareImage: any = shareImageUrl;
    let twitterCard: string = data.membership.seo.twitterCardType;
    let twitterUsername: string = data.membership.seo.twitterUsername;

    // membership data
    let bannerTitle: string = data.membership.title;
    let bannerUrl: string = data.membership.banner.url;
    let details: string = data.membership.description;
    let formLink: string = data.membership.new_membership_form_link;
    let renewFormLink: string = data.membership.renew_membership_form_link;
    // membership settings data
    let visibleTitle: boolean = data.membership.settings.visible_title;
    let visibleDescription: boolean = data.membership.settings.visible_description;
    let visibleSideImages: boolean = data.membership.settings.visible_side_images;
    let visibleMembershipFormLink: boolean = data.membership.settings.visible_new_form_link;
    let visibleMembershipRenewFormLink: boolean = data.membership.settings.visible_renew_form_link;
    let newFormBtnText: string =  data.membership.new_membership_form_btn_text;
    let renewFormBtnText: string =  data.membership.renew_membership_form_btn_text;

    return (
        <>
            <Seo title={ metaTitle } description={ metaDescription } image={ shareImage } twitterCardType={ twitterCard }   twitterUsername={ twitterUsername }/>
              <Banner title={ bannerTitle } image={ bannerUrl }  visibleTitle={visibleTitle} />
            <div className="container-fluid">
                <article id="post-2" className="ct-page__entry-content post-2 page type-page status-publish hentry">
                    <div id="staff-board" data-stellar-offset-parent="true" className="vc_row wpb_row vc_row-fluid content-padding-lg vc_row-o-content-middle vc_row-flex">
                        <div className="wpb_column vc_column_container vc_col-sm-7">
                          <Details description={details} newFormBtnText={newFormBtnText} renewFormBtnText={renewFormBtnText} formLink={formLink} renewFormLink={renewFormLink} visibleDescription={visibleDescription} visibleMembershipFormLink={visibleMembershipFormLink} visibleMembershipRenewFormLink={visibleMembershipRenewFormLink}/>
                        </div>
                        { visibleSideImages &&
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
                        }
                    </div>
                </article>
            </div>
        </>
    );
};

export default Memberships;
