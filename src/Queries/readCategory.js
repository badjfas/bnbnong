import {gql} from "apollo-boost";

export const QUERY_CATEGORY=gql`
    {
        readAllFC{
            id
            name
        }
    }
`;