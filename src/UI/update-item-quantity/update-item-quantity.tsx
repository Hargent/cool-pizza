import { decreaseQuantity, increaseQuantity } from '../../features/cart/cart-slice'

import Button from '../button/button'
import React from 'react'
import { useAppDispatch } from '../../redux/hook/reducer-hooks'

type Props = {
    pizzaId: number,
    currentQuantity:number
}

const UpdateItemQuantity:React.FC<Props> = ({ pizzaId,currentQuantity }: Props) => {
    const dispatch = useAppDispatch()
    const handleDecreaseItemQuantity = () => { 
      if (!pizzaId) return
  
      dispatch(decreaseQuantity(pizzaId))
      
    }
    const handleIncreaseItemQuantity = () => { 
      if (!pizzaId) return
      dispatch(increaseQuantity(pizzaId))
    
    }

    return (
      <div className=' flex items-center gap-2 md:gap-4'>
          <Button type='round' onClick={handleIncreaseItemQuantity}>+</Button>
            <span className=' text-sm font-medium'>{currentQuantity}</span>
            <Button type='round' onClick={handleDecreaseItemQuantity}>-</Button>
    </div>
  )
}

export default UpdateItemQuantity