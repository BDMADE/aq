import { gql } from "@apollo/client";

const GET_PRESENT_EXHIBITION_QUERY = gql`
    {
        exhibitions(where: { group: "current" }) {
            id
            title
            start
            end
            image {
                formats
            }
        }
    }
`;

export default GET_PRESENT_EXHIBITION_QUERY;
