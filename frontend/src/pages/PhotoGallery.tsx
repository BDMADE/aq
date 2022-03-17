import React from 'react';
import {useQuery} from "@apollo/client";
import GET_COLLECTIONS_PAGE_QUERY from "../queries/pages/CollectionsQuery";
import getImageUrl from "../utils/getImageUrl";
import Seo from "../components/Seo";
import Banner from "../components/Common/Banner";
import ArtistWorks from "../components/Gallery/ArtistWorks";

const PhotoGallery = () => {
    let { loading, error, data } = useQuery(GET_COLLECTIONS_PAGE_QUERY);
    if(loading) return (<p>Loading...</p>);
    if(error) return(<h4>Error!! `${error.message}`</h4>);

    // seo data start
    let metaTitle: string = data.gallery.seo.metaTitle;
    let metaDescription: string = data.gallery.seo.metaDescription;
    let shareImage: any = getImageUrl(data.gallery.seo.shareImage[0]);
    let twitterCard: string = data.gallery.seo.twitterCardType;
    let twitterUsername: string = data.gallery.seo.twitterUsername;

    // board Members page data
    let bannerTitle: string = data.gallery.title;
    let bannerUrl: string = data.gallery.banner.url;

    // board Members page data settings
    let visibleTitle: boolean = data.gallery.settings.visibleTitle;
    let visibleGallery: boolean = data.gallery.settings.visibleGallery;

    return (
        <>
            <Seo title={ metaTitle } description={ metaDescription } image={ shareImage } twitterCardType={ twitterCard } twitterUsername={ twitterUsername }/>
            <Banner title={ bannerTitle } image={ bannerUrl }  visibleTitle={visibleTitle} />
            <article id="post-2" className="ct-page__entry-content post-2 page type-page status-publish hentry">
                <div className="container-fluid">
                    <div className="wpb_text_column wpb_content_element">
                        <div className="wpb_wrapper">
                            <h2 className="display-3 special-title" style={{textAlign: "center"}}><small>BY OUR FAMOUS ARTIST'S</small> Photo Gallery</h2></div>
                    </div>
                    { visibleGallery && <ArtistWorks/> }
                </div>
            </article>


        </>
    );
};

export default PhotoGallery;
