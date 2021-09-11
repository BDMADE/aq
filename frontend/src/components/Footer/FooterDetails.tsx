import React from "react";
import {useQuery} from "@apollo/client";
import GET_FOOTER_DETAILS from "../../queries/footer/GetFooterDetails";

const FooterDetails = () => {
    let { loading, error, data } = useQuery(GET_FOOTER_DETAILS);
    if(loading) return (<p>Loading..</p>);
    if(error) return(<h4>Error! `${error.message}`</h4>);

    return (
        <aside id="text-2" className="col-12 col-md-4  text-center text-md-left  sidebar-widget widget_text">
            <div className="textwidget">
                <p>{data.footer && data.footer.description}</p>
            </div>
        </aside>
    );
}

export default FooterDetails;