"use client"
import axios from "axios";
import { createContext,useState,useEffect } from "react"

export const PostContext = createContext();

export const ProviderContext = ({children})=>{
   const [post, setPost] = useState([]);
   useEffect(()=>{
    const getData = async() => {
       const response =await axios.get("https://jsonplaceholder.typicode.com/posts")
       const result =  response.data
       console.log(result)
       setPost(result)
    }
    getData()
   },[])
   return (
    <>
        <PostContext.Provider value={{post}}>
            {children}
        </PostContext.Provider>
    </>
   )
}