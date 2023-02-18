import { gql } from "@apollo/client";

const GET_MEMBERSHIP_QUERY = gql`
{
  membership {    
    title
    description
    new_membership_form_link
    renew_membership_form_link
    banner {
      url
    }
    side_images {    
      url
      formats
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
      visible_description      
      visible_side_images
      visible_new_form_link
      visible_renew_form_link
    }
    new_membership_form_btn_text
    renew_membership_form_btn_text
  }
}   
`;

export default GET_MEMBERSHIP_QUERY;
