"use client";
import { useEffect, useLayoutEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import { useSelector } from "react-redux";

// Higher order components for protecting routed
function RouteProctector({ children }) {
  const User = useSelector((state) => state.auth.User);

  useLayoutEffect(() => {
    // if (!User) {
    //   redirect("/");
    // }

    !User && redirect("/");
  }, [User]);

  return children;
}

export default RouteProctector;
