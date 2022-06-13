import React from "react";

const Navbar = () => {
    return(
        <div className='h-[60px]'>
            <div className='-mt-3 py-0 px-[20px] flex justify-between items-center'>
                <div id='left' className='flex-1 flex items-center'>
                    <span className='text-sm cursor-pointer'>EN</span>
                    <div className='m-6 p-1 border-solid border-[0.5px] border-gray-200 flex items-center'>
                        <input className='border-none' type='text' />
                        <i className='fa-solid fa-magnifying-glass text-gray-400 text-base'></i>
                    </div>
                </div>
                <div id='center' className='flex-1 text-center'>
                    <h1 className='font-bold text-4xl'>KHAOS</h1>
                </div>
                <div id='right' className='flex-1 flex items-center justify-end'>
                    <div className='text-sm cursor-pointer ml-6'>
                        REGISTER
                    </div>
                    <div className='text-sm cursor-pointer ml-6'>
                        SIGN IN
                    </div>
                    <div className='text-sm cursor-pointer ml-6'>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;