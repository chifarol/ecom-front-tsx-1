import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="main-footer bg-contrast-lower bg-opacity-30% padding-top-xl padding-bottom-md">
      <div
        className="container max-width-lg reveal-fx reveal-fx--translate-up"
        data-reveal-fx-delta="50"
      >
        <div className="grid gap-lg">
          <div className="col-3@lg order-2@lg flex@lg justify-end@lg">
            <a href="index.html" className="main-footer__logo">
              <svg width="104" height="30" viewBox="0 0 104 30">
                <title>Go to homepage</title>
                <path
                  fill="var(--color-contrast-higher)"
                  d="M43.371 6.3v15.482c0 .567-.01 1.587.543 1.758a7.624 7.624 0 001.992.132c2.012 0 3.842-2.683 4.5-3.831a11.223 11.223 0 001.319-3.581h.689q-.087 1.069-.088 2.754 0 3.252.2 5.346c-6.586-.087-10.41-.111-17.373 0v-.6c2.34 0 2.139-1.266 2.139-2.578V6.3c0-2.091-.254-2.515-2.139-2.578v-.6q1.714.088 5.346.088 3.457 0 5.3-.088v.6c-2.299-.001-2.428.794-2.428 2.578zM69.446 16.6c0 4.278-1.508 8.188-7.7 8.188-4.324 0-7.72-1.827-7.72-8.188 0-6.18 3.187-8.233 7.72-8.233 5.525-.003 7.7 3.05 7.7 8.233zm-9.814 0c0 2.558.243 7.588 2.109 7.588s2.095-5.03 2.095-7.588-.211-7.632-2.095-7.632c-1.866-.003-2.109 5.06-2.109 7.632zM103.532 16.6c0 4.278-1.509 8.188-7.7 8.188-4.324 0-7.72-1.827-7.72-8.188 0-6.18 3.187-8.233 7.72-8.233 5.525-.003 7.7 3.05 7.7 8.233zm-9.814 0c0 2.558.243 7.588 2.109 7.588s2.095-5.03 2.095-7.588-.211-7.632-2.095-7.632c-1.866-.003-2.109 5.06-2.109 7.632zM86.907 23.672c0 3.175-2.654 4.813-3.991 5.413-3.269 1.468-8 .795-9.053.557s-2.879-.783-2.879-2.132c0-1.4 1.721-1.421 2.791-1.538a3.138 3.138 0 002.146-.835c-.568.011-2.734.223-3.97-1.208a3.606 3.606 0 01-.226-3.656c.249-.5.922-1.555 3.507-2.739a4.58 4.58 0 01-3.647-4.365 4.469 4.469 0 013.384-4.277 12.818 12.818 0 015.464-.411 4.849 4.849 0 01.813-3.493A3.007 3.007 0 0183.787 3.9c1.672 0 2.593.9 2.593 2.007a1.937 1.937 0 01-1.216 1.703 3.4 3.4 0 01-2.893-.132A2.929 2.929 0 0181.238 6.3a5.74 5.74 0 00-.161 2.27c4.2.843 4.6 3.35 4.6 4.6 0 2.866-2.348 4.805-7.046 4.805a12.73 12.73 0 01-2.842-.293c-.536.348-1.172.715-1.172 1.494q0 .981 1.07.981H82.5c1.316-.001 4.407.219 4.407 3.515zm-10.766 3.413c0 2.19 1.821 2.4 2.71 2.4a3.723 3.723 0 003.405-1.619 3.206 3.206 0 00.491-1.764c0-.484-.155-.967-1.377-.967h-4.849a4.312 4.312 0 00-.38 1.95zm.966-13.916c0 1.543.058 4.263 1.524 4.263 1.487 0 1.538-2.72 1.538-4.263s-.075-4.263-1.538-4.263c-1.443 0-1.524 2.73-1.524 4.263z"
                />
                <path fill="var(--color-primary)" d="M14 14V1H1v26h27V14H14z" />
                <path fill="var(--color-primary)" d="M14 1h14v13L14 1z" />
              </svg>
            </a>
          </div>

          <nav className="col-9@lg order-1@lg">
            <ul className="grid gap-lg">
              <li className="col-6@sm col-3@md">
                <div className="main-footer__items">
                  <h4 className="font-primary">Shop</h4>
                  <div className="main-footer__item">
                    <a href="shop.html" className="main-footer__link">
                      All Products
                    </a>
                  </div>
                  <div className="main-footer__item">
                    <a
                      href="shop-categories.html"
                      className="main-footer__link"
                    >
                      Categories
                    </a>
                  </div>
                  <div className="main-footer__item">
                    <a href="product-v1.html" className="main-footer__link">
                      Product v1
                    </a>
                  </div>
                  <div className="main-footer__item">
                    <a href="product-v2.html" className="main-footer__link">
                      Product v2
                    </a>
                  </div>
                  <div className="main-footer__item">
                    <a href="cart.html" className="main-footer__link">
                      Cart
                    </a>
                  </div>
                  <div className="main-footer__item">
                    <a href="checkout.html" className="main-footer__link">
                      Checkout
                    </a>
                  </div>
                </div>
              </li>

              <li className="col-6@sm col-3@md">
                <div className="main-footer__items">
                  <h4 className="font-primary">Pages</h4>
                  <div className="main-footer__item">
                    <a href="index.html" className="main-footer__link">
                      Home v1
                    </a>
                  </div>
                  <div className="main-footer__item">
                    <a href="home-v2.html" className="main-footer__link">
                      Home v2
                    </a>
                  </div>
                  <div className="main-footer__item">
                    <a href="about-us.html" className="main-footer__link">
                      About Us
                    </a>
                  </div>
                  <div className="main-footer__item">
                    <a href="404.html" className="main-footer__link">
                      404
                    </a>
                  </div>
                  <div className="main-footer__item">
                    <a href="thank-you.html" className="main-footer__link">
                      Thank You
                    </a>
                  </div>
                  <div className="main-footer__item">
                    <a href="basic-page.html" className="main-footer__link">
                      Basic Page
                    </a>
                  </div>
                </div>
              </li>

              <li className="col-6@sm col-3@md">
                <div className="main-footer__items">
                  <h4 className="font-primary">Blog</h4>
                  <div className="main-footer__item">
                    <a href="blog.html" className="main-footer__link">
                      Blog Gallery v1
                    </a>
                  </div>
                  <div className="main-footer__item">
                    <a href="blog-v2.html" className="main-footer__link">
                      Blog Gallery v2
                    </a>
                  </div>
                  <div className="main-footer__item">
                    <a href="blog-post.html" className="main-footer__link">
                      Blog Post
                    </a>
                  </div>
                </div>
              </li>

              <li className="col-6@sm col-3@md">
                <div className="main-footer__items">
                  <h4 className="font-primary">Account</h4>
                  <div className="main-footer__item">
                    <a
                      href="account-settings.html"
                      className="main-footer__link"
                    >
                      Settings
                    </a>
                  </div>
                  <div className="main-footer__item">
                    <a
                      href="account-addresses.html"
                      className="main-footer__link"
                    >
                      Addresses
                    </a>
                  </div>
                  <div className="main-footer__item">
                    <a
                      href="account-order-history.html"
                      className="main-footer__link"
                    >
                      Order History
                    </a>
                  </div>
                  <div className="main-footer__item">
                    <a
                      href="account-order-details.html"
                      className="main-footer__link"
                    >
                      Order Details
                    </a>
                  </div>
                  <div className="main-footer__item">
                    <a
                      href="account-wishlist.html"
                      className="main-footer__link"
                    >
                      Wishlist
                    </a>
                  </div>
                  <div className="main-footer__item">
                    <a
                      href="account-payment-methods.html"
                      className="main-footer__link"
                    >
                      Payment Methods
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>

        <div className="main-footer__colophon border-top padding-top-xs margin-top-lg">
          <div className="text-sm text-xs@md color-contrast-medium flex gap-xs">
            <span>&copy; myWebsite</span>
            <a href="basic-page.html" className="color-contrast-high">
              Terms
            </a>
            <a href="basic-page.html" className="color-contrast-high">
              Privacy
            </a>
          </div>

          <div className="flex items-center gap-xs">
            <a href="#0" className="main-footer__social">
              <svg className="icon" viewBox="0 0 16 16">
                <title>Follow us on Twitter</title>
                <g>
                  <path d="M16,3c-0.6,0.3-1.2,0.4-1.9,0.5c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8c-0.6-0.6-1.5-1-2.4-1 C9.3,1.5,7.8,3,7.8,4.8c0,0.3,0,0.5,0.1,0.7C5.2,5.4,2.7,4.1,1.1,2.1c-0.3,0.5-0.4,1-0.4,1.7c0,1.1,0.6,2.1,1.5,2.7 c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.6,1.1,2.9,2.6,3.2C3,9.4,2.7,9.4,2.4,9.4c-0.2,0-0.4,0-0.6-0.1c0.4,1.3,1.6,2.3,3.1,2.3 c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.5,0.9,3.2,1.5,5,1.5c6,0,9.3-5,9.3-9.3c0-0.1,0-0.3,0-0.4C15,4.3,15.6,3.7,16,3z"></path>
                </g>
              </svg>
            </a>

            <a href="#0" className="main-footer__social">
              <svg className="icon" viewBox="0 0 16 16">
                <title>Follow us on Youtube</title>
                <g>
                  <path d="M15.8,4.8c-0.2-1.3-0.8-2.2-2.2-2.4C11.4,2,8,2,8,2S4.6,2,2.4,2.4C1,2.6,0.3,3.5,0.2,4.8C0,6.1,0,8,0,8 s0,1.9,0.2,3.2c0.2,1.3,0.8,2.2,2.2,2.4C4.6,14,8,14,8,14s3.4,0,5.6-0.4c1.4-0.3,2-1.1,2.2-2.4C16,9.9,16,8,16,8S16,6.1,15.8,4.8z M6,11V5l5,3L6,11z"></path>
                </g>
              </svg>
            </a>

            <a href="#0" className="main-footer__social">
              <svg className="icon" viewBox="0 0 16 16">
                <title>Find us on Facebook</title>
                <g>
                  <path d="M16,8.048a8,8,0,1,0-9.25,7.9V10.36H4.719V8.048H6.75V6.285A2.822,2.822,0,0,1,9.771,3.173a12.2,12.2,0,0,1,1.791.156V5.3H10.554a1.155,1.155,0,0,0-1.3,1.25v1.5h2.219l-.355,2.312H9.25v5.591A8,8,0,0,0,16,8.048Z"></path>
                </g>
              </svg>
            </a>

            <a href="#0" className="main-footer__social">
              <svg className="icon" viewBox="0 0 16 16">
                <title>Follow us on Instagram</title>
                <g>
                  <circle cx="12.145" cy="3.892" r="0.96"></circle>
                  <path d="M8,12c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S10.206,12,8,12z M8,6C6.897,6,6,6.897,6,8 s0.897,2,2,2s2-0.897,2-2S9.103,6,8,6z"></path>
                  <path d="M12,16H4c-2.056,0-4-1.944-4-4V4c0-2.056,1.944-4,4-4h8c2.056,0,4,1.944,4,4v8C16,14.056,14.056,16,12,16z M4,2C3.065,2,2,3.065,2,4v8c0,0.953,1.047,2,2,2h8c0.935,0,2-1.065,2-2V4c0-0.935-1.065-2-2-2H4z"></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
