import { gql } from "@apollo/client";

const GET_PRESENT_EVENT_QUERY = gql`
    {
        events(where: { group: "current" }) {
            id
            title
            start
            end
            images {
                formats
            }
        }
    }
`;

export default GET_PRESENT_EVENT_QUERY;
