import React from 'react';
import styled from "styled-components";
import MemberList from "./MemberList";
import {useQuery} from "@apollo/client";

import GET_MEMBERS_QUERY from "../../queries/member/GetMembersQuery";

const ArtistContainer = styled.div`
  width: 1905px;
  position: relative;
  left: -252.5px;
  box-sizing: border-box;
  padding-left: 252.5px;
  padding-right: 252.5px;
`;


const Members = () => {
    let { loading, error, data } = useQuery(GET_MEMBERS_QUERY);
    if(loading) return (<p>Loading...</p>);
    if(error) return(<h4>Error!! `${error.message}`</h4>);

return(
    <>
        <ArtistContainer id="our-artists" data-vc-full-width="true" data-vc-full-width-init="true" data-stellar-offset-parent="true" className="vc_row wpb_row vc_row-fluid content-padding vc_custom_1504636772443 vc_row-has-fill vc_column-gap-35">
            <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                        <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                                <h1 className="display-1 special-title" style={{ textAlign: "center" }}>Board Members</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpb_column vc_column_container vc_col-sm-12">
                { data && (
                    <>
                        { data.boardMembers.map((item: any)=> (
                            <div key={item.id}>
                                <MemberList name={ item.name } designation={ item.designation} image={ item.image.formats.small.url }/>
                            </div>
                        ))  }
                    </>
                ) }
            </div>
        </ArtistContainer>
    </>

)
    ;
}

export default Members;