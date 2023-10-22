import React from 'react'

const ProductDetails = ({category,name,price,rating,reviewers,description}) => {
  return (
    <div>
    <div className="flex space-y-2 flex-col">
      <div>
        <p className="text-gray-400 text-xs">Category </p>
        <p className="text-gray-600">Pasta</p>
      </div>

      <div>
        <p className="text-gray-400 text-xs">Name </p>
        <p className="font-logoFont text-xl">Spaghetti Bolonese</p>
      </div>
      <div>
        <p className="text-gray-400 text-xs">Price </p>
        <p className="font-logoFont text-primary  text-xl">$2,300</p>
      </div>
    </div>

    <div className="flex space-x-3 mt-3">
      <div className="flex flex-col">
        <p className="text-gray-400 text-xs">Rating </p>
        <p className="ml-2 text-sm font-bold text-gray-900 ">4.95</p>
      </div>
      <div className="flex flex-col">
        <p className="text-gray-400 text-xs">Reviewers </p>

        <p className="text-sm font-medium text-gray-900 underline hover:no-underline  ">
          73 reviews
        </p>
      </div>
    </div>
    <div className="flex my-4 flex-col">
      <p className="text-gray-400 text-xs">Description </p>
      <p className="text-sm w-80">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
        maxime eaque minus quisquam quam veritatis quibusdam blanditiis
        earum consectetur odio fugiat aspernatur qui recusandae
        exercitationem explicabo, ipsa adipisci architecto soluta.
      </p>
    </div>
  </div>
  )
}

export default ProductDetails