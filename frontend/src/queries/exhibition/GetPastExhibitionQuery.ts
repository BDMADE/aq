import { gql } from "@apollo/client";

const GET_PAST_EXHIBITION_QUERY = gql`
    {
        exhibitions(where: { group: "past" }) {
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

export default GET_PAST_EXHIBITION_QUERY;
