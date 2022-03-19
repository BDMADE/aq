import { gql } from "@apollo/client";


const GET_EXHIBITION_DETAILS_QUERY =  gql`
query exhibition($id: ID!) {
  exhibition(id: $id) {
    id
    title
    start
    end
    venue
    description
    images {
      url      
    }
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
  }
}
`;

export default GET_EXHIBITION_DETAILS_QUERY;
