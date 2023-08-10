import React from 'react'

const Footer = () => {
  return (
    <div className='footer mt-[100px] mr-[200px] mb-[20px] ml-[200px]'>
        <div className="top flex gap-[50px]">
            <div className="item flex-1 flex flex-col gap-[10px] text-justify text-[14px]">
                <h1 className='text-[18px] font-[500] text-[#555]'>Categories</h1>
                <span className='text-black'>Women</span>
                <span className='text-black'>Men</span>
                <span className='text-black'>Shoes</span>
                <span className='text-black'>Accessories</span>
                <span className='text-black'>New Arrivals</span>
            </div>
            <div className="item flex-1 flex flex-col gap-[10px] text-justify text-[14px]">
                <h1 className='text-[18px] font-[500] text-[#555]'>Links</h1>
                <span className='text-black'>FAQ</span>
                <span className='text-black'>Pages</span>
                <span className='text-black'>Stores</span>
                <span className='text-black'>Compare</span>
                <span className='text-black'>Cookies</span>
            </div>
            <div className="item flex-1 flex flex-col gap-[10px] text-justify text-[14px]">
                <h1 className='text-[18px] font-[500] text-[#555]'>About</h1>
                <span className='text-black'>

                </span>
            </div>
            <div className="item flex-1 flex flex-col gap-[10px] text-justify text-[14px]">
                <h1 className='text-[18px] font-[500] text-[#555]'>Contact</h1>
                <span className='text-black'>
                    
                </span>
            </div>
        </div>
        <div className="bottom flex items-center justify-beetween mt-[50px]">
            <div className="left flex items-center">
                <span className="copyright ml-[20px] text-[12px]"> Copyright © LTC Co, All Rights Reserved</span>
            </div>
        </div>
    </div>
  )
}

export default Footer