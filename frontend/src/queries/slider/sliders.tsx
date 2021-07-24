import { gql } from "@apollo/client";

const GET_SLIDERS_QUERY = gql`
    {
        sliders {
            id
            name
            image {
                url
                formats
            }
        }
    }
`;

export default GET_SLIDERS_QUERY;