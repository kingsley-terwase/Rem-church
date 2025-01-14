import React from 'react'
import {Link} from 'react-router-dom'

const LinkCustomized = ({ to, style, children}) => {
  return (
    <>
      <Link style={{textDecoration: "none"}}to={to}>{children}</Link>
    </>
  )
}

export default LinkCustomized
