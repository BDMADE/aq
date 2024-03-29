import React from 'react';
import MemberList from "./MemberList";
import {useQuery} from "@apollo/client";
import GET_STAFFS_QUERY from "../../queries/member/GetStaffsQuery";

const Staffs = () => {
    let { loading, error, data } = useQuery(GET_STAFFS_QUERY);
    if(loading) return (<p>Loading...</p>);
    if(error) return(<h4>Error!! `${error.message}`</h4>);

    return(
        <div id="our-artists" data-vc-full-width="true" data-vc-full-width-init="true" data-stellar-offset-parent="true" className="vc_row wpb_row vc_row-fluid content-padding vc_row-has-fill vc_column-gap-35">
            <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                        <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                                <h1 className="display-1 special-title" style={{ textAlign: "center" }}>Staffs</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            { data.staffs && (
                <div className="wpb_column vc_column_container vc_col-sm-12">
                    { data.staffs.map((item: any)=> (
                        <div key={item.id}>
                            <MemberList name={ item.name } designation={ item.designation} image={ item?.image?.formats?.medium?.url || item?.image?.url }/>
                        </div>
                    ))  }
                </div>
            ) }
        </div>
    );
}

export default Staffs;