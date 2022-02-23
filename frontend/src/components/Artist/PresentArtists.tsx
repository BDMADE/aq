import React from 'react';
import { Link } from 'react-router-dom';
import {useQuery} from "@apollo/client";
import MemberList from "../BoardMember/MemberList";
import GET_PRESENT_ARTISTS_QUERY from "../../queries/artists/GetPresentArtistsQuery";

const PresentArtists = () => {
    let { loading, error, data } = useQuery(GET_PRESENT_ARTISTS_QUERY);
    if(loading) return (<p>Loading...</p>);
    if(error) return(<h4>Error!! `${error.message}`</h4>);

    return(
        <div id="our-artists" data-vc-full-width="true" data-vc-full-width-init="true" data-stellar-offset-parent="true" className="vc_row wpb_row vc_row-fluid content-padding vc_row-has-fill vc_column-gap-35">
            { data && (
                <div className="wpb_column vc_column_container vc_col-sm-12">
                    { data.artists.map((item: any)=> (
                        <div key={item.id}>
                            <Link to={`artists/${item.id}`}><MemberList name={ item.name } designation={ item.designation} image={ item.avatar.formats.small.url }/></Link>
                        </div>
                    ))  }
                </div>
            ) }
        </div>
    );
}

export default PresentArtists;
