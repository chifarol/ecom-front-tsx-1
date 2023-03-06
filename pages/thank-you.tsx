import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
import Script from "next/script";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Thank You</title>
      </Head>
      <>
        {/* thank you message */}
        <main className="thank-you padding-y-xxl padding-y-xxxl@md">
          <div className="container max-width-adaptive-sm text-center">
            <svg
              className="thank-you__icon margin-bottom-sm"
              viewBox="0 0 80 80"
              aria-hidden="true"
            >
              <g className="thank-you__icon-group">
                <circle fill="var(--color-success)" cx={40} cy={40} r={40} />
                <polyline
                  points="21 41 33 53 59 27"
                  fill="none"
                  stroke="#fff"
                  strokeMiterlimit={10}
                  strokeWidth={2}
                />
              </g>
            </svg>
            <div className="text-component">
              <h1 className="text-xxxxl text-uppercase">Order Confirmed</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi aliquid qui et saepe omnis ipsum amet quasi accusamus.
              </p>
              <p className="flex flex-wrap flex-column flex-row@xs gap-xxs justify-center">
                <a className="btn btn--subtle" href="shop.html">
                  Continue Shopping
                </a>
                <a
                  className="btn btn--primary"
                  href="account-order-details.html"
                >
                  Manage Order
                </a>
              </p>
            </div>
          </div>
        </main>

        <Script src="assets/js/scripts.js"></Script>
      </>
    </Layout>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// };
