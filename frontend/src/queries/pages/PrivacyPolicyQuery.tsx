import { gql } from "@apollo/client";

const GET_PRIVACY_POLICY_QUERY = gql`
    {
        privacyPolicyPage {
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

export default GET_PRIVACY_POLICY_QUERY;
