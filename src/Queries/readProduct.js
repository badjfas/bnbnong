import { gql } from "apollo-boost"

export const READ_PRODUCT = gql`
{
  readProduct{
    id
    productname
    price
    content
    status
    image_1
    iamge_2
    image_3
    FamilyCategory{
      name
    }
  }
}
    
`;