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
            settings {
              sliders
              exhibitions
              details
              events
            }
        }
    }
`;

export default GET_HOMEPAGE_QUERY;
