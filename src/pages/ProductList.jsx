import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'

function ProductList() {

    return (
        <div className=''>
            <Navbar />
            <Announcement />
            <h1 className='m-5 text-3xl font-bold'>Dresses</h1>
            <div className='flex justify-between m-5'>
                <div className=''>
                    <span className='text-xl font-semibold'>Filter Products:</span>
                    <select className='p-2 mr-5 bor border-solid border-[0.5px] border-gray-200' name="" id="">
                        <option disabled selected value="Color">Color</option>
                        <option value="White">White</option>
                        <option value="Black">Black</option>
                        <option value="Red">Red</option>
                        <option value="Blue">Blue</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Green">Green</option>
                    </select>
                    <select className='p-2 mr-5 border-solid border-[0.5px] border-gray-200' name="" id="">
                        <option disabled selected value="Size">Size</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </div>
                <div className=''>
                    <span className='text-xl font-semibold mr-5'>Sort Products:</span>
                    <select className='p-2 mr-5 border-solid border-[0.5px] border-gray-200' name="" id="">
                        <option selected value="Newest">Newest</option>
                        <option value="asc">Price (asc)</option>
                        <option value="desc">Price (desc)</option>
                    </select>
                </div>
            </div>
            <Products />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default ProductList