"use client";
import React, { useState } from "react";
import CartItem from "../../../components/cart-components/cartItem";
import { useRouter } from "next/navigation";
import {
  useViewCartQuery,
  useDecreaseCartMutation,
  useIncreaseCartMutation,
} from "@/Store/Api_Slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantt } from "@/Store/Api_Slices/cartFucntion";
import RouteProctector from "@/Store/RouteProtector";
import { useCreateOrderMutation } from "@/Store/Api_Slices/orderSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
const page = () => {
  const router = useRouter();
  const user = useSelector((state) => state.auth.User);
  const { data: cartList } = useViewCartQuery({ userId: user.user._id });
  const dispatch = useDispatch();
  const prod =
    cartList &&
    cartList.flatMap((cart) => cart.items.map((item) => item.product._id));
  const [increaseCart] = useIncreaseCartMutation();
  const [decreaseCart] = useDecreaseCartMutation();

  const inCreaseQuant = async (prod) => {
    try {
      await increaseCart({
        userId: user.user._id,
        productId: prod,
      }).unwrap();
      toast("Increase Quantity", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        type: "success",
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log("Increased Quantity");
    } catch (error) {
      console.log(error);
    }
  };
  const deCreaseQuant = async (prod) => {
    try {
      await decreaseCart({
        userId: user.user._id,
        productId: prod,
      }).unwrap();
      toast("Decreased Quantity", {
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
      console.log("Increased Quantity");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(cartList && cartList);
  const [createOrder] = useCreateOrderMutation();

  const orderPrice =
    cartList &&
    cartList
      .map((cart) => cart.total)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const set = {
    userId: user.user._id,
    products: prod,
    price: parseFloat(orderPrice).toFixed(2),
  };
  console.log("set", set);
  const handleOrder = async (e) => {
    e.preventDefault();
    try {
      await createOrder(set).unwrap();
      toast("Ordered Successfully", {
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

      console.log("Order created successfully");
    } catch (err) {
      console.log(err);
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
        <p className='flex justify-center text-primary text-2xl  my-5 items-center'>
          Your Cart
        </p>
        <div className='flex flex-col justify-center items-center bg-secondary  py-14'>
          <section className='bg-white rounded-xl shadow-md shadow-gray/90   mx-[2%] md:mx-[5%]    lg:mx-[5%]'>
            <div className='mx-auto max-w-screen-xl  py-8   sm:py-12 md:px-8 lg:px-8'>
              <div className='mx-auto max-w-3xl'>
                <div className='mt-8'>
                  {/* <ul className="space-y-4">
                  <CartItem name={"name"} price={30} id={1} />
                </ul> */}


                  <div className='relative overflow-x-auto p-3   sm:rounded-lg'>
                    <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                      <thead className='text-xs text-gray-700 uppercase bg-gray-50 '>
                        <tr>
                          <th scope='col' className='px-2 py-3 md:px-6 lg:px-6 '>
                            Image
                          </th>
                          <th scope='col' className='px-2 py-3 md:px-6 lg:px-6 '>
                            Food Item
                          </th>
                          <th scope='col' className='px-2 py-3 md:px-6 lg:px-6 '>
                            Qty
                          </th>
                          <th scope='col' className='px-2 py-3 md:px-6 lg:px-6 '>
                            Price
                          </th>
                          <th scope='col' className='px-2 py-3 md:px-6 lg:px-6 '>
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartList && cartList.length > 0 ? (
                          cartList.map((cart) =>
                            cart.items.map((item, key) => (
                              <CartItem
                                key={key}
                                image={`http://localhost:4000/${item.image}`}
                                name={item.product.title}
                                price={parseFloat(
                                  item.price * item.quantity,
                                ).toFixed(2)}
                                quantity={item.quantity}
                                increaseQuantity={() =>
                                  inCreaseQuant(item.product._id)
                                }
                                decreaseQuantity={() =>
                                  deCreaseQuant(item.product._id)
                                }
                                id={1}
                              />
                            )),
                          )
                        ) : (
                          <>
                            <p>No product in cart</p>
                          </>
                        )}
                      </tbody>
                    </table>
                  </div>

                  <div className='mt-8 flex justify-end border-t border-gray-100 pt-8'>
                    <div className='w-full mx-[3%]   space-y-4'>
                      <dl className='space-y-0.5 text-sm text-gray-700'>
                        {cartList &&
                          cartList.map((cart) => (
                            <>
                              <div className='flex justify-between'>
                                <dt>Subtotal</dt>
                                <dd>{parseFloat(cart.total).toFixed(2)}</dd>
                              </div>

                              <div className='flex justify-between !text-base font-medium'>
                                <dt>Total</dt>
                                <dd>${parseFloat(cart.total).toFixed(2)}</dd>
                              </div>
                            </>
                          ))}
                      </dl>

                      <div className='flex justify-end'>
                        <span className='inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            stroke='currentColor'
                            className='-ms-1 me-1.5 h-4 w-4'>
                            <path
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              d='M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z'
                            />
                          </svg>

                          <p className='whitespace-nowrap text-xs'>
                            2 Discounts Applied
                          </p>
                        </span>
                      </div>

                      <div className='flex justify-end'>
                        <button
                          onClick={handleOrder}
                          className='block rounded bg-primary px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600'>
                          Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <ToastContainer />
      </div>
    </RouteProctector>
  );
};

export default page;
