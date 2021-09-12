import { gql } from "@apollo/client";

const GET_PRESENT_ARTISTS_QUERY = gql`
    {
        artists (where: { group: "current" }) {
            id
            name
            designation
            avatar {
                formats
            }
        }
    }
`;

export default GET_PRESENT_ARTISTS_QUERY;
