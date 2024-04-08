import React from 'react'
import spinner from '../assets/spinner.svg'

const Loading = () => {
  return (
    <main className=' w-full flex items-center justify-center h-screen'>
        <img src={spinner} className=' w-[60px] h-[60px]' alt="" />
    </main>
  )
}

export default Loading