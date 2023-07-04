import { gql } from "@apollo/client";


const GET_ARTIST_DETAIL_QUERY =  gql`
query artist($id: ID!) {
  artist(id: $id) {
    name
    designation
    quotes
    description
    avatar {
      url
      formats
    }
    works {
      url
      formats
    }
    fetaureWork {
      id
      name
      details
      Image {
        url
        formats
      }
      imagePosition
    }
  }
}
`;

export default GET_ARTIST_DETAIL_QUERY;
