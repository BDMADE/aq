import React from "react";
import { Link } from 'react-router-dom';
import FutureCeremony from "../Ceramony/FutureCeremony";
import {useQuery} from "@apollo/client";
import GET_FUTURE_EVENT_QUERY from "../../queries/events/GetFutureEventQuery";

const FutureEvent = () => {
    let { loading, error, data } = useQuery(GET_FUTURE_EVENT_QUERY);
    if(loading) return (<p>Loading..</p>);
    if(error) return(<h4>Error! `${error.message}`</h4>);

    return(
        <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner ">
                <div className="wpb_wrapper">
                    <div className="wpb_text_column wpb_content_element ">
                        <div className="wpb_wrapper">
                            <h2 className="display-3 special-title" style={{ textAlign: "center" }}>Future Events</h2>
                        </div>
                    </div>
                    <div className="vc_empty_space  xtd-spacer" style={{ height: "2rem" }}><span className="vc_empty_space_inner"/></div>
                    <div className="wcs-timetable__wrapper">
                        <div data-id="4" id="wcs-app-4"
                             className="wcs-timetable__container wcs-timetable--4 wcs-timetable--style-1 wcs-timetable--without-filters">
                            <div className="wcs-timetable wcs-timetable--compact-list">
                                { data.events && (
                                    <ul className="wcs-timetable__compact-list wcs-timetable__parent">
                                        { data.events.map((item: any)=> (
                                            <Link className="event-link" to={`events/${item.id}`} key={item.id}>
                                                <li className="wcs-day wcs-day--visible" key={item.id}>
                                                    <FutureCeremony title= {item.title} image={ item.images[0]?.formats?.small?.url || item.images[0]?.url } start={item.start} end={item.end} />
                                                </li>
                                            </Link>
                                        ))  }
                                    </ul>
                                ) }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FutureEvent;
