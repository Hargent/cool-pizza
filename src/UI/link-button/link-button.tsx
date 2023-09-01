import { Link, useNavigate } from 'react-router-dom'

import React from 'react'

type Props = {
    children:React.ReactNode,
    to:string
}
const className =" text-sm text-blue-500 hover:text-blue-600 hover:underline"
const LinkButton:React.FC<Props> = ({children,to}: Props) => {
  const navigate = useNavigate();
    return ( to === "-1"?
  <button type="button" className={className} onClick={()=>navigate(-1)}>{children}</button>
  :
     <Link to={to} 
     className={className}>
        {children}
      </Link>
  )
}

export default LinkButton