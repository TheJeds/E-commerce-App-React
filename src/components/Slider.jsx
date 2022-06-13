import React, { useState} from 'react';
import { sliderItems } from '../data'

function Slider() {

    const[slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) =>{
        if(direction==='left'){
            setSlideIndex(slideIndex > 0 ? slideIndex-1: sliderItems.length-1);
        }else{
            setSlideIndex(slideIndex < sliderItems.length-1 ? slideIndex + 1 : 0);
        }
    };
    
    return (
        <div className='w-full h-screen flex relative overflow-hidden mt-2'>
            <div id='arrowLeftContainer' onClick={()=>handleClick('left')} className='w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center absolute top-0 bottom-0 m-auto left-3 cursor-pointer opacity-50 z-10'>
                <i className='fa-solid fa-angle-left'></i>
            </div>

            <div id='wrapper' className='h-full flex '>
                <div id='slide' className={`w-screen h-screen flex items-center bg-${sliderItems[slideIndex].bg}` }>
                    <div id='imgContainer' className='flex-1 h-full' >
                        <img className='h-full m-auto' src={sliderItems[slideIndex].img}></img>
                    </div>
                    <div id='infoContainer' className='flex-1 p-12'>
                        <h1 id='titleInfo' className='text-7xl'>{sliderItems[slideIndex].title}</h1>
                        <p id='infoDescription' className='my-12 mx-0 text-xl font-medium tracking-[3px]'>{sliderItems[slideIndex].desc}</p>
                        <button id='infoButton' className='p-2 text-xl bg-transparent cursor-pointer border-2 border-black'>SHOW NOW</button>
                    </div>
                </div>
            </div>

            <div id='arrowRightContainer' onClick={()=>handleClick('right')} className='w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center absolute top-0 bottom-0 m-auto right-3 cursor-pointer opacity-50 z-10'>
                <i className="fa-solid fa-angle-right"></i>
            </div>
        </div>
    )
};

export default Slider;