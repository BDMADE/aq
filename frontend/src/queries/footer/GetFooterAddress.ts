import { gql } from "@apollo/client";

const GET_FOOTER_ADDRESS = gql`
    {
        footer {
            address
        }
    }    
`;

export default GET_FOOTER_ADDRESS;
