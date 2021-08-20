import React from "react";
import useScript from "../../hooks/useScript";

type Props = {
    title: string,
    image: string,
    start: string,
    end: string
}

const ExhibitionList = (props: Props) => {
    const owlJsUrl = `${process.env.REACT_APP_FRONTEND_URL}/assets/js/homeOwlCarousal.js`;
    // loading slider js after loading the dom
    useScript(owlJsUrl);

    let title = props.title;
    let image_url;

    if(process.env.NODE_ENV === 'development') {
        image_url = `${process.env.REACT_APP_BACKEND_URL}${ props.image }`;
    } else {
        image_url = `${ props.image }`;
    }
    let dateFormat = require("dateformat");
    let start_date =  dateFormat(props.start, "dd mmm, yyyy");
    let end_date = dateFormat(props.end, "dd mmm, yyyy");;

    return(
        <div className="owl-item owl-item-display">
            <div className="wcs-class vue-element">
                <div className="wcs-class__image">
                    <div className="responsive-image">
                        <img alt={props.title} src={image_url} className="wcs-modal-call"/>
                    </div>
                </div>
                <div className="wcs-class__title wcs-modal-call h2">{title}</div>
                <div className="wcs-class__timestamp color-primary h4">
                    <span className="date-starting">{ start_date } - { end_date }</span>
                </div>
            </div>
        </div>
    )
}
 export default ExhibitionList;
