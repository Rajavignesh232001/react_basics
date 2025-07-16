import React from 'react'
import { useNavigate } from 'react-router-dom'
const About = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h1>About us</h1>
      <button onClick={()=>navigate('/')}>👈</button>
    </div>
  )
}

export default About
