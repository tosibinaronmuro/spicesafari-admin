import React from 'react'

const Featured = () => {
  return (
    <div><section>
    <div className="max-w-screen-lg px-4 py-8 mx-auto   lg:px-8">
      <header className="text-center">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
          Today's Recommended Menu
        </h2>
      </header>
  
      <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
        <li>
          <a href="#" className="relative block group">
            <img
              src="https://imgs.search.brave.com/hhdXsup_AxTTkhDbVBtsX5j9wEVnQWK03hjyvtQJdr4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzVi/NTViMzc3YjI3ZTM5/NzA3YTU5YWVkMS8x/NTc5MjU4ODUxMjQ2/LTQwM0FaQjJJVE1G/UTZXMjZVVVFHL0Jv/cmRlcitUQlArLSsx/MCtMYW1iK0J1cmdl/cistK01pZEVhc3Qr/KDIrb2YrMykuanBn/Xy5qcGc"
              alt=""
              className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
            />
  
            <div
              className="absolute inset-0 flex flex-col items-start justify-end p-6"
            >
              <h3 className="text-xl font-medium text-white">Burger</h3>
  
              <span
                className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
              >
                Place an Order
              </span>
            </div>
          </a>
        </li>
  
        <li>
          <a href="#" className="relative block group">
            <img
              src="https://imgs.search.brave.com/aJiffoZx59BZxizx6dr3JbfeaWWrss48Gw-WC-liDQ8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly96b29t/c3R1ZGlvLmNvbS5h/dS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/NTA2MjItX0ExXzI5/NzctRWRpdC5qcGc"
              alt=""
              className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
            />
  
            <div
              className="absolute inset-0 flex flex-col items-start justify-end p-6"
            >
              <h3 className="text-xl font-medium text-white">French Fries</h3>
  
              <span
                className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
              >
                Place an Order
              </span>
            </div>
          </a>
        </li>
  
        <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <a href="#" className="relative block group">
            <img
              src="https://imgs.search.brave.com/wacYQnNkd1E04kBU4foYDaRHtnGGWzuFaY4dRf2VB9E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jaGVm/bG9sYXNraXRjaGVu/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOC8xMC9Kb2xs/b2YtUmljZS0yMy5q/cGcud2VicA"
              alt=""
              className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
            />
  
            <div
              className="absolute inset-0 flex flex-col items-start justify-end p-6"
            >
              <h3 className="text-xl font-medium text-white">Party Jollof</h3>
  
              <span
                className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
              >
                Place an Order
              </span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section></div>
  )
}

export default Featured