import React from 'react'

function Footer() {
    return (
        <div className='flex'>
            <div className='flex-1 flex flex-col p-5'>
                <h1 className='text-3xl font-semibold'>KHAOS</h1>
                <p className='my-5 mx-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nobis eius facilis et aliquid ipsa veniam consectetur? Exercitationem sed ad, iusto aperiam id molestiae at, explicabo sapiente doloremque suscipit nam?</p>
                <div className='flex'>
                    <div className='w-10 h-10 rounded-full text-white bg-blue-900 flex items-center justify-center mr-5'>
                        <i className='fa-brands fa-facebook-f'></i>
                    </div>
                    <div className='w-10 h-10 rounded-full text-white bg-red-500 flex items-center justify-center mr-5'>
                        <i className='fa-brands fa-instagram'></i>
                    </div>
                    <div className='w-10 h-10 rounded-full text-white bg-sky-400 flex items-center justify-center mr-5'>
                        <i className='fa-brands fa-twitter'></i>
                    </div>
                    <div className='w-10 h-10 rounded-full text-white bg-red-700 flex items-center justify-center mr-5'>
                        <i className='fa-brands fa-pinterest-p'></i>
                    </div>
                </div>
            </div>
            <div className='flex-1 p-5'>
                <h3 className='mb-7 text-lg font-medium'>Useful Links</h3>
                <ul className='flex m-0 p-0 flex-wrap'>
                    <li className='w-1/2 mb-2'>Home</li>
                    <li className='w-1/2 mb-2'>Cart</li>
                    <li className='w-1/2 mb-2'>Man Fashion</li>
                    <li className='w-1/2 mb-2'>Woman Fashion</li>
                    <li className='w-1/2 mb-2'>Accessories</li>
                    <li className='w-1/2 mb-2'>My Account</li>
                    <li className='w-1/2 mb-2'>Order Tracking</li>
                    <li className='w-1/2 mb-2'>Wishlist</li>
                    <li className='w-1/2 mb-2'>Wishlist</li>
                    <li className='w-1/2 mb-2'>Terms</li>
                </ul>
            </div>
            <div className='flex-1 p-5'>
                <h3 className='mb-7 text-lg font-medium'>Contact</h3>
                <div className='mb-5 flex items-center'><i className='fa-solid fa-map pr-3'></i> 622 Dixie Path, South Tobinchester 98336</div>
                <div className='mb-5 flex items-center'><i className='fa-solid fa-phone pr-3'></i> +1 234 56 78</div>
                <div className='mb-5 flex items-center'><i className='fa-solid fa-envelope pr-3'></i> contact@khaos.com</div>
                <div className='text-4xl flex'><i className='mr-3 fa-brands fa-cc-visa'></i><i className='mr-3 fa-brands fa-cc-mastercard'></i><i className='mr-3 fa-brands fa-cc-paypal'></i><i className='mr-3 fa-brands fa-cc-amex'></i></div>
            </div>
        </div>
    )
}

export default Footer