import { gql } from "@apollo/client";

const GET_MEMBERS_QUERY = gql`
    {
        boardMembers(where: { group: "member" }) {
            id
            name
            designation
            group
        }
    }

`;

export default GET_MEMBERS_QUERY;
