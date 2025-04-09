'use client'
import Context, { userContext } from '@/components/Context'
import Navbar from '@/components/Navbar'
import React, { useContext } from 'react'

const Page = () => {
  const user = useContext(userContext)
  console.log(user)
  return (
    <div>
      <Navbar/>
      {user.map((item)=>
        <div key={item.id}>
            <h1>{item.name}</h1>
            <h2>{item.title}</h2>
            <h4>{item.location}</h4>
            <p>{item.email}</p>
        </div>
      )}
    </div>
  )
}

export default Page