import {gql} from "apollo-boost";

export const SELECT_PRODUCT = gql`
query selectProduct($id:Int!) {
  selectProduct(id:$id) {
    id
    productname
    price
    content
    status
    FamilyCategory{
      id
      name
    }    
    image_1
  }
}
`;
