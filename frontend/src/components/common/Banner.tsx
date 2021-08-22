import React from "react";

type Props = {
    title: string,
    image: string
}

const Banner = (props: Props) => {
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
                    <div className="ct-header__main-heading-title">
                        <h1>{ props.title }</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
