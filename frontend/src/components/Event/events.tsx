import React from 'react';
import {useQuery} from "@apollo/client";
import EventList from "./eventList";
import GET_HOME_EVENT_QUERY from "../../queries/events/GetHomeEventQuery";

const HomeEvents = () => {

    let { loading, error, data } = useQuery(GET_HOME_EVENT_QUERY);
    if(loading) return (<p>Loading..</p>);
    if(error) return(<h4>Error! `${error.message}`</h4>);

    return(
        <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
                <div className="wpb_wrapper">
                    <div className="wpb_text_column wpb_content_element">
                        <div className="wpb_wrapper">
                            <h1 className="special-title display-2 " style={{ textAlign: "center" }}>Events</h1>
                        </div>
                    </div>
                    <div className="wcs-timetable__wrapper">
                        <div data-id="1" id="wcs-app-1" className="wcs-timetable__container wcs-timetable--1">
                            <div className="wcs-timetable wcs-timetable--carousel">
                                <div className="wcs-timetable__carousel wcs-timetable__parent owl-carousel owl-loaded owl-drag" id="exhibition-slider">
                                    <div className="owl-stage-outer">
                                        <div className="owl-stage owl-stage-transform">
                                            { data && (
                                                <>
                                                    { data.events.map((item: any)=> (
                                                        <div key={item.id}>
                                                            <EventList title= {item.title} image={ item.images[0]?.formats?.small?.url || item.images[0]?.url } start={item.start} end={item.end} />
                                                        </div>
                                                    ))  }
                                                </>
                                            ) }

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeEvents;
