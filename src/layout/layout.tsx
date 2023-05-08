import Head from "next/head";
import Footer from "./footer";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Head>
          <title>RemysCookBook</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="className=flex min-h-screen flex-col items-center justify-center bg-teal-700">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;