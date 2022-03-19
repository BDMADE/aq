import React from "react";
import ReactMarkdown from "react-markdown";

type Props = {
    description: string
}

const EventDescription = (props: Props) => {
    return(
        <div className="vc_column-inner">
            <div className="wpb_wrapper">
                <div className="wpb_text_column wpb_content_element ">
                    <div className="wpb_wrapper lead">
                        <ReactMarkdown children={props.description}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventDescription;