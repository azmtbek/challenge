import React from 'react'

export default function Login() {
  return (
    <div className='flex h-screen'>
      <div className="flex-1 flex items-center bg-gradient-to-tr 
        from-[rgb(186_87_158)] to-[rgb(85_83_160)]">
        <div className="mx-auto -mt-32   w-96  rounded-sm
          bg-[#f0e4fa7f] px-12 pt-16 pb-24 text-sm drop-shadow-lg 
          flex flex-col gap-2 text-white">
          <h1 className='text-3xl font-bold  tracking-wider mb-3'>
            PROACTIVE <br />
            PROTECTION <br />
            AGAINST <br />
            <span className='text-black'>SCAMS.</span>
          </h1>
          <p>Stay secured.</p>
          <p>In 2022, approximately <span className='underline'>$28,740,000</span> has been stolen by business imposters</p>
        </div>
      </div>

      <div className="flex-1 flex items-center h-full">
        <div className="mx-auto -mt-32 w-96 flex flex-col gap-4
          ">
          <div>
            <h1 className='text-2xl font-bold'>Sign In</h1>
            <p className='text-gray-500'> Welcome back! Please enter your details.</p>
          </div>
          <div className='flex flex-col '>
            <label className='font-semibold' htmlFor="email">Email</label>
            <input className='border-2 border-gray-200 p-2 rounded-lg px-4 py-3' name='email' type="text" placeholder='Type your email here' />
            <strong className='w-full text-right font-semibold text-sm text-pink-500 hidden mt-2'>Forgot email?</strong>
          </div>
          <div className='flex flex-col'>
            <label className='font-semibold' htmlFor="password">Password</label>
            <input className='border-2 border-gray-200 p-2 rounded-lg px-4 py-3' name='password' type="text" placeholder='Type your password here' />
            <strong className='w-full text-right font-semibold text-sm text-pink-500 mt-2'>Forgot password?</strong>
          </div>
          <button className='text-white px-4 py-3 bg-indigo-700 rounded-lg font-semibold'>Sign in</button>
          <div className='my-2 w-full relative'>
            <hr />
            <span className='absolute inset-x-0 text-center  bg-white mx-40 text-gray-300 text-sm -top-3 '>or</span>
          </div>
          <button className='flex justify-center px-4 py-3 font-semibold border-2 border-gray-200 bg-white rounded-lg'>
            <img className='w-6 h-6 mr-4' src={process.env.PUBLIC_URL + 'google.png'} alt="" />
            Sign in with Google</button>
          <p className='text-sm text-gray-500 w-full text-center'>
            Are you a new user? <a className='text-pink-500 font-semibold' href="./#">Create an account.</a>
          </p>
        </div>
      </div>
    </div>
  )
}
