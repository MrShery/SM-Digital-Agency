import React from 'react'
import AgencyLogo from "../assets/Media/Logo/Asset 1.png"

const Logo = ({className}) => {
  return (
    <img src={AgencyLogo} className={`${className}`} alt="Agency Logo" />
  )
}

export default Logo