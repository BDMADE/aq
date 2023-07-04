import { gql } from "@apollo/client";

const GET_PRESENT_EXHIBITION_QUERY = gql`
    {
        exhibitions(where: { group: "current" }) {
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

export default GET_PRESENT_EXHIBITION_QUERY;
