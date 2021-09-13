import React from "react";

type Props = {
    iconName: string,
    url: string
}

const SocialLink = (props: Props) => {
    let FontAwesomeIcon : string = "far fa-fw fa-" + props.iconName + " fab fa-lg";
    return(
        <a href={props.url} target="_blank" rel="noreferrer">
            <i className={FontAwesomeIcon}/>
        </a>
    );
}

export default SocialLink;
