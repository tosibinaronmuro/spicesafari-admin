import React from 'react'

const Billingaddress = ({userId,lcation}) => {
  return (
    <div className="text-xs">
    <p> Billing address:</p>
    <p>
       {lcation} 
    </p>
    {/* <p>City: Anytown</p>
    <p> State:
      CA   </p> */}
      <p>email:{userId?.email}</p>
      <p>phone:+123 456 7890</p>
  </div>
  )
}

export default Billingaddress