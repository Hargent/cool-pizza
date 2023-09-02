import { Link } from 'react-router-dom'
import React from 'react'

type Props = {
    
    children : string
    to?:string
  type: string,
  onClick?: (e: React.FormEvent) => void,
 
  disabled?: boolean
}
type Styles ={
  [key:string]:string
}

  const base ="bg-yellow-400 text-sm uppercase font-semibold text-stone-800 inline-block  tracking-wide rounded-full hover:bg-yellow-300 transition-colors focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";

const styles:Styles = {
  primary:`${base} py-3 px-4 sm:px-6 sm:py-4`,
  small:`${base} py-2 px-4 md:px-5 md:py-2.5 text-xs`,
  secondary:"text-sm uppercase border-2 border-stone-300 py-2.5 px-4 sm:px-6 sm:py-3.5 font-semibold text-stone-400 inline-block  tracking-wide rounded-full hover:text-stone-800 hover:bg-stone-300 transition-colors focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed "
  ,round:`${base} py-1 px-2 md:px-3 md:py-1.5 text-sm`
}
const LocationButton:React.FC<Props> = ({disabled,children,to,type,onClick}: Props) => {
  return ( to?
    <Link to={to} className={styles[type]}>{children}</Link>

    :
    onClick?
        <button disabled={disabled} type='submit'  onClick={onClick}  className={styles[type]}>
            {children}
          </button> :
          <button disabled={disabled} className={styles[type]}>
            {children}
          </button>
  )
}

export default LocationButton