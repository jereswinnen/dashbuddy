import React from "react";
//import Header from "./base/Header";
//import Footer from "./base/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="layoutMaster">
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </main>
  );
};

export default Layout;
