import React from 'react';
import styled from "styled-components";
import {useQuery} from "@apollo/client";
import MemberList from "../BoardMember/MemberList";
import GET_PRESENT_ARTISTS_QUERY from "../../queries/artists/GetPresentArtistsQuery";

const ArtistContainer = styled.div`
  width: 1905px;
  position: relative;
  left: -252.5px;
  box-sizing: border-box;
  padding-left: 252.5px;
  padding-right: 252.5px;
`;

const PresentArtists = () => {
    let { loading, error, data } = useQuery(GET_PRESENT_ARTISTS_QUERY);
    if(loading) return (<p>Loading...</p>);
    if(error) return(<h4>Error!! `${error.message}`</h4>);

    return(
        <>
            <ArtistContainer id="our-artists" data-vc-full-width="true" data-vc-full-width-init="true" data-stellar-offset-parent="true" className="vc_row wpb_row vc_row-fluid content-padding vc_custom_1504636772443 vc_row-has-fill vc_column-gap-35">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                    { data && (
                        <>
                            { data.artists.map((item: any)=> (
                                <div key={item.id}>
                                    <MemberList name={ item.name } designation={ item.designation} image={ item.avatar.formats.small.url }/>
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

export default PresentArtists;
