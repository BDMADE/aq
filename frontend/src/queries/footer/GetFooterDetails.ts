import { gql } from "@apollo/client";

const GET_FOOTER_DETAILS = gql`
    {
        footer {
            description
        }
    }    
`;

export default GET_FOOTER_DETAILS;
