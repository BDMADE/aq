import React from "react";
import Slider from './Slider';
import GET_SLIDERS_QUERY from '../../queries/slider/sliders'
import { useQuery } from "@apollo/client";

const SliderList = () => {
    let { loading, error, data } = useQuery(GET_SLIDERS_QUERY);
    if(loading) return (<p>Loading..</p>);
    if(error) return(<h4>Error! `${error.message}`</h4>);

    return(
        <div className="home-slider owl-carousel js-fullheight">
            { data && (
                <>
                    { data.sliders.map((item: any)=> (
                        <div key={item.id}>
                            <Slider name={ item.name } image={ item.image[0].url }/>
                        </div>
                    ))  }
                </>
            ) }
        </div>
    );
}

export default SliderList;
