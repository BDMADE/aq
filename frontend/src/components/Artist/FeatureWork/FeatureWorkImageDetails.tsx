import React from "react";
import ReactMarkdown from "react-markdown";

type Props = {
    details: string
}

const ArtistFeatureImageDetails = (props: Props) => {
    return (
        <div className="wpb_column vc_column_container vc_col-sm-4 vc_col-lg-offset-1 vc_col-lg-3">
            <div className="vc_column-inner">
                <div className="wpb_wrapper">
                    <div className="wpb_text_column wpb_content_element ">
                        <div className="wpb_wrapper">
                            <ReactMarkdown children={props.details}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default ArtistFeatureImageDetails;
