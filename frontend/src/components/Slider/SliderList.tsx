import React, { CSSProperties } from "react";
// import Slider from './Slider';
// import GET_SLIDERS_QUERY from '../../queries/slider/sliders'
// import { useQuery } from "@apollo/client";

export interface StylesDictionary{
    [Key: string]: CSSProperties;
}

const styles:StylesDictionary  = {
    styleOne: {
        backgroundImage: "url(https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8)"
    },
    styleTwo: {
        backgroundImage: "url(https://images.unsplash.com/photo-1493210977798-4f655ac200a9)"
    },
    styleThree: {
        backgroundImage: "url(https://images.unsplash.com/photo-1573595283891-b3d46b2096bb)"
    },
}

// const SliderList = () =>  {
//     let { loading, error, data } = useQuery(GET_SLIDERS_QUERY);
//     if(loading) return (<p>Loading..</p>);
//     if(error) return(<h4>Error! `${error.message}`</h4>);
//     return(
//         <div>{ data && (
//             <>
//                 { data.sliders.map((item: any)=> (
//                     <div key={item.id}>
//                         <Slider id={ item.id } name={ item.name }/>
//                     </div>
//                 ))  }
//             </>
//         )}</div>
//     );
// }

const SliderList = () => {
    return(
            <div className="home-slider owl-carousel js-fullheight">
                <div className="slider-item js-fullheight"
                     style={styles.styleOne}>
                    <div className="overlay"/>
                    <div className="container">
                        <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
                            <div className="col-md-12 ftco-animate">
                                <div className="text w-100 text-center">
                                    <h1 className="mb-3">The Art Quest Canada</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="slider-item js-fullheight"
                     style={styles.styleTwo}>
                    <div className="overlay"/>
                    <div className="container">
                        <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
                            <div className="col-md-12 ftco-animate">
                                <div className="text w-100 text-center">
                                    <h1 className="mb-3">The Art Quest Canada</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="slider-item js-fullheight"
                     style={styles.styleThree}>
                    <div className="overlay"/>
                    <div className="container">
                        <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
                            <div className="col-md-12 ftco-animate">
                                <div className="text w-100 text-center">
                                    <h1 className="mb-3">The Art Quest Canada</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default SliderList;
