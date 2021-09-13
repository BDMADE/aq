import { gql } from "@apollo/client";

const GET_CONTACT_US_QUERY = gql`
    {
        contactUsPage {
            title
            description
            banner {
                url
            }
            seo {
                metaTitle
                metaDescription
                shareImage {
                    url
                }
                twitterCardType
                twitterUsername
            }
            settings {
                visibleTitle
                visibleDescription
            }
        }
    }
`;

export default GET_CONTACT_US_QUERY;
