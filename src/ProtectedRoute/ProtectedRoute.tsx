"use client";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
 
import { parse } from "cookie";  
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuthStatus = () => {
      // Get cookies from document
      const cookies = parse(document.cookie);

      const accessToken = cookies?.accessToken || null;
      const refreshToken = cookies?.refreshToken || null;

      if (!accessToken || !refreshToken) {
         
      }
    };

    checkAuthStatus();
  }, [dispatch]);

  // If authentication fails, the modal will be triggered, otherwise, children are shown
  return (
    <>
      <div>
        {/* This will show only if both tokens exist */}
        {children}
      </div>
    </>
  );
};

export default ProtectedRoute;
