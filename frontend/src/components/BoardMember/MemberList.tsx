import React from 'react';
import getImageUrl from "../../utils/getImageUrl";

type Props = {
    name: string,
    designation: string,
    image: string
}

const MemberList = (props: Props) => {
    let imageUrl = getImageUrl(props.image);
    return(
        <div className="wpb_column vc_column_container vc_col-sm-4">
            <div className="xtd-person">
                <div className="xtd-person__image color-primary xtd-shadow--normal-light">
                    <img width="660" height="440"
                         alt='missingImg'
                         className="attachment-large size-large" loading="lazy"
                         src={ imageUrl }
                         srcSet={`${ imageUrl } 900w, ${ imageUrl } 300w, ${ imageUrl } 768w` }
                         sizes="(max-width: 660px) 100vw, 660px"
                    />
                </div>
                <div className="xtd-person__info">
                    <div className="xtd-person__title h2">
                        <>{props.name}
                            <span className="h4 color-primary">{props.designation}</span>
                        </>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemberList;
