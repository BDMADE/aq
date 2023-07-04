import React from "react";
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import {useQuery} from "@apollo/client";
import GET_ALL_ARTIST_WORKS_QUERY from "../../queries/gallery/GetAllArtistWorksQuery";
import ArtistPhoto from "./ArtistPhoto";

const ArtistWorks = () => {
    let { loading, error, data } = useQuery(GET_ALL_ARTIST_WORKS_QUERY);
    if(loading) return (<p>Loading...</p>);
    if(error) return(<h4>Error!! `${error.message}`</h4>);

    return (
        <div className="gallery-container">
            { data && (
                <div className="App">
                    <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                        {/* collection has many artists */}
                        { data.artists.map((item: any)=> (
                            <>
                            {/* Artist has many works photo  */}
                                { item.works.map((photo: any)=> (
                                    <ArtistPhoto
                                        artistId={item.id}
                                        name={item.name}
                                        designation={item.designation}
                                        photoId={photo.id}
                                        thumb={photo?.formats?.thumbnail?.url || photo?.url}
                                        image={photo?.url}/>
                                ))  }
                        </>
                        ))  }
                    </LightGallery>
                </div>
            ) }
        </div>
    );
}

export default ArtistWorks;
