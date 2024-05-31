"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import HistoryItem from "../../../components/history-components/history-item";
import Search from "../../../components/search-component";
import Categories from "../../../components/categories";
import Card from "../../../components/menu-components/card";
import { useDispatch, useSelector } from "react-redux";
import { useAddToCartMutation } from "@/Store/Api_Slices/cartSlice";
import {
  useViewAllProductQuery,
  useRecommendProductQuery,
  useWishlistProductMutation,
} from "@/Store/Api_Slices/productSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import RouteProctector from "@/Store/RouteProtector";
const page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const User = useSelector((state) => state.auth.User);
  // const [user, setUser] = useState(User.user._id);
  const [price, setPrice] = useState("");
  const [quantity, setQuant] = useState("");

  const [search, setSearch] = useState("");
  const { data: recommend } = useRecommendProductQuery({
    id: User ? User.user._id : null,
  });
  console.log(recommend);
  const { data: products, isLoading } = useViewAllProductQuery({ key: search });

  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };
  const [selectedOption, setSelectedOption] = useState("Last 30 days");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setisOpen(false);
  };
  const [addToCart] = useAddToCartMutation();
  const [addWishlist] = useWishlistProductMutation();
  const body = {
    user: User?.user._id || "",
  };
  console.log(body);
  const addCart = async ({ product }) => {
    try {
      const cart = await addToCart({
        body,
        productId: product,
      }).unwrap();
      toast("Added to cart", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        type: "success",
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log("Added to cart", cart);
    } catch (error) {
      console.log(error.data);
    }
  };
  console.log("body", body);
  const handleWishlist = async ({ product }) => {
    try {
      const wish = await addWishlist({
        userId: User.user._id,
        productId: product,
      }).unwrap();
      toast(`${wish}`, {
        position: "top-right",
        autoClose: 4000,
        type: "success",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      console.log(error.data);
      console.log("wishlist error", error);
    }
  };

  return (
    <RouteProctector>
      <div className=' min-h-[70vh] p-3 md:p-10 lg:p-10'>
        <div
          onClick={() => router.back()}
          className='flex space-x-3 ml-2 lg:ml-14 md:ml-14 justify-start items-center hover:text-primary'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className=' fill-current'
            height='1em'
            viewBox='0 0 512 512'>
            <path d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z' />
          </svg>
          <span>Back</span>
        </div>
        <div className='flex justify-center items-center text-2xl text-primary my-5'>
          Our menu
        </div>
        <div>
          <div className='  flex justify-center items-center'>
            <Search
              search={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className='flex justify-start pl-[10%] items-center text-xl text-primary my-5'>
            Categories
          </div>
          <Categories
          // handleClick={handleClick}
          />
        </div>
        <div>
          <div className='flex font-semibold justify-start pl-[10%] items-center text-xl text-primary my-5'>
            Menu- {search}
          </div>

          {/* map function here */}
          <div className='flex flex-wrap justify-center w-full h-full  '>
            {products && products.length > 0 ? (
              products.map((product) => (
                <Card
                  key={product._id}
                  linking={`${product._id}`}
                  Img={`https://spice-safari-backend.onrender.com/${product.image}`}
                  name={product.title}
                  price={product.price}
                  rating={product.rating}
                  tag={"Popular Meal"}
                  button1={"favorite"}
                  button2={"order"}
                  handleButton1={() => handleWishlist({ product: product._id })}
                  handleButton2={() => addCart({ product: product._id })}
                />
              ))
            ) : (
              <>
                <p>{search} not found</p>
              </>
            )}
          </div>
          <div className=''>
            <div className='flex justify-start pl-[10%] font-semibold items-center text-xl text-primary my-5'>
              Recommended
            </div>
            <div className='flex flex-wrap justify-start  w-full px-[5%]'>
              {recommend && recommend.length > 0 ? (
                recommend.map((recommend) => (
                  <Card
                    key={recommend._id}
                    Img={`https://spice-safari-backend.onrender.com/${recommend.image}`}
                    name={recommend.title}
                    linking={`${recommend._id}`}
                    price={recommend.price}
                    rating={recommend.rating}
                    tag={"Recommended Meal"}
                    button1={"favorite"}
                    button2={"order"}
                  />
                ))
              ) : (
                <>
                  <p>No recommended food yet, keep using the application</p>
                </>
              )}
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </RouteProctector>
  );
};

export default page;
