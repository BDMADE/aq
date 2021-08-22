import React from 'react';
import useScript from "../../hooks/useScript";

type Props = {
    image: string,
    name: string
}

const Slider = (props: Props) => {
    const js_url = `${process.env.REACT_APP_FRONTEND_URL}/assets/js/slider.js`;
    let image_url;

    if (process.env.NODE_ENV === 'development') {
        image_url = `url(${process.env.REACT_APP_BACKEND_URL}${ props.image })`;
    } else {
        image_url = `url(${ props.image })`;
    }

    // loading slider js after loading the dom
    useScript(js_url);

    // return the slider component
    return(
        <div className="slider-item js-fullheight"
             style= {{
                 backgroundImage: image_url
             }}>
            <div className="overlay"/>
            <div className="container">
                <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
                    <div className="col-md-12 ftco-animate">
                        <div className="text w-100 text-center">
                            <h1 className="mb-3">{ props.name }</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export  default Slider;
