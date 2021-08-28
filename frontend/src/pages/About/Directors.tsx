import React from 'react';
import Seo from "../../components/Seo";
import {useQuery} from "@apollo/client";
import GET_BOARD_MEMBERS_QUERY from "../../queries/pages/BoardMembersQuery";
import Banner from "../../components/common/Banner";
import getImageUrl from "../../utils/getImageUrl";
import Members from "../../components/BoardMember/Members";
import Staffs from "../../components/BoardMember/Staffs";

const Directors = () => {
    let { loading, error, data } = useQuery(GET_BOARD_MEMBERS_QUERY);
    if(loading) return (<p>Loading...</p>);
    if(error) return(<h4>Error!! `${error.message}`</h4>);

     let shareImageUrl: any = getImageUrl(data.boardMembersPage.seo.shareImage[0])
    // seo data start
    let metaTitle: string = data.boardMembersPage.seo.metaTitle;
    let metaDescription: string = data.boardMembersPage.seo.metaDescription;
    let shareImage: any = shareImageUrl;
    let twitterCard: string = data.boardMembersPage.seo.twitterCardType;
    let twitterUsername: string = data.boardMembersPage.seo.twitterUsername;

    // board Members page data
    let bannerTitle: string = data.boardMembersPage.title;
    let bannerUrl: string = data.boardMembersPage.banner.url;

    // board Members page data settings
    let visibleTitle: boolean = data.boardMembersPage.settings.visible_title;

    return (
        <>
            <Seo title={ metaTitle } description={ metaDescription } image={ shareImage } twitterCardType={ twitterCard }   twitterUsername={ twitterUsername }/>
            <Banner title={ bannerTitle } image={ bannerUrl }  visibleTitle={visibleTitle} />
            <div className="container-fluid">
                <article id="post-2" className="ct-page__entry-content post-2 page type-page status-publish hentry">
                    <Members/>
                    <Staffs/>
                </article>
            </div>
        </>
    );
};

export default Directors;
