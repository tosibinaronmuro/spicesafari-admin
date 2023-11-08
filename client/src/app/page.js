"use client";
import Image from "next/image";
import Search from "../../components/search-component";
import Categories from "../../components/categories";
import Featured from "../../components/menu-components/featured";
import Card from "../../components/menu-components/card";
import Delivery from "../../components/menu-components/delivery";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  useViewAllProductQuery,
  useRecommendProductQuery,
} from "@/Store/Api_Slices/productSlice";
export default function Home() {
  // const user = useSelector((state) => state.auth.User.user);
  const [search, setSearch] = useState("");

  const { data: products, isLoading } = useViewAllProductQuery({ key: search });

  return (
    <main>
      {/* hero section */}
      <div className='flex flex-col overflow-hidden justify-center items-center   relative'>
        <div className=' w-[100%] lg:w-[100%]   h-[40vh] lg:h-[70vh]   '>
          <Image
            src='/images/heroImage2.jpg'
            alt='team photo'
            width={0}
            height={0}
            sizes='100vw'
            style={{
              objectFit: "cover",
            }}
            fill
            priority
          />
        </div>
        {/* <div className="bg-whiteRgba w-[50%]  min-h-[15vh] md:min-h-[25vh] flex flex-col justify-center items-center   lg:h-[30vh] absolute bottom-0 left-50 p-2 lg:p-14">
          <p className="flex justify-center mx-[10%]  lg:justify-start md:justify-start font-garmond text-lg lg:text-3xl text-white  lg:m-auto md:m-auto">
            Here is a recap of our journey
          </p>
          <p className="font-Poiret text-xs lg:font-bold  lg:text-lg text-white  md:p-4 lg:p-0  mx-[10%]">
            Embark on a transformative journey as we trace the impactful
            milestones that shape ISEEA's rich history.
          </p>
        </div> */}
        <div className='bg-blackRgba w-full blackRgba h-[40vh] lg:h-[70vh] flex flex-col justify-center items-start  absolute bottom-0 left-50 p-2'>
          <div className='lg:w-[50%] w-[90%] h-auto lg:mt-8 lg:mx-10 space-y-3 '>
            <p className='flex justify-start font-garmond text-base font-bold subpixel-antialiased lg:text-5xl  text-white'>
              Delivery at your
              <br />
              Doorstep
              <br />
              And Takeaway Food.
            </p>
            <p className='font-Poiret text-xs  lg:text-lg text-white  md:p-4 lg:p-0   '>
              Get the best deals at the same price
            </p>
          </div>
          {/* <div className='mt-3 lg:w-[40%] ml-10 '>
            <Search
              onSubmit={onSearch}
              onChange={(e) => setSeaech(e.target.value)}
            />
          </div> */}
        </div>
      </div>

      {/* main section */}
      <div>
        <div>
          <Featured />
        </div>
        {/* <Categories/> */}
        <Delivery />
        <div>
          <p className='flex justify-center text-primary text-2xl items-center'>
            Our Menu
          </p>
          <div className='flex flex-wrap justify-center w-full px-[5%]'>
            {products && products.length > 0 ? (
              products.map((product) => (
                <Card
                  key={product._id}
                  linking={`${product._id}`}
                  Img={`http://localhost:4000/${product.image}`}
                  name={product.title}
                  price={product.price}
                  rating={product.rating}
                  tag={"Popular Meal"}
                  button1={"favorite"}
                  button2={"order"}
                />
              ))
            ) : (
              <>
                <p>{search} not found</p>
              </>
            )}
          </div>
          <a
            href='/menu'
            className='flex justify-center items-center mb-9 cursor-pointer  h-10 bg-primary lg:mx-[10%] md:mx-[10%]'>
            <p className='text-white'>see more</p>
          </a>
        </div>

        <div></div>
      </div>
    </main>
  );
}
