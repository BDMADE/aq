import React from "react";
import {useQuery} from "@apollo/client";
import GET_FOOTER_SOCIAL_LINKS from "../../queries/footer/GetFooterSocialLinks";
import SocialLink from "./SocialLink";

const SocialLinkList = () => {
    let { loading, error, data } = useQuery(GET_FOOTER_SOCIAL_LINKS);
    if(loading) return (<p>Loading..</p>);
    if(error) return(<h4>Error! `${error.message}`</h4>);

    let socialNetworkLinks: any = data.footer.socialNetworkLink;

    return(
        <aside id="text-1" className="col-12 col-md-2  text-center text-md-left  sidebar-widget widget_text">
            <div className="text widget">
                { socialNetworkLinks && (
                    <p>
                        { socialNetworkLinks.map((item: any, index: any)=> (
                            <span key={index}>{ item.isVisible && <SocialLink iconName={item.iconName} url={item.url}/> }</span>
                        ))  }
                    </p>
                ) }
            </div>
        </aside>
    );
}
export default SocialLinkList;
