import Login from '@/components/polls/credential/Login'
import React from 'react'

export default function page({searchParams}) {
  return (
    <div className='flex flex-col'>
      <Login type='signup' />
    </div>
  )
}
