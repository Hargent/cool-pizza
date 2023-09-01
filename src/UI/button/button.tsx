import { Link } from 'react-router-dom'
import React from 'react'

type Props = {
    isCreating?:boolean,
    children :string
    to?:string
    type:string
}
type Styles ={
  [key:string]:string
}

  const base ="bg-yellow-400 text-sm uppercase font-semibold text-stone-800 inline-block  tracking-wide rounded-full hover:bg-yellow-300 transition-colors focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";

const styles:Styles = {
  primary:`${base} py-3 px-4 sm:px-6 sm:py-4`,
  small:`${base} py-2 px-4 md:px-5 md:py-2.5 text-xs`,
  secondary:"text-sm uppercase border-2 border-stone-300 py-2.5 px-4 sm:px-6 sm:py-3.5 font-semibold text-stone-400 inline-block  tracking-wide rounded-full hover:text-stone-800 hover:bg-stone-300 transition-colors focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed "
}
const Button:React.FC<Props> = ({isCreating=false,children,to,type}: Props) => {
  return ( to?
        <Link to={to} className={styles[type]}>Order pizzas</Link>

    :
    <button disabled={isCreating}  className={styles[type]}>
            {children}
          </button>
  )
}

export default Button