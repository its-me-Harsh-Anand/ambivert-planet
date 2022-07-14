import { useAuth0 } from '@auth0/auth0-react';
import axios from "axios"
import React from 'react'

function ApiButton() {
    const { getAccessTokenSilently } = useAuth0();

    async function callProtectedApi() {
      try {
        const token = await getAccessTokenSilently()
        const response = await axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/api/protected`, {
          headers : {
            authorization : `Bearer ${token}`
          }
        })
  
        console.log(response.data)
      } catch (error) {
        console.log(error.message)
      }   
    }

    function callUnprotectedApi(){
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/unprotected`)
        .then(res => console.log(res.data))
        .catch(err => console.log(err.message))
    }
    function callWithoutTokenUnprotectedApi(){
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/unprotected2`)
        .then(res => console.log(res.data))
        .catch(err => console.log(err.message))
    }



  return (
    <div>
        <button onClick={()=>callProtectedApi()}>
            Protected api button
        </button>
        <button onClick={()=>callUnprotectedApi()}>
            Unprotected api button
        </button>
        <button onClick={()=>callWithoutTokenUnprotectedApi()}>
            without token protected api button
        </button>
    </div>
  )
}

export default ApiButton