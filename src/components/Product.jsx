import React from 'react';

function Product({ item }) {
    return (
        <div className='flex-1 m-1 min-w-[280px] h-[350px] flex items-center justify-center bg-gray-100 relative'>
            <div className='w-64 h-64 rounded-full bg-white absolute'>

            </div>
            <img className='h-3/4 z-10' src={item.img} alt='...' />
            <div className='w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.2)] flex items-center justify-center z-30 opacity-0 transition-all duration-500 ease-linear cursor-pointer hover:opacity-100'>
                <div>
                    <i className='fa-solid fa-cart-shopping w-10 h-10 rounded-full bg-white flex items-center justify-center m-3 transition-all ease-linear hover:bg-slate-200 hover:scale-110'></i>
                </div>
                <div>
                    <i className='fa-solid fa-magnifying-glass w-10 h-10 rounded-full bg-white flex items-center justify-center m-3 transition-all ease-linear hover:bg-slate-200 hover:scale-110'></i>
                </div>
                <div>
                    <i className='fa-regular fa-heart w-10 h-10 rounded-full bg-white flex items-center justify-center m-3 transition-all ease-linear hover:bg-slate-200 hover:scale-110'></i>
                </div>
            </div>
        </div>
    )
}

export default Product