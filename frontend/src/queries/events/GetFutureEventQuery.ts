import { gql } from "@apollo/client";

const GET_FUTURE_EVENT_QUERY = gql`
    {
        events(where: { group: "future" }) {
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

export default GET_FUTURE_EVENT_QUERY;
