import React from 'react'

const ProductImage = ({mainimg,img1,img2,img3}) => {
  return (
    <div className="flex flex-col">
            <img
              className="  w-full h-72 rounded-t-lg object-cover "
              src="https://imgs.search.brave.com/BYh3RHJpTE5W_UUeJ_UlhcqVJsLYz4J4YWi0yko4eRE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8x/MC8wNS8yMi8zNy9i/bGFuay1wcm9maWxl/LXBpY3R1cmUtOTcz/NDYwXzEyODAucG5n"
              alt=""
            />

            <div className="flex space-x-3 p-3 justify-center">
              <div>
                <img
                  data-tooltip-target="tooltip-roberta"
                  className="w-10 h-10 rounded bg-gray-500"
                  src={img1}
                  alt=" "
                ></img>
              </div>
              <div>
                <img
                  data-tooltip-target="tooltip-roberta"
                  className="w-10 h-10 rounded bg-gray-500"
                  src={img2}
                  alt=" "
                ></img>
              </div>
              <div>
                <img
                  data-tooltip-target="tooltip-roberta"
                  className="w-10 h-10 rounded bg-gray-500"
                  src={img3}
                  alt=" "
                ></img>
              </div>
            </div>
          </div>
  )
}

export default ProductImage