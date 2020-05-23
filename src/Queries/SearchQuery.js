import {gql} from "apollo-boost";

export const  SEARCH =gql`
query search($productname:String!){
    searchProduct(productname:$productname){
        productname
        image_1
        price
    }
}
`;
