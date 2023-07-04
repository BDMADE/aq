import React from "react";
import FeatureWorkImage from "./FeatureWork/FeatureWorkImage";
import FeatureWorkImageDetails from "./FeatureWork/FeatureWorkImageDetails";

type Props = {
    featureWork: any
}

const ArtistFeatureWorks = (props: Props) => {

    let data = props.featureWork;
    return(
        <div data-stellar-offset-parent="true" className="vc_row wpb_row vc_row-fluid content-padding vc_column-gap-35 vc_row-o-content-middle">
            { data && (
                <>
                    { data.map((item: any)=> (
                        <div key={item.id}>
                            { item.imagePosition === 'Left'? (
                                <div className="vc_row vc_artist_details">
                                <FeatureWorkImage image={item?.Image?.formats?.medium?.url || item?.Image?.url}/>
                                <FeatureWorkImageDetails details={item.details}/>
                                </div>
                                ) : (
                                <div className="vc_row vc_artist_details">
                                    <FeatureWorkImageDetails details={item.details}/>
                                    <FeatureWorkImage image={item?.Image?.formats?.medium?.url || item?.Image?.url}/>
                                </div>
                            ) }
                        </div>
                    ))  }
                </>
            ) }




        </div>
    )
}

export default ArtistFeatureWorks;
