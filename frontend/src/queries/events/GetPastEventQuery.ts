import { gql } from "@apollo/client";

const GET_PAST_EVENT_QUERY = gql`
    {
        events(where: { group: "past" }) {
            id
            title
            start
            end
            images {
                url
                formats
            }
        }
    }
`;

export default GET_PAST_EVENT_QUERY;
