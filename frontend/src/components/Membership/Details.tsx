import React from 'react';
import ReactMarkdown from 'react-markdown'

type Props = {
    description: string,
    formLink: string,
    visibleDescription: boolean
    visibleMembershipFormLink: boolean
}

const Details = (props: Props) => {
    return(
        <div className="vc_column-inner">
            <div className="wpb_wrapper">
                <div className="wpb_text_column wpb_content_element ">
                    <div className="wpb_wrapper lead">
                        { props.visibleDescription && <ReactMarkdown children={props.description}/> }
                        { props.visibleMembershipFormLink && <a className="btn btn-lg btn-outline-primary" href={props.formLink}>Membership form</a> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;
