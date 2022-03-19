import React from "react";
import SideImages from "../../MembershipPage/SideImages";

type Props = {
    images: any
}

const EventImages = (props: Props) => {
    return(
        <div className="vc_column-inner ">
            <div className="wpb_wrapper">
                { props.images && (
                    <>
                        {  props.images.map((item: any)=> (
                            <div key={item.url}>
                                <SideImages image={ item.url }/>
                            </div>
                        ))}
                    </>
                ) }
            </div>
        </div>
    )
}

export default EventImages;