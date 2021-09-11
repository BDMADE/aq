import { gql } from "@apollo/client";

const GET_EXHIBITION_PAGE_QUERY = gql`
    {
        exhibitionPage {
            title
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
                visiblePastCeremony
                visiblePresentCeremony
                visibleFutureCeremony
            }
        }
    }
`;

export default GET_EXHIBITION_PAGE_QUERY;
