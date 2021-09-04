import { gql } from "@apollo/client";

const GET_DONATION_QUERY = gql`
{
  donationPage {    
    title
    description
    donation_form_link
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
      visible_form_link
    }    
  }
}   
`;

export default GET_DONATION_QUERY;
