import { gql } from "@apollo/client";

const SLIDER_QUERY = gql`
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

export default SLIDER_QUERY;