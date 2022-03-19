import React from "react";
import { Link } from 'react-router-dom';
import PresentCeremony from "../Ceramony/PresentCeremony";
import {useQuery} from "@apollo/client";
import GET_PAST_EVENT_QUERY from "../../queries/events/GetPastEventQuery";

const PastEvent = () => {
    let { loading, error, data } = useQuery(GET_PAST_EVENT_QUERY);
    if(loading) return (<p>Loading..</p>);
    if(error) return(<h4>Error! `${error.message}`</h4>);

    return(
        <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
                <div className="wpb_wrapper">
                    <div className="wpb_text_column wpb_content_element">
                        <div className="wpb_wrapper">
                            <h2 className="display-3 special-title" style={{ textAlign: "center" }}>Previous Events</h2>
                        </div>
                    </div>
                    <div className="wcs-timetable__wrapper">
                        <div className="wcs-timetable__container">
                            <div className="wcs-timetable">
                                { data.events && (
                                    <>
                                        { data.events.map((item: any)=> (
                                            <div key={item.id}>
                                                <Link to={`events/${item.id}`}><PresentCeremony title= {item.title} image={ item.images[0].formats.small.url} start={item.start} end={item.end}/></Link>
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
    );
}

export default PastEvent;
