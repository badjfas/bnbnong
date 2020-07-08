import { gql } from "apollo-boost"

export const getList =gql`
query getList($user_id:Int!){
    getList(user_id:$user_id){
      id
      name
      file_name
      detail_file
      family
      state
    }
}
`;
