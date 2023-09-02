import React from "react";
import Image from "next/image";
import Contact from "./footer-components/contact";
import Socials from "./footer-components/socials";
import Navigation from "./footer-components/navigation";
import ScrollToTopButton from "./footer-components/scroll-to-top";
import Support from "./footer-components/support";
import Services from "./footer-components/services";
const Footer = () => {
  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <strong className="block text-center text-xl font-bold text-gray-900 sm:text-3xl">
            Want us to email you with the latest additions to our menu?
          </strong>

          <form className="mt-6">
            <div className="relative max-w-lg">
              <label className="sr-only" for="email">
                {" "}
                Email{" "}
              </label>

              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder="john@doe.com"
              />

              <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <p className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium natus quod eveniet aut perferendis distinctio iusto
              repudiandae, provident velit earum?
            </p>
            <ScrollToTopButton />
            <Socials />
          </div>

          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
            <div>
              <strong className="font-medium text-gray-900"> Services </strong>

              <Services />
            </div>

            <div>
              <strong className="font-medium text-gray-900"> About </strong>

              <Navigation />
            </div>

            <div>
              <strong className="font-medium text-gray-900"> Support </strong>

              <Support />
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-8">
          <p className="text-center text-xs/relaxed text-gray-500">
            © SpiceSafari Kitchen <span>{currentYear}</span>. All rights reserved.
            <br />
            Created by
            <a
              href="https://github.com/tosibinaronmuro"
              target="_blank"
              className="text-gray-700 underline transition hover:text-gray-700/75"
            >
              {" "}
              Tosiron{" "}
            </a>
            and
            <a
              href="https://github.com/Clemon1"
              target="_blank"
              className="text-gray-700 underline transition hover:text-gray-700/75"
            >
              {" "}
              Clemon
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
