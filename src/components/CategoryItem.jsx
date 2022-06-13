import React from 'react'

function CategoryItem({ item }) {
    return (
        <div className='flex-1 m-1 h-[80vh] relative'>
            <img className='w-full h-full object-cover' src={item.img} alt='...' />
            <div className='absolute w-full h-full top-0 left-0 flex items-center justify-center flex-col'>
                <h1 className='text-white mb-5 font-bold text-2xl text-shadow-xl'>{item.title}</h1>
                <button className='border-none p-2 bg-white text-gray-400 cursor-pointer font-semibold'>SHOP NOW</button>
            </div>
        </div>
    )
}

export default CategoryItem