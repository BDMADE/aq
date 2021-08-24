import { gql } from "@apollo/client";

const GET_HOME_EXHIBITION_QUERY = gql`
    {
        exhibitions {
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

export default GET_HOME_EXHIBITION_QUERY;
