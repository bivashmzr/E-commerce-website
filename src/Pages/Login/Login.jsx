import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import  Button  from '@mui/material/Button';
import { IoMdEyeOff } from 'react-icons/io';
import { IoMdEye } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";



const Login = () => {
    const [IsshowPassword, setIsshowPassword] = useState(false)
  return (
    <section className='section !py-10'>
        <div className="container">
            <div className="card shadow-md w-[400px] !m-auto rounded-md bg-white !p-4 !px-10"> 
                <h3 className='text-center text-[19px] text-black !mb-4 !py-1'>Login to your account</h3>
                <form className='w-full'>
                    <div className='form-group w-full !mb-5'>
                       <TextField type='email' id="email" label="Email Id *" variant="outlined" className='w-full'/>
                    </div>
                    <div className='form-group w-full !mb-2  relative'>
                       <TextField type={IsshowPassword === false ? "password" : "text" } id="password" label="Password *" variant="outlined" className='w-full'/>
                       <Button className='!absolute top-[10px] right-[4px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black' onClick={()=>{setIsshowPassword(!IsshowPassword)}}>
                       { IsshowPassword=== false ? <IoMdEye className='text-[20px] opacity-75'/> : <IoMdEyeOff className='text-[20px] opacity-75' />}
                       </Button>
                    </div>
                    <a className='link cursor-pointer text-[14px] font-[500] text-gray-600'>Forgot Password</a>
                    <div className='flex items-center w-full !mt-2'>
                        <Button className='btn-org w-full active:scale-99'> Login</Button>

                    </div>
                    <p className='text-center !mt-3'>Not Registered?  <Link className='Link text-[14px] font-[600]' to="/register">Sign Up</Link></p>

                    <p className="text-center text-gray-500">Or continue with social account</p>
                    <Button className='flex gap-3 !p-2 w-full !bg-[#f1f1f1] !text-black !my-2'><FcGoogle className='text-[20px]'/>Sign In with Google</Button>
                </form>
            </div>
        </div>

    </section>
  )
}

export default Login