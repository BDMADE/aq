import { gql } from "@apollo/client";

const GET_FUTURE_EXHIBITION_QUERY = gql`
    {
        exhibitions(where: { group: "future" }) {
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

export default GET_FUTURE_EXHIBITION_QUERY;
