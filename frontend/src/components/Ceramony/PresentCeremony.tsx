import React from "react";
import useImageUrl from "../../hooks/useImageUrl";

type Props = {
    title: string,
    image: string,
    start: string,
    end: string
}

const PresentCeremony = (props: Props) => {
    let title = props.title;
    let image_url = useImageUrl(props.image);
    let dateFormat = require("dateformat");
    let start_date =  dateFormat(props.start, "dd mmm, yyyy");
    let end_date = dateFormat(props.end, "dd mmm, yyyy");

    return(
        <div className="vc_col-sm-4">
            <div className="wcs-class__inner">
                <div className="wcs-class__image">
                    <img alt={title} src={image_url} className="wcs-modal-call xtd-shadow--normal-normal wcs-fixed-height"/>
                </div>
                <div className="wcs-class__title events h2">{title}</div>
                <div className="wcs-class__time events h5 color-primary"><span>{ start_date } - { end_date }</span>
                </div>
            </div>
        </div>
    )
}

export default PresentCeremony;