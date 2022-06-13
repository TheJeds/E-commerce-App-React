import React from 'react'

function Newsletter() {
    return (
        <div className='h-[60vh] bg-rose-50 flex items-center justify-center flex-col'>
            <h1 className='text-7xl font-bold mb-5'>Newsletter</h1>
            <div className='text-2xl font-light mb-5'>Get timely updates from your favorite products.</div>
            <div className='w-1/2 h-10 bg-white flex justify-between border-solid border-[1px] border-gray-200'>
                <input className='border-none flex-[8] pl-5' type="email" name="" id="" placeholder='Your e-mail' />
                <button className='flex-1 bg-teal-700 text-white'>
                    <i className='fa-solid fa-paper-plane'></i>
                </button>
            </div>
        </div>
    )
}

export default Newsletter