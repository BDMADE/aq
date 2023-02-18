import React from 'react';
import ReactMarkdown from 'react-markdown'

type Props = {
    description: string,
    formLink: string,
    renewFormLink: string,
    visibleDescription: boolean,
    visibleMembershipFormLink: boolean,
    visibleMembershipRenewFormLink: boolean,
    newFormBtnText: string,
    renewFormBtnText: string
}

const Details = (props: Props) => {
    return(
        <div className="vc_column-inner">
            <div className="wpb_wrapper">
                <div className="wpb_text_column wpb_content_element ">
                    <div className="wpb_wrapper lead">
                        { props.visibleDescription && <ReactMarkdown children={props.description}/> }
                        <div className="membership-button-group">
                            { props.visibleMembershipFormLink && <div><a className="btn btn-lg btn-outline-primary" href={props.formLink}>{props.newFormBtnText}</a> </div> }
                            { props.visibleMembershipRenewFormLink && <div><a className="btn btn-lg btn-outline-primary" href={props.renewFormLink}>{props.renewFormBtnText}</a></div> }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;
