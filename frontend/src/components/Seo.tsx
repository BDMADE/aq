import React from 'react';
import {Helmet} from "react-helmet";

type SeoProps = {
    title: string,
    description: string,
    image: string,
    twitterCardType: string,
    twitterUsername: string,
};

const Seo = (props: SeoProps) => {
    return(
        <Helmet>
            <title>{ props.title }</title>
            <meta property="og:title" content={ props.title }/>
            <meta property="og:description" content={ props.description }/>
            <meta property="og:image" content={ props.image }/>

            <meta name="twitter:card" content={ props.twitterCardType }/>
            <meta name="twitter:title" content={ props.title }/>
            <meta name="twitter:description" content={ props.description }/>
            <meta property="twitter:image" content={ props.image } />
            <meta name="twitter:site" content={ props.twitterUsername } />
            <meta name="description" content={ props.description }/>
        </Helmet>
    );
}

export default Seo;
