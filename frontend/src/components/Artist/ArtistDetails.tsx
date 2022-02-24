import React from "react";
import {useQuery} from "@apollo/client";
import GET_ARTIST_DETAILS_QUERY from "../../queries/artists/GetArtistDetailsQuery";
import {useParams} from "react-router-dom";
import getImageUrl from "../../utils/getImageUrl";
import ReactMarkdown from "react-markdown";
import ArtistWorkSliders from "./ArtistWorkSliders";
import ArtistFeatureWorks from "./ArtistFeatureWorks";

const ArtistDetails = () => {
    interface ParamTypes {
        id: string | undefined;
    }
    const {id}  = useParams<ParamTypes>();

    let { loading, error, data } = useQuery(GET_ARTIST_DETAILS_QUERY, { variables: { id: id }});
    if(loading) return (<p>Loading...</p>);
    if(error) return(<h4>Error!! `${error.message}`</h4>);
    const artist = data.artist;
    let imageUrl;

    if(artist) {
        imageUrl = getImageUrl(artist.avatar.formats.medium.url);
    }

    return(
        <div id="our-artists-details">
            { artist && (
                <>
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                                <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                        <h1 className="display-2 special-title" style={{ textAlign: "center" }}>
                                            <small>{ artist.designation }</small> { artist.name }</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wpb_column vc_column_container vc_col-sm-4">
                        <div className="vc_column-inner" >
                            <div className="wpb_wrapper">
                                <div className="wpb_single_image wpb_content_element vc_align_left xtd-offset-frame">
                                    <figure className="wpb_wrapper vc_figure">
                                        <div className="vc_single_image-wrapper xtd-shadow--normal-light  vc_box_border_grey">
                                            <img width="800" height="1200" src={imageUrl} className="vc_single_image-img attachment-full" alt={artist.name} loading="lazy"/>
                                        </div>
                                    </figure>
                                </div>
                                <div className="vc_empty_space"><span className="vc_empty_space_inner"/></div>
                                <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                        <blockquote><p style={{ textAlign: "center" }}>{artist.quotes}</p></blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wpb_column vc_column_container vc_col-sm-8 vc_col-lg-offset-1 vc_col-lg-7">
                        <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                                <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                        <ReactMarkdown children={artist.description}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="vc_row wpb_row vc_inner vc_row-fluid vc_column-gap-35">
                            <div className="vc_column_container vc_col-sm-12">
                                <div className="wcs-timetable__carousel wcs-timetable__parent owl-carousel owl-loaded owl-drag" id="artist-slider">
                                    <div className="owl-stage-outer">
                                        <div className="owl-stage owl-stage-transform">
                                            { artist.works && (
                                                <>
                                                    { artist.works.map((item: any)=> (
                                                        <div key={item.id}>
                                                            <ArtistWorkSliders image={ item.formats.small.url} />
                                                        </div>
                                                    )) }
                                                </>
                                            ) }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ArtistFeatureWorks featureWork={ artist.fetaureWork }/>
                </>
            ) }
        </div>
    );
}

export default ArtistDetails;
