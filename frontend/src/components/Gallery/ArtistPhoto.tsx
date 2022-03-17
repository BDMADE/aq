import React from "react"
import useImageUrl from "../../hooks/useImageUrl";

type Props = {
    artistId: string,
    name: string,
    designation: string,
    photoId: string,
    thumb: string,
    image: string
}

const ArtistPhoto = (props: Props) => {
    let thumbImageUrl = useImageUrl(props.thumb);
    let imageUrl = useImageUrl(props.image);

    let dataHtml = `<h4>Photo by - <a href=/artists/${props.artistId}>${props.name}</a></h4><p><h4>${props.designation}</h4></p>`

    return(
        <a key={props.photoId} id={props.photoId}
           data-lg-size="1406-1390"
           className="gallery-item"
           data-sub-html={dataHtml}
           href ={imageUrl}>
            <img className="img-responsive gallery-image-item" alt="img1" src={thumbImageUrl}/>
        </a>
    );
}

export default ArtistPhoto;
