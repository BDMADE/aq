import { gql } from "@apollo/client";

const GET_FOOTER_SOCIAL_LINKS = gql`
    {
        footer {
            socialNetworkLink {
                name
                iconName
                url
                isVisible
            }
        }
    }
`;

export default GET_FOOTER_SOCIAL_LINKS;
