import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import {CREATE_USER_MUTATION} from  '../GraphQl/Mutation'

function Forms() {
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const [createUser,{error}]=useMutation(CREATE_USER_MUTATION)
    function addUser(){
      createUser({
        variables:{
          firstName:firstName,
          lastName:lastName,
          email:email,
          password:password,
        },
      })
      if(error){
        console.log(error)
      }
      alert("Done")
    }
  return (
    <div className='row'>
        <div className='col-6 mx-auto'>
            <div className='forms mt-2 d-flex text-center justify-content-between'>
                <input type={'text'} className='form-control' placeholder='First name' onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
                <input type={'text'} className='form-control' placeholder='Last name' onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
                <input type={'text'} className='form-control' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
                <input type={'password'} className='form-control' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
            </div>
            <button className='btn btn-outline-success' onClick={addUser}>Create user</button>
        </div>
    </div>
  )
}

export default Forms