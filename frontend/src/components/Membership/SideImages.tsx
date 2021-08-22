import React from 'react';
import useImageUrl from "../../hooks/useImageUrl";

type Props = {
    image: string
}

const Details = (props: Props) => {
    let slideImage: string = useImageUrl(props.image);

    return(
        <div className="wpb_single_image wpb_content_element vc_align_left xtd-offset-frame">
            <figure className="wpb_wrapper vc_figure">
                <div className="vc_single_image-wrapper xtd-shadow--normal-normal vc_box_border_grey">
                    <img width="681" height="1225" src={ slideImage } className="vc_single_image-img attachment-full" alt="" loading="lazy"/>
                </div>
            </figure>
        </div>
    )
}

export default Details;
