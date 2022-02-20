import React, { useEffect, useState } from 'react'
import {useQuery,gql} from '@apollo/client'
import {LOAD_USERS} from '../GraphQl/Queries'
function GetUsers() {
  const [users,setUsers]=useState([])
  const {data}=useQuery(LOAD_USERS)
  useEffect(()=>{
    if(data){
      setUsers(data.getAllUser)
      console.log(users)
    }
  },[data])
  return (
    <>
      <div className='container'>
        <div className={'row'}>
          {users.map(item=><div key={item.id} className='col-md-3'>
            <div className='card mt-3'>
              <div className='card-header'>
                <h3>{item.firstName}</h3>
              </div>
              <div className='card-body'>
                {item.email}
              </div>
            </div>
          </div>)}
        </div>
      </div>
    </>
  )
}

export default GetUsers