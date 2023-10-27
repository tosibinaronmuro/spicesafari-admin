import React from 'react'

const Ordersummary = ({price, number}) => {
  return (
    <div className="w-fit flex m-3 p-3   flex-col lg:flex-row md:flex-row  border-secondary border-4 rounded-xl ">
    {/* <div className="   p-3 m-2 pl-3  ">
      <p className="font-logoFont text-2xl ">{`$ 5,000`}</p>
      <p> Total amount</p>
    </div> */}
    <div className="  p-3 m-2 pl-3 md:border-l lg:border-l   ">
      <p className="font-logoFont text-2xl ">{price}</p>
      <p> Total amount</p>
    </div>
    <div className="  p-3 m-2 pl-3 md:border-l lg:border-l   ">
      <p className="font-logoFont text-2xl ">{number}</p>
      <p> Number of items</p>
    </div>
    
    {/* <div className="  p-3 m-2 pl-3 md:border-l lg:border-l   ">
      <p className="font-logoFont text-2xl ">{`$ 1,500`}</p>
      <p> Delivery Cost</p>
    </div> */}
    <div className="  p-3 m-2 pl-3 md:border-l lg:border-l bg-slate-700 text-white   ">
      <p className="font-logoFont text-2xl ">{price}</p>
      <p> Net Amount</p>
    </div>
  </div>
  )
}

export default Ordersummary