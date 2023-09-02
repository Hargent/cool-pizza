import Button from '../../UI/button/button'
import React from 'react'
import { useFetcher } from 'react-router-dom'

const UpdatePriority: React.FC = () => {
    const fetcher = useFetcher()

    return (
      <fetcher.Form method='PATCH' className=' text-right'>
          <Button type='primary'>Make Priority</Button>
      </fetcher.Form>
  )
}


export default UpdatePriority