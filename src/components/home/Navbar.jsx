import React, {useState } from 'react';
import { Drawer } from 'antd';

import { FaBars } from 'react-icons/fa';

import avatar from '../../assets/avatar.jpeg'

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
      <p className='hover:text-gray-500 py-2'><a href="#Line chart">Line chart</a></p>
      <p className='hover:text-gray-500 py-2'><a href="#Gauge">Gauge</a></p>
      {/* <p className='hover:text-gray-500 py-2'><a href="#">Contact</a></p> */}
      <p className='hover:text-gray-500 py-2'><a href="#"><img className='rounded-full w-14' src={avatar} alt="" /></a></p>
    </>
    )
  }
  return (
    <>
    <main className='flex items-center justify-between px-8 md:px-16 pt-4 sticky top-0 bg-white py-3 border z-20'>
      <div className='font-bold text-2xl'>StocksX</div>
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