import React from 'react';
import ReactMarkdown from 'react-markdown'

type Props = {
    description: string,
    formLink: string
}

const Details = (props: Props) => {
    return(
        <div className="vc_column-inner">
            <div className="wpb_wrapper">
                <div className="wpb_text_column wpb_content_element ">
                    <div className="wpb_wrapper lead">
                        <ReactMarkdown children={props.description}/>
                        <a className="btn btn-lg btn-outline-primary" href={props.formLink}>Membership form</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;
