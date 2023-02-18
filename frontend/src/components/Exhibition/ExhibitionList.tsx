import React from "react";
import useScript from "../../hooks/useScript";
import useImageUrl from "../../hooks/useImageUrl";
import {Link} from "react-router-dom";

type Props = {
    id: number,
    title: string,
    image: string,
    start: string,
    end: string
}

const ExhibitionList = (props: Props) => {
    const owlJsUrl = `${process.env.REACT_APP_FRONTEND_URL}/assets/js/homeOwlCarousal.js`;
    // loading slider js after loading the dom
    useScript(owlJsUrl);

    let id = props.id;
    let title = props.title;
    let image_url =  useImageUrl(props.image);
    let dateFormat = require("dateformat");
    let start_date =  dateFormat(props.start, "dd mmm, yyyy");
    let end_date = dateFormat(props.end, "dd mmm, yyyy");

    return(
        <div className="owl-item owl-item-display">
            <div className="wcs-class vue-element">
                <div className="wcs-class__image">
                    <div className="responsive-image">
                        <img alt={title} src={image_url} className="wcs-modal-call wcs-modal-call-height"/>
                    </div>
                </div>
                <div className="wcs-class__title wcs-modal-call h2"><Link to={`/exhibitions/${id}`}>{title}</Link></div>
                <div className="wcs-class__timestamp color-primary h4">
                    <span className="date-starting">{ start_date } - { end_date }</span>
                </div>
            </div>
        </div>
    )
}
 export default ExhibitionList;
