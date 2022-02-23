import React from "react";
import FeatureWorkImage from "./FeatureWork/FeatureWorkImage";
import FeatureWorkImageDetails from "./FeatureWork/FeatureWorkImageDetails";

type Props = {
    featureWork: any
}

const ArtistFeatureWorks = (props: Props) => {

    let data = props.featureWork;
    return(
        <div data-stellar-offset-parent="true" className="vc_row wpb_row vc_row-fluid content-padding vc_column-gap-35 vc_row-o-content-middle vc_row-flex">
            { data && (
                <>
                    { data.map((item: any)=> (
                        <div key={item.id}>
                            { item.imagePosition === 'Left'? (
                                <>
                                <FeatureWorkImage image={item.Image.formats.medium.url}/>
                                <FeatureWorkImageDetails details={item.details}/>
                                </>
                                ) : (
                                <>
                                    <FeatureWorkImageDetails details={item.details}/>
                                    <FeatureWorkImage image={item.Image.formats.medium.url}/>
                                </>
                            ) }
                        </div>
                    ))  }
                </>
            ) }




        </div>
    )
}

export default ArtistFeatureWorks;
