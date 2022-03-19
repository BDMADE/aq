import { gql } from "@apollo/client";


const GET_EVENT_DETAILS_QUERY =  gql`
query event($id: ID!) {
  event(id: $id) {
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

export default GET_EVENT_DETAILS_QUERY;
