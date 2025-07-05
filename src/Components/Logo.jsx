import React from 'react'
import AgencyLogo from "../assets/Media/Logo/Asset 1.png"

const Logo = ({className}) => {
  return (
    <a href="/"><img src={AgencyLogo} className={`${className}`} alt="Agency Logo" /></a>
    
  )
}

export default Logo