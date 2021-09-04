import { gql } from "@apollo/client";

const GET_BOARD_MEMBERS_QUERY = gql`
    {
        boardMembersPage {
            title
            banner {
                url
            }
            seo {
                metaTitle
                metaDescription
                shareImage {
                    url
                }
                twitterUsername
                twitterCardType
            }
            settings {
                visible_title
                visible_members
                visible_staffs
            }
        }
    }
`;

export default GET_BOARD_MEMBERS_QUERY;
