import { gql } from "@apollo/client";

const GET_MEMBERS_QUERY = gql`
    {
        boardMembers(where: { group: "member" }) {
            id
            name
            designation
            image {
                formats
            }
            group
        }
    }

`;

export default GET_MEMBERS_QUERY;
