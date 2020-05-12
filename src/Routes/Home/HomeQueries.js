import { gql } from "apollo-boost"

export const HOME_QUERY = gql`
    {
        readProduct{
            id
            productname
            Company{
                companyname
              }
              Category{
                categoryname
              }
        }
    }
`;