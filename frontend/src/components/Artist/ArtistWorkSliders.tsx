import React from "react";
import useScript from "../../hooks/useScript";
import useImageUrl from "../../hooks/useImageUrl";

type Props = {
    image: string
}

const ArtistWorkSliders = (props: Props) => {
    const owlJsUrl = `${process.env.REACT_APP_FRONTEND_URL}/assets/js/artistSlider.js`;
    // loading slider js after loading the dom
    useScript(owlJsUrl);
    let image_url =  useImageUrl(props.image);

    return(
        <div className="owl-item owl-item-display">
            <div className="wcs-class vue-element">
                <div className="wcs-class__image">
                    <div className="responsive-image">
                        <img alt="artist_work" src={image_url} className="wcs-modal-call wcs-modal-call-height"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ArtistWorkSliders;
