import Footer from "../../components/footer";
import "./globals.css";
import Navbar from "../../components/navbar";
import { Montserrat } from "next/font/google";

import { ReduxProvider } from "@/Store/Provider";
const Mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "ClemDish",
  description:
    "A food delivery app that allows users to view menus, add items to their cart, checkout, and place orders. Users can also track the status of their orders, add items to their favorites list, leave reviews, contact the restaurant directly, and receive push notifications.",
  keywords:
    "food delivery, restaurant, menu, order, checkout, track order, favorites, reviews, contact restaurant, push notifications, admin, manage menu, view orders, process orders, manage users, dashboard",
};

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
      <html lang='en'>
        <head>
          <link rel='icon' href='/favicon.ico' />
        </head>
        <body className={Mont.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ReduxProvider>
  );
}
