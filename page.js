import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div className='items-center  mt-[55px] flex'>
      <h1 className='text-black text-[35px] ml-[5%]'>This Is Home Page</h1>
      <div className='flex space-x-4 ml-[55%]'>
  <Link href='/Signup' className='py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition duration-300 ease-in-out'>
    Signup
  </Link>
  <Link href='/Login' className='py-2 px-4 bg-white text-blue-500 border border-blue-500 rounded-full hover:bg-blue-100 transition duration-300 ease-in-out'>
    Login
  </Link>
</div>
</div>
  )
}

export default page