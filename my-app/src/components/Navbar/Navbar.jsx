import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='navbar h-[80px]'>
        <div className='wrapper py-[10px] px-[30px] flex justify-between '>

            <div className='left flex items-center gap-[25px]'>
                <div className='items flex items-center'>
                    <Link to ='/'><img src='/img/logo.png' alt='' /></Link>
                </div>
                <div className='items flex items-center text-[18px]'>
                    <Link to='/products/1'>Women</Link>
                </div>
                <div className='items flex items-center text-[18px]'>
                    <Link to='/products/2'>Men</Link>
                </div>
                <div className='items flex items-center text-[18px]'>
                    <Link to='/products/3'>Kids</Link>
                </div>
            </div>

            <div className='right flex items-center gap-[25px]'>
                <div className="icons flex gap-[15px] cursor-pointer">
                    <SearchIcon/>
                    <AccountCircleOutlinedIcon />
                    <FavoriteBorderIcon />
                    <div className="cartIcon relative">
                        <ShoppingCartOutlinedIcon/>
                        <span className='text-[12px] w-[20px] h-[20px] rounded-[50%] bg-slate-500 text-white absolute right-[-10px] top-[-10px] flex justify-center'>0</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar