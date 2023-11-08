import React from 'react'
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import logImg from '../assets/login.png'

import { BiSolidLock } from 'react-icons/bi';
import { FaUserAlt } from 'react-icons/fa';
import { RiFolderKeyholeLine } from 'react-icons/ri';
import { registerValidation } from '../helper/validate';

const Login = () => {

  const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
      email: "",
      password: ""
        },
        validate: registerValidation,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: (values) => {
            navigate("/home")
        },
      });


  return (
    <>
    <main className=' flex  md:pt-24 lg:pt-16 h-screen border bg-slate-50'>
      <Toaster position="top-center" reverseOrder={false}></Toaster>

        <div className='hidden md:block w-[40%] md:ml-14 lg:ml-24'><img  src={logImg} alt="" /></div>

        <div className='md:w-[40%]  lg:w-[30%] xl:w-[22%] md:ml-12  lg:ml-24 md:mt-7 lg:mt-20 flex justify-center items-center flex-col md:block  w-full'>
            <h2 className='font-bold text-3xl md:text-4xl pb-10'>Log In</h2>
            <form className='w-[70%] md:w-auto' onSubmit={formik.handleSubmit}>
                <div className=' relative my-5 border-b-2 border-black'>
                    <label htmlFor=""  className='absolute bottom-3'><FaUserAlt/></label>
                    <label htmlFor=""  className='absolute bottom-3 right-0 text-lg'><RiFolderKeyholeLine/></label>
                    <input  {...formik.getFieldProps("email")}  type="text"placeholder='Email' className='outline-none  pl-9  h-10 w-full bg-slate-50' />
                </div>
                <div className='relative my-5 border-b-2 border-black'>
                    <label htmlFor=""className='absolute bottom-3 text-lg' ><BiSolidLock/></label>
                    <label htmlFor=""className='absolute bottom-3 right-0 text-lg' ><RiFolderKeyholeLine/></label>
                    <input {...formik.getFieldProps("password")}  type="password" placeholder='Password' className='outline-none  pl-9  h-10 w-full bg-slate-50'/>
                </div>
                <button  type='submit' className='mt-10 px-7 w-[100%] py-3 rounded-md bg-blue-400 hover:bg-blue-500 text-white font-bold'>Log in</button>
            </form>
        </div>
    </main>
    </>
  )
}

export default Login