import React from 'react'

const Card = () => {
  return (
    <div><a href="#" className="block rounded-lg bg-white m-3 p-4 shadow-sm shadow-indigo-100">
    <img
      alt="Home"
      src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      className="h-56 w-full rounded-md object-cover"
    />
  
    <div className="mt-2">
      <dl>
  
        <div>
          <dt className="sr-only">Name</dt>
  
          <dd className="font-medium">Beef Burger</dd>
        </div>
      </dl>
        <div>
          <dt className="sr-only">Price</dt>
  
          <dd className="text-sm text-gray-500">$24 </dd>
        </div>
  
    <div className='flex space-x-2 mx-[10%] justify-between'>
   
<button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <svg className="w-3.5 h-3.5 mr-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 18 21">
  
<path d="M13.7299 3.50965L15.4899 7.02965C15.7299 7.51965 16.3699 7.98965 16.9099 8.07965L20.0999 8.60965C22.1399 8.94965 22.6199 10.4296 21.1499 11.8896L18.6699 14.3696C18.2499 14.7896 18.0199 15.5996 18.1499 16.1796L18.8599 19.2496C19.4199 21.6796 18.1299 22.6196 15.9799 21.3496L12.9899 19.5796C12.4499 19.2596 11.5599 19.2596 11.0099 19.5796L8.01991 21.3496C5.87991 22.6196 4.57991 21.6696 5.13991 19.2496L5.84991 16.1796C5.97991 15.5996 5.74991 14.7896 5.32991 14.3696L2.84991 11.8896C1.38991 10.4296 1.85991 8.94965 3.89991 8.60965L7.08991 8.07965C7.61991 7.98965 8.25991 7.51965 8.49991 7.02965L10.2599 3.50965C11.2199 1.59965 12.7799 1.59965 13.7299 3.50965Z" fill="white"/>
</svg>

 Favorite
</button>
<button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
  </svg>
  Add to cart
</button>
    </div>
    </div>
  </a></div>
  )
}

export default Card