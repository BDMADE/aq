import React from "react";
import useImageUrl from "../../../hooks/useImageUrl";

type Props = {
    image: string
}

const FeatureWorkImage = (props: Props) => {
    let image_url =  useImageUrl(props.image);

    return (
        <div className="wpb_column vc_column_container vc_col-sm-8">
            <div className="vc_column-inner">
                <div className="wpb_wrapper">
                    <div className="wpb_single_image wpb_content_element vc_align_center">
                        <figure className="wpb_wrapper vc_figure">
                            <div className="vc_single_image-wrapper xtd-shadow--normal-normal  vc_box_border_grey">
                                <img width="1600" height="1067" src={image_url} className="vc_single_image-img attachment-full" alt="" loading="lazy"/>
                            </div>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureWorkImage;
