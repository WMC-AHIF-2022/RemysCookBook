import Head from "next/head";
import Footer from "./footer";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Head>
          <title>RemysCookBook</title>
          <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"/>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen min-w-screen flex-col items-center bg-teal-700">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;