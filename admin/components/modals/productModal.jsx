"use client";
import React, { useEffect, useRef, useState } from "react";
import { useCreateNewProductMutation } from "@/Store/Api_Slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ErrorAlert from "../alert/error";
import SuccessAlert from "../alert/success";

const Modal = ({
  handleopenmodal,
  hanleclosedmodal,
  modal,
  trigger,
  modalOpen,
  text,
}) => {
  // const token = useSelector((state) => state.auth.User.token);
  // console.log("token", token);

  const [isError, setIsError] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setsuccessMessage] = useState("");

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setImage] = useState(null);
  const [quantity, setQuantity] = useState('');
  const [createNewProduct] = useCreateNewProductMutation();
  // Function to handle image file selection
  const handleImageChange = (e) => {
    setImage(e.target.files ? e.target.files[0] : null);
  };
  const handleClose = () => {
    setIsError(false);
  };
  const body = {
    title,
    price,
    category,
    description,
    quantity,
    photo,
  };

  console.log(body);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      for (const [key, value] of Object.entries(body)) {
        formData.append(key, value);
      }
      await createNewProduct(formData).unwrap();
       
      setIsSuccessful(true);
      setsuccessMessage("new product created successfully");
      console.log("created new product");
    } catch (error) {
      console.log(error);
      if (error.data && error.data) {
        setIsError(true);
        setErrorMessage(error.data);
      } else {
        // Handle cases where 'error.data.msg' does not exist
        setErrorMessage("An error occurred");
      }
    }
  };

  // const body = {
  //   email,
  //   password,
  // };

  return (
    <div>
      <div className='container mx-auto py-20'>
        <div
          className={`fixed top-0 left-0 flex z-40  h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90 px-4 py-5`}>
          <div
            ref={modal}
            // onFocus={handleopenmodal}
            // onBlur={hanleclosedmodal}
            className='w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]'>
            <h3 className='pb-2 text-xl font-bold text-dark sm:text-2xl'>
              {text}
            </h3>
            <span
              className={`mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary`}></span>
            <form encType='multipart/form-data' onSubmit={handleSubmit}>
              <div className='flex flex-col p-2 m-2 '>
                <div className='mb-6'>
                  <label
                    htmlFor='name'
                    className='flex justify-start font-logoFont mb-2 text-sm font-medium text-gray-900  '>
                    Product name
                  </label>
                  <input
                    type='text'
                    id='name'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                    placeholder='spaghetti'
                    onChange={(e) => setTitle(e.target.value)}
                    required></input>
                </div>
                <div className='flex flex-row jusitfy-between space-x-2'>
                  <div className='mb-6'>
                    <label
                      htmlFor='price'
                      className='flex justify-start font-logoFont mb-2 text-sm font-medium text-gray-900  '>
                      Product price
                    </label>
                    <input
                      type='text'
                      id='price'
                      onChange={(e) => setPrice(e.target.value)}
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                      placeholder='1400'
                      required></input>
                  </div>
                  {/* <div className="mb-6">
                    <label
                      htmlFor="quantity"
                      className="flex justify-start font-logoFont mb-2 text-sm font-medium text-gray-900  "
                    >
                      Available Quantity
                    </label>
                    <input
                      type="text"
                      id="quantity"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="8"
                      onChange={(e) => setQuantity(e.target.value)}
                      required
                    ></input>
                  </div> */}
                </div>
                <div className='flex flex-row justify-between space-x-2'>
                  <div className='mb-6'>
                    <label
                      htmlFor='category'
                      className='flex justify-start font-logoFont mb-2 text-sm font-medium text-gray-900  '>
                      Category
                    </label>
                    <select
                      id='category'
                      onChange={(e) => setCategory(e.target.value)}
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '>
                      <option>Drinks</option>
                      <option>Snacks</option>
                      <option>Burgers</option>
                      <option>Pizza</option>
                      <option>Pasta</option>
                      <option>Rice</option>
                      <option>Salads</option>
                      <option>Sandwiches</option>
                      <option>Desserts</option>
                      <option>Beverages</option>
                      <option>Coffee</option>
                      <option>Appetizers</option>
                    </select>
                  </div>

                  <div className='mb-6'>
                    <label
                      className='flex justify-start font-logoFont mb-2 text-sm font-medium text-gray-900  '
                      htmlFor='foodimage'>
                      Upload Image
                    </label>
                    <input
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 '
                      id='foodimage'
                      type='file'
                      onChange={handleImageChange}></input>
                  </div>
                </div>
                <div className='mb-6'>
                  <label
                    htmlFor='message'
                    className='flex justify-start font-logoFont mb-2 text-sm font-medium text-gray-900  '>
                    Description
                  </label>
                  <textarea
                    id='message'
                    rows='4'
                    onChange={(e) => setDescription(e.target.value)}
                    className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 '
                    placeholder='Describe the meal...'></textarea>
                </div>
              </div>
              {isError ? (
                <ErrorAlert handleClose={handleClose} message={errorMessage} />
              ) : null}
              {isSuccessful ? (
                <SuccessAlert handleClose={handleClose} message={successMessage} />
              ) : null}
              <div className='flex flex-wrap -mx-3'>
                <div className='w-1/2 px-3'>
                  <button
                    onClick={hanleclosedmodal}
                    className='block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white'>
                    Cancel
                  </button>
                </div>
                <div className='w-1/2 px-3'>
                  <button
                    type='submt'
                    className={`block w-full p-3 text-base font-medium text-center text-white transition border rounded-lg border-primary bg-primary hover:bg-opacity-90`}>
                    <p> Submit </p>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
