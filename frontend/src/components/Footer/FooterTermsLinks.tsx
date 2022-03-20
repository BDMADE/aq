import React from "react";
import {Link} from "react-router-dom";

const FooterTermsLinks = () => {
    return(
        <aside id="text-4" className="col-6 col-md-2  offset-md-1 text-center text-md-left  sidebar-widget widget_text">
            <div className="textwidget">
                <p>
                    Copyright @ 2022 at Art Quest<br />
                    All rights reserved.<br />
                    <Link to="/disclaimer-and-privacy-information">Disclaimer & Privacy Information.</Link><br/>
                    Developed by <strong>BDMADE</strong>
                </p>
            </div>
        </aside>
    );
}

export  default FooterTermsLinks;
