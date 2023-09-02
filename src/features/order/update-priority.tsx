import Button from '../../UI/button/button'
import { ORDER_ITEM_TYPE } from '../../utils/types/data-types'
import React from 'react'
import { useFetcher } from 'react-router-dom'

type Props = {
    order:ORDER_ITEM_TYPE
}

const UpdatePriority: React.FC<Props> = ({ order }: Props) => {
    const fetcher = useFetcher()
    console.log(order);
    
    
    return (
      <fetcher.Form method='PATCH' className=' text-right'>
          <Button type='primary'>Make Priority</Button>
      </fetcher.Form>
  )
}


export default UpdatePriority