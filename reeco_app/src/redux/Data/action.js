import * as types from "./actionTypes"
import axios from "axios"
 
 
 
    export const getData=(data)=>(dispatch)=>{
        try {
           return  axios({
            method: "get",
            url: "https://qr1zme.sse.codesandbox.io/data"})
            .then((res)=>{
                console.log({res})
               dispatch({type:types.GET_DATA_SUCCESS,payload:res.data})
             }).catch((err)=>{
                console.log(err)
             })

        } catch (error) {
            console.log(error.message)
        }
    }
    export const updateData=(data,id)=>(dispatch)=>{
        try {
           return  axios({
            method: "PUT",
            url: `https://qr1zme.sse.codesandbox.io/data/${id}`,data})
        
            .then((res)=>{
                console.log({res})
               dispatch({type:types.PATCH_DATA_SUCCESS,payload:res.data})
                dispatch(getData())
             }).catch((err)=>{
                console.log(err)
             })

        } catch (error) {
            console.log(error.message)
        }
    }

    