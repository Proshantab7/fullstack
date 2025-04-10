'use client'
import { useParams } from 'next/navigation'
import React from 'react'

const Page = () => {
  const params = useParams()
  console.log(params);
  
  return (
    <div>
      <h1>First service by me</h1>
      <p>This params is catch all segment:{params.firstservices}</p>
    </div>
  )
}

export default Page