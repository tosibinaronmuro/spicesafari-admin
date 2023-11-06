"use client";

const CartItem = ({
  key,
  name,
  price,
  image,
  id,
  quantity,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <tr key={key} className='bg-secondary border-b px-2   hover:bg-gray-50  '>
      <td className=' w-20 md:w-32 lg:w-32 p-4'>
        <img src={image} alt={name}></img>
      </td>
      <td className='px-2 py-3 md:px-6 lg:px-6  font-semibold text-gray-900  '>
        {name}
      </td>
      <td className='px-2 py-3 md:px-6 lg:px-6 '>
        <div className='flex items-center space-x-3'>
          <button
            onClick={decreaseQuantity}
            className='inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-secondary border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200  '
            type='button'>
            <span className='sr-only'>Quantity button</span>
            <svg
              className='w-3 h-3'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 18 2'>
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 1h16'
              />
            </svg>
          </button>
          <div>
            <div className='bg-gray-50 w-14 border  h-7 border-gray-300 flex justify-center items-center text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 px-2.5 py-1  '>
              <p className='text-sm '>{quantity}</p>
            </div>
          </div>
          <button
            onClick={increaseQuantity}
            className='inline-flex items-center justify-center h-6 w-6 p-1 text-sm font-medium text-gray-900 bg-secondary border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200  '
            type='button'>
            <span className='sr-only'>Quantity button</span>
            <svg
              className='w-3 h-3'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 18 18'>
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 1v16M1 9h16'
              />
            </svg>
          </button>
        </div>
      </td>
      <td className='px-2 py-3 md:px-6 lg:px-6  font-semibold text-gray-900  '>
        ${price}
      </td>
      <td className='px-2 py-3 md:px-6 lg:px-6 '>
        <a href='#' className='font-medium text-red-600   hover:underline'>
          Remove
        </a>
      </td>
    </tr>
  );
};

export default CartItem;
