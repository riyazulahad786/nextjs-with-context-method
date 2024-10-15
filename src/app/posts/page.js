"use client"
import React, { useContext } from 'react';
import { PostContext } from '../context/PostContext'
function Page() {
    const {post} = useContext(PostContext);
    console.log(post)
  return (
    <div>Page</div>
  )
}

export default Page