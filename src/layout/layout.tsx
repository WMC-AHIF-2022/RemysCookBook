import React from "react";
import Footer from "./footer";

const LoggedInLayout = ({ children }: any) => {
  return (
    <div>
      <div className="className=flex min-h-screen flex-col items-center justify-center bg-teal-700">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default LoggedInLayout;