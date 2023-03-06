import Head from "next/head";
import Script from "next/script";
import CartDrawer from "./CartDrawer";
import Footer from "./Footer";
import Nav from "./header";

const name = "[Your Name]";
export const siteTitle = "E-commerce";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="assets/img/favicon.svg" />
        <Script>
          document.getElementsByTagName("html")[0].className += " js";
        </Script>
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div>
        <Nav />
        {children}
        {/* <!-- footer --> */}
        <Footer />
        {/* <!-- Cart Drawer --> */}
        <CartDrawer />
      </div>
    </>
  );
}
