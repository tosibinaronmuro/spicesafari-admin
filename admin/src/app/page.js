"use client";
import { useState, useEffect } from "react";
import { useLoginMutation } from "@/Store/Api_Slices/authSlice";
import { isSuccess } from "@/Store/ToolkitQuery/authStore";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import ErrorAlert from "../../components/alert/error";
import SuccessAlert from "../../components/alert/success";

const page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isError, setIsError] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setsuccessMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();
  const body = {
    email,
    password,
  };
  // useEffect(() => {
  //   console.log("error message======>", errorMessage, "iserror=========>", isError);
  // }, [errorMessage, isError]);
  useEffect(() => {
    if (isError || errorMessage) {
      const timeoutId = setTimeout(() => {
        setIsError(false);
        setErrorMessage("");
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [isError, errorMessage]);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      dispatch(isSuccess(await login(body).unwrap()));
      setIsSuccessful(true);
      setsuccessMessage("welcome back");
      router.push("/dashboard");
    } catch (error) {
      setIsError(true);
      if (error.data && error.data.msg) {
        setErrorMessage(error.data.msg);
      } else {
        // Handle cases where 'error.data.msg' does not exist
        setErrorMessage("An error occurred");
      }
    }
  };
  return (
    <section className='bg-secondary  py-20 lg:py-[120px]'>
      <div className='container mx-auto'>
        <div className='w-full px-4'>
          <div className='relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]'>
            <div className='mb-10 text-center md:mb-16'>
              <a href='/#' className='mx-auto inline-block max-w-[160px]'>
                <p>
                  <span className='lg:text-4xl text-2xl font-logoFont text-primary'>
                    SpiceSafari
                  </span>{" "}
                  <span className='font-logoFont'>Kitchen</span>
                </p>
              </a>
            </div>
            <form onSubmit={handleLogin}>
              <InputBox
                type='email'
                name='email'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputBox
                type='password'
                name='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className='mb-10'>
                <button
                  className='border-primary font-semibold w-full cursor-pointer rounded-md border bg-primary py-3 px-5 text-base text-white transition hover:bg-opacity-90'
                  type='submit'>
                  Sign In
                </button>
              </div>
            </form>
            <div>{isError ? <ErrorAlert message={errorMessage} /> : null}</div>
            <div>
              {isSuccessful ? <SuccessAlert message={successMessage} /> : null}
            </div>
            <a
              href='/forgot-password'
              className='mb-2 inline-block text-base font-semibold text-[#adadad] hover:text-primary hover:underline'>
              Forgot Password?
            </a>
            <p className='text-base text-[#adadad]'>
              Not a member yet?
              <a
                href='/signup'
                className='text-primary hover:underline font-semibold'>
                Sign Up
              </a>
            </p>
            <div>
              <span className='absolute top-1 right-1'>
                <svg
                  width='40'
                  height='40'
                  viewBox='0 0 40 40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <circle
                    cx='1.39737'
                    cy='38.6026'
                    r='1.39737'
                    transform='rotate(-90 1.39737 38.6026)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='1.39737'
                    cy='1.99122'
                    r='1.39737'
                    transform='rotate(-90 1.39737 1.99122)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='13.6943'
                    cy='38.6026'
                    r='1.39737'
                    transform='rotate(-90 13.6943 38.6026)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='13.6943'
                    cy='1.99122'
                    r='1.39737'
                    transform='rotate(-90 13.6943 1.99122)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='25.9911'
                    cy='38.6026'
                    r='1.39737'
                    transform='rotate(-90 25.9911 38.6026)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='25.9911'
                    cy='1.99122'
                    r='1.39737'
                    transform='rotate(-90 25.9911 1.99122)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='38.288'
                    cy='38.6026'
                    r='1.39737'
                    transform='rotate(-90 38.288 38.6026)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='38.288'
                    cy='1.99122'
                    r='1.39737'
                    transform='rotate(-90 38.288 1.99122)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='1.39737'
                    cy='26.3057'
                    r='1.39737'
                    transform='rotate(-90 1.39737 26.3057)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='13.6943'
                    cy='26.3057'
                    r='1.39737'
                    transform='rotate(-90 13.6943 26.3057)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='25.9911'
                    cy='26.3057'
                    r='1.39737'
                    transform='rotate(-90 25.9911 26.3057)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='38.288'
                    cy='26.3057'
                    r='1.39737'
                    transform='rotate(-90 38.288 26.3057)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='1.39737'
                    cy='14.0086'
                    r='1.39737'
                    transform='rotate(-90 1.39737 14.0086)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='13.6943'
                    cy='14.0086'
                    r='1.39737'
                    transform='rotate(-90 13.6943 14.0086)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='25.9911'
                    cy='14.0086'
                    r='1.39737'
                    transform='rotate(-90 25.9911 14.0086)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='38.288'
                    cy='14.0086'
                    r='1.39737'
                    transform='rotate(-90 38.288 14.0086)'
                    fill='#3056D3'
                  />
                </svg>
              </span>
              <span className='absolute left-1 bottom-1'>
                <svg
                  width='29'
                  height='40'
                  viewBox='0 0 29 40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <circle
                    cx='2.288'
                    cy='25.9912'
                    r='1.39737'
                    transform='rotate(-90 2.288 25.9912)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='14.5849'
                    cy='25.9911'
                    r='1.39737'
                    transform='rotate(-90 14.5849 25.9911)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='26.7216'
                    cy='25.9911'
                    r='1.39737'
                    transform='rotate(-90 26.7216 25.9911)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='2.288'
                    cy='13.6944'
                    r='1.39737'
                    transform='rotate(-90 2.288 13.6944)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='14.5849'
                    cy='13.6943'
                    r='1.39737'
                    transform='rotate(-90 14.5849 13.6943)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='26.7216'
                    cy='13.6943'
                    r='1.39737'
                    transform='rotate(-90 26.7216 13.6943)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='2.288'
                    cy='38.0087'
                    r='1.39737'
                    transform='rotate(-90 2.288 38.0087)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='2.288'
                    cy='1.39739'
                    r='1.39737'
                    transform='rotate(-90 2.288 1.39739)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='14.5849'
                    cy='38.0089'
                    r='1.39737'
                    transform='rotate(-90 14.5849 38.0089)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='26.7216'
                    cy='38.0089'
                    r='1.39737'
                    transform='rotate(-90 26.7216 38.0089)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='14.5849'
                    cy='1.39761'
                    r='1.39737'
                    transform='rotate(-90 14.5849 1.39761)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='26.7216'
                    cy='1.39761'
                    r='1.39737'
                    transform='rotate(-90 26.7216 1.39761)'
                    fill='#3056D3'
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;

const InputBox = ({ type, placeholder, name, onChange }) => {
  return (
    <div className='mb-6'>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        className='border-[#E9EDF4]  w-full rounded-md border bg-[#ddebfa] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#ddebfa] focus-visible:shadow-none'
      />
    </div>
  );
};
