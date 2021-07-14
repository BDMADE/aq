import React from "react";
import Slider from './Slider';
import GET_SLIDERS_QUERY from '../../queries/slider/sliders'
import { useQuery } from "@apollo/client";

const SliderList = () => {
    let { data } = useQuery(GET_SLIDERS_QUERY);
    return(
        <div>{ data && (
            <>
                { data.sliders.map((item: any)=> (
                    <div key={item.id}>
                        <Slider id={item.id} name={item.name}/>
                    </div>
                ))  }
            </>
        )}</div>
    );
}

export default SliderList;
