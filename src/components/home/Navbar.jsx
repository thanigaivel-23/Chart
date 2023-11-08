import React, {useState } from 'react';
import { Drawer } from 'antd';
import {Link} from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import avatar from '../../assets/avatar.jpeg'
import '../../App.css'


const Navbar = () => {

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const NavContent = ()=>{
    return(
      <>
      <p className='hover:text-gray-500 mt-4 mb-4'><a href="#Line chart">Line Chart</a></p>
      <p className='hover:text-gray-500 my-4'><a href="#Gauge">Gauge Chart</a></p>
      <p className='hover:text-gray-500 my-4'><a href="#Bar">Bar Chart</a></p>
      <p className='hover:text-gray-500 my-4'><a href="#"><img className='rounded-full w-14' src={avatar} alt="" /></a></p>
      <p className=' px-4 py-2 my-4 rounded-md bg-blue-400 hover:bg-blue-500 text-white font-bold' ><Link to='/' >Log out</Link></p>
    </>
    )
  }
  return (
    <>
    <main className='flex items-center justify-between px-8 md:px-16 pt-4 sticky top-0 bg-white py-3 border z-20'>
      <div className='font-bold text-2xl'><a href="#Line chart">StocksX</a></div>
      <div className='hidden md:flex items-center gap-x-10'>
          <NavContent/>
      </div>
      <button className=' md:hidden' type="primary" onClick={showDrawer}>
       <FaBars className=" text-xl text-black" />
      </button>
      <Drawer  placement="right" width={230} onClose={onClose} open={open}>
        <NavContent/>
      </Drawer>

    </main>
    </>
  )
}

export default Navbar