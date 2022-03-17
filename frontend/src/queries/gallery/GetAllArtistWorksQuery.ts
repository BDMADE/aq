import { gql } from "@apollo/client";

const GET_ALL_ARTIST_WORKS_QUERY = gql`
    {
        artists {
            id
            name
            designation
            works {
                id
                formats
                url
            }
        }
    }
`;

export default GET_ALL_ARTIST_WORKS_QUERY;
