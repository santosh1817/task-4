import { FETCH_USER } from './types';
import { LOGOUT_USER } from './types';

import axios from 'axios'
import jwt_decode from 'jwt-decode' 



export const fetchUser=(formData)=>dispatch=>{

  axios.post('http://localhost:3005/users/login', formData)
  .then(res=>{
    
    const token=res.data.token
    localStorage.setItem('token',token)
    
    const decode=jwt_decode(token)
    dispatch({
      type: FETCH_USER,
      payload: decode
    })


  })

}

export const logoutUser=()=>dispatch=>{

  localStorage.removeItem('token')
  dispatch({
        type: LOGOUT_USER,
        payload: {}
  })


  // axios.post('http://localhost:3005/users/login', formData)
  // .then(res=>{
    
  //   const token=res.data.token
  //   localStorage.setItem('token',token)
    
  //   const decode=jwt_decode(token)
  //   dispatch({
  //     type: FETCH_USER,
  //     payload: decode
  //   })


  // })

}




