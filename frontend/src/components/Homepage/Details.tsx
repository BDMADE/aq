import React from 'react';
import ReactMarkdown from 'react-markdown'

type Props = {
    title: string;
    description: string
}

const Details = (props: Props) => {
    return(
        <div data-stellar-offset-parent="true"
             className="vc_row wpb_row vc_row-fluid text-center text-lg-left content-padding-none vc_column-gap-35">
            <div className="wpb_column vc_column_container vc_col-sm-8 vc_col-sm-offset-2">
                <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                        <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                                <h1 className="display-1 special-title" style={{ textAlign: "center" }} >{ props.title }</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-12">
                <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                        <div className="wpb_text_column wpb_content_element  ">
                            <div className="wpb_wrapper lead">
                                <ReactMarkdown children={props.description}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
