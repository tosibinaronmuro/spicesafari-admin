import React from 'react'

function Delivery() {
  return (
    <div className="flex justify-center">
    <div className="flex flex-wrap justify-between px-14 h-auto py-3 w-fit  m-5  relative top-50 z-60 items-center rounded-lg bg-white text-center shadow-md shadow-gray/90  ">
     
    <div className='flex flex-col lg:flex-row bg-white p-3 lg:justify-between lg:mx-14  mx-2 justify-start  items-center'> 
        {/* first */}
        <div className='flex text-sm flex-col m-3 flex-1   '>
         
        <div className='w-full flex justify-center'><svg className='h-5 w-5 flex justify-center items-center mt-3 m-2  ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"> <path d="M368 0C394.5 0 416 21.49 416 48V96H466.7C483.7 96 499.1 102.7 512 114.7L589.3 192C601.3 204 608 220.3 608 237.3V352C625.7 352 640 366.3 640 384C640 401.7 625.7 416 608 416H576C576 469 533 512 480 512C426.1 512 384 469 384 416H256C256 469 213 512 160 512C106.1 512 64 469 64 416H48C21.49 416 0 394.5 0 368V48C0 21.49 21.49 0 48 0H368zM416 160V256H544V237.3L466.7 160H416zM160 368C133.5 368 112 389.5 112 416C112 442.5 133.5 464 160 464C186.5 464 208 442.5 208 416C208 389.5 186.5 368 160 368zM480 464C506.5 464 528 442.5 528 416C528 389.5 506.5 368 480 368C453.5 368 432 389.5 432 416C432 442.5 453.5 464 480 464z"/></svg></div>
         <div className='flex mr-2 flex-col '>
         <p className='font-bold '>Free Shipping</p>
            <p>On all within city orders or orders above $99.99  </p>
         </div>
         </div>
        
        
        
        {/* second */}
        <div className='flex text-sm flex-col m-3 flex-1 '>
        <div className='w-full flex justify-center'>
        <svg className='h-5 w-7 flex justify-center items-center mt-3 m-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"> <path d="M155.6 17.3C163 3 179.9-3.6 195 1.9L320 47.5l125-45.6c15.1-5.5 32 1.1 39.4 15.4l78.8 152.9c28.8 55.8 10.3 122.3-38.5 156.6L556.1 413l41-15c16.6-6 35 2.5 41 19.1s-2.5 35-19.1 41l-71.1 25.9L476.8 510c-16.6 6.1-35-2.5-41-19.1s2.5-35 19.1-41l41-15-31.3-86.2c-59.4 5.2-116.2-34-130-95.2L320 188.8l-14.6 64.7c-13.8 61.3-70.6 100.4-130 95.2l-31.3 86.2 41 15c16.6 6 25.2 24.4 19.1 41s-24.4 25.2-41 19.1L92.2 484.1 21.1 458.2c-16.6-6.1-25.2-24.4-19.1-41s24.4-25.2 41-19.1l41 15 31.3-86.2C66.5 292.5 48.1 226 76.9 170.2L155.6 17.3zm44 54.4l-27.2 52.8L261.6 157l13.1-57.9L199.6 71.7zm240.9 0L365.4 99.1 378.5 157l89.2-32.5L440.5 71.7z"/></svg></div>
        
        <div className='flex mr-2 flex-col '>
            <p className='font-bold '>Best Quality</p>
            <p>Enjoy the taste of our world class rated dishes from our certified chefs</p>
        </div>
        </div>
        {/* third */}
        <div className='flex text-sm flex-col m-3 flex-1'>
        <div className='w-full flex justify-center'>
        <svg className='h-5 w-5 flex justify-center items-center mt-3 m-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/></svg></div>
        <div className='flex mr-2 flex-col '>
            <p className='font-bold '>Support 24/7</p>
            <p>Contact us 24 hours a day, 7 days a week</p>
        </div>
        </div>
    </div>
    </div></div>
  )
}

export default Delivery