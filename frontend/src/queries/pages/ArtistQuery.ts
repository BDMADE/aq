import { gql } from "@apollo/client";

const GET_ARTIST_PAGE_QUERY = gql`
    {
        artistPage {
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
                visibleArtists
            }
        }
    }
`;

export default GET_ARTIST_PAGE_QUERY;
