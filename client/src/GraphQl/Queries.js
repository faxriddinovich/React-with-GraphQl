import {gql} from '@apollo/client'

export const LOAD_USERS=gql`
query{
    getAllUser{
      firstName,
      lastName,
      email,
      id,
      password
    }
  }

`