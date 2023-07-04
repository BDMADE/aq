import { gql } from "@apollo/client";

const GET_ARCHIVE_ARTISTS_QUERY = gql`
    {
        artists (where: { group: "archive" }) {
            id
            name
            designation
            avatar {
                url
                formats
            }
        }
    }
`;

export default GET_ARCHIVE_ARTISTS_QUERY;
