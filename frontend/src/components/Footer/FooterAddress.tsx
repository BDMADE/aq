import React from "react";
import parse from 'html-react-parser';
import {useQuery} from "@apollo/client";
import GET_FOOTER_ADDRESS from "../../queries/footer/GetFooterAddress";

const FooterAddress = () => {
    let { loading, error, data } = useQuery(GET_FOOTER_ADDRESS);
    if(loading) return (<p>Loading..</p>);
    if(error) return(<h4>Error! `${error.message}`</h4>);

    return(
        <aside id="text-3" className="col-6 col-md-2  offset-md-2 text-center text-md-left ml-auto sidebar-widget widget_text">
            <div className="textwidget">
                <p>{parse(data.footer.address)}</p>
            </div>
        </aside>
    );
}

export default FooterAddress;
