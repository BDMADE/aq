import { gql } from "@apollo/client";

const GET_COLLECTIONS_PAGE_QUERY = gql`
    {
        gallery {
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
              visibleBanner
              visibleGallery
          }
        }
    }
`;

export default GET_COLLECTIONS_PAGE_QUERY;
