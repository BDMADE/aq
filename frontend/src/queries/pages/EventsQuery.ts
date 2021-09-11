import { gql } from "@apollo/client";

const GET_EVENT_PAGE_QUERY = gql`
    {
        eventsPage {
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

export default GET_EVENT_PAGE_QUERY;
