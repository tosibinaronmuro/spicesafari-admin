import Footer from "../../components/footer";
import "./globals.css";
import Navbar from "../../components/navbar";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "ClemDish",
  description:
    "A food delivery app that allows users to view menus, add items to their cart, checkout, and place orders. Users can also track the status of their orders, add items to their favorites list, leave reviews, contact the restaurant directly, and receive push notifications.",
  keywords:
    "food delivery, restaurant, menu, order, checkout, track order, favorites, reviews, contact restaurant, push notifications, admin, manage menu, view orders, process orders, manage users, dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className=''>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
