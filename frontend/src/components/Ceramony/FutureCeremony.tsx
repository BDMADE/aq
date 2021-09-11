import React from "react";
import useImageUrl from "../../hooks/useImageUrl";

type Props = {
    title: string,
    image: string,
    start: string,
    end: string
}

const FutureCeremony = (props: Props) => {
    let title = props.title;
    let image_url = useImageUrl(props.image);
    let dateFormat = require("dateformat");
    let start_date =  dateFormat(props.start, "dd");
    let start_date_day =  dateFormat(props.start, "ddd");
    let start_date_month =  dateFormat(props.start, "mmm");
    let start_date_hour =  dateFormat(props.start, "HH");
    let start_date_minutes =  dateFormat(props.start, "MM");
    return(
        <>
            <div className="wcs-day__date">
                <div className="wcs-day__wrapper"><small>{start_date_day}</small>{start_date}<small>{start_date_month}</small></div>
            </div>

            <ul className="wcs-timetable__classes">
                <li className="wcs-class wcs-class--visible wcs-class--not-started wcs-class--not-finished wcs-class--term-id-9 wcs-class--term-carousel wcs-class--term-id-3 wcs-class--term-grid wcs-class--term-id-31 wcs-class--term-landscape wcs-class--term-id-6 wcs-class--term-list wcs-class--term-id-32 wcs-class--term-british-gallery-of-arts wcs-class--term-id-30 wcs-class--term-john-sargent wcs-class--term-id-14 wcs-class--term-tony-columbus wcs-class--term-id-29 wcs-class--term-winslow-homer wcs-class--day-4 wcs-class--time-evening">
                    <div className="wcs-class__image xtd-offset-frame">
                        <img alt={title} src={image_url} title={title} className="wcs-modal-call xtd-shadow--normal-normal"/>
                    </div>
                    <div className="wcs-class__title-meta">
                        <div title="Peasant Scenes And Landscapes" className="wcs-class__title h2 wcs-modal-call"><span>{title}</span></div>
                        <div className="wcs-meta">
                            <time dateTime="event.start" className="wcs-class__time"><span className="ti-time color-primary"/> <span>{start_date_hour}<span className="wcs-addons--blink">:</span>{start_date_minutes}</span></time>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default FutureCeremony;
