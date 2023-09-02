import { decreaseQuantity, deleteItem, getCurrentQuantityById } from '../../features/cart/cart-slice'
import { useDispatch, useSelector } from 'react-redux'

import Button from '../button/button'
import React from 'react'

type Props = {
    pizzaId: number 
}

const ButtonDelete: React.FC<Props>= ({ pizzaId }:Props) => {
    const dispatch = useDispatch()
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId))

  
  const handleDeleteItem = () => { 
    if(!pizzaId) return
    dispatch(deleteItem(pizzaId))

  }
  const handleDecreaseItemQuantity = () => { 
    if(!pizzaId) return
    dispatch(decreaseQuantity(pizzaId))

  }
  return (
            <Button type="small" onClick={currentQuantity>0?handleDecreaseItemQuantity:handleDeleteItem}>Delete</Button>

  )
}

export default ButtonDelete