import { gql } from "@apollo/client";

const GET_STAFFS_QUERY = gql`
    {
        boardMembers(where: { group: "staff" }) {
            id
            name
            designation
            group
        }
    }

`;

export default GET_STAFFS_QUERY;
