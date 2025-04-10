'use client'
import React, { useState } from 'react'

const Sum = () => {
  const [sum, setSum] = useState(0)
  const fun = () => {
    setSum(sum + 1)

    
  }
  return (
    <div>
      <h1>{sum}</h1>
      <button onClick={fun}>Click Me</button>
    </div>
  )
}

export default Sum