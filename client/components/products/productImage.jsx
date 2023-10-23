import React from "react";

const ProductImage = ({ mainimg, img1, img2, img3 }) => {
  return (
    <div className='flex flex-col'>
      <img
        className='  w-full h-72 rounded-t-lg object-cover '
        src={mainimg}
        alt=''
      />

      <div className='flex space-x-3 p-3 justify-center h-10'>
        {/* <div>
          <img
            data-tooltip-target='tooltip-roberta'
            className='w-10 h-10 rounded bg-gray-500'
            src={img1}
            alt=' '></img>
        </div>
        <div>
          <img
            data-tooltip-target='tooltip-roberta'
            className='w-10 h-10 rounded bg-gray-500'
            src={img2}
            alt=' '></img>
        </div>
        <div>
          <img
            data-tooltip-target='tooltip-roberta'
            className='w-10 h-10 rounded bg-gray-500'
            src={img3}
            alt=' '></img>
        </div> */}
      </div>
    </div>
  );
};

export default ProductImage;
