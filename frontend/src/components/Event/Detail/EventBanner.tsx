import React from "react";

type Props = {
    title: string,
    venue: string,
    start: any,
    end: any,
    image: string
}

const EventBanner = (props: Props) => {
    let image_url: string;

    if (process.env.NODE_ENV === 'development') {
        image_url = `url(${process.env.REACT_APP_BACKEND_URL}${ props.image })`;
    } else {
        image_url = `url(${ props.image })`;
    }

    return (
        <div id="ct-header__hero" className="ct-header__hero"  style= {{
            backgroundImage: image_url
        }}>
            <div className="ct-header__main-heading">
                <div className="container-fluid">
                    <div className="ct-header__main-heading-title"> <h1>{ props.title }</h1></div>
                    <div className="ct-header__main-heading-title"><h4> Venue: { props.venue }</h4></div>
                    <div className="ct-header__main-heading-title"><h4> Start: { props.start }  -  End: { props.end }</h4></div>
                </div>
            </div>
        </div>
    )
}

export default EventBanner;
