import { gql } from "@apollo/client";

const GET_HOMEPAGE_QUERY = gql`
    {
        homepage {
            Seo {
                metaTitle
                metaDescription
                twitterCardType
                twitterUsername
                shareImage {
                    url
                }
            }

            Slider
            Exhibitions
            Details
            Events
            FeaturedCollection
            PhotoGallery
        }
    }
`;

export default GET_HOMEPAGE_QUERY;
