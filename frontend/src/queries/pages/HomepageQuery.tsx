import { gql } from "@apollo/client";

const GET_HOMEPAGE_QUERY = gql`
    {
        homepage {
            title
            description
            seo {
                metaTitle
                metaDescription
                twitterCardType
                twitterUsername
                shareImage {
                    url
                }

            }
            sliders
            exhibitions
            details
            events
            featuredCollection
            photoGallery
        }
    }
`;

export default GET_HOMEPAGE_QUERY;
