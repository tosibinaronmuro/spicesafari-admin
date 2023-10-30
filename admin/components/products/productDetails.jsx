import React from 'react'

const ProductDetails = ({category,name,price,rating,description}) => {
  return (
    <div>
    <div className="flex space-y-2 flex-col">
      <div>
        <p className="text-gray-400 text-xs">Category </p>
        <p className="text-gray-600 capitalize">{category}</p>
      </div>

      <div>
        <p className="text-gray-400 text-xs">Name </p>
        <p className="font-logoFont capitalize text-xl">{name}</p>
      </div>
      <div>
        <p className="text-gray-400 text-xs">Price </p>
        <p className="font-logoFont text-primary  text-xl">{price}</p>
      </div>
    </div>

    <div className="flex space-x-3 mt-3">
      <div className="flex flex-col">
        <p className="text-gray-400 text-xs">Rating </p>
        <p className="ml-2 text-sm font-bold text-gray-900 ">{rating}</p>
      </div>
      {/* <div className="flex flex-col">
        <p className="text-gray-400 text-xs">quantity </p>

        <p className="text-sm font-medium text-gray-900 underline hover:no-underline  ">
          {quantity}
        </p>
      </div> */}
    </div>
    <div className="flex my-4 flex-col">
      <p className="text-gray-400 text-xs">Description </p>
      <p className="text-sm w-80">
       {description}
      </p>
    </div>
  </div>
  )
}

export default ProductDetails