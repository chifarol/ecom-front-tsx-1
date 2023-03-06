import React from "react";

type Props = {};

const CartDrawer = (props: Props) => {
  return (
    <>
      {/* <!-- cart drawer --> */}
      <div
        className="modal modal--animate-slide-left flex justify-end bg-contrast-higher bg-opacity-90% js-modal"
        id="cart-drawer"
      >
        <div
          className="modal__content dr-cart bg shadow-md flex flex-column width-100% max-width-xxs js-tab-focus"
          role="alertdialog"
          aria-labelledby="cart-drawer-title"
          aria-describedby="cart-drawer-description"
        >
          <div className="padding-top-sm padding-x-md flex-grow overflow-auto momentum-scrolling overscroll-contain">
            <button className="reset modal__close-btn modal__close-btn--inner float-right position-sticky top-0 js-modal__close js-tab-focus">
              <svg className="icon" viewBox="0 0 20 20">
                <title>Close modal window</title>
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                >
                  <line x1="3" y1="3" x2="17" y2="17" />
                  <line x1="17" y1="3" x2="3" y2="17" />
                </g>
              </svg>
            </button>

            <h2 id="cart-drawer-title">Your Cart</h2>

            <ol className="margin-top-md">
              <li className="dr-cart__product">
                <a href="#0" className="dr-cart__img">
                  <img
                    src="assets/img/cart-drawer-img-1.jpg"
                    alt="Image description"
                  />
                </a>

                <div>
                  <h2 className="text-base">
                    <a href="#0" className="color-inherit">
                      Product One
                    </a>
                  </h2>
                  <p className="text-sm color-contrast-medium margin-top-xxxs">
                    Color: Black, Size: M
                  </p>

                  <div className="margin-top-xxxxs">
                    <div className="select dr-cart__select">
                      <select
                        className="select__input form-control"
                        name="selectProductQty1"
                        id="selectProductQty1"
                        data-label="Select product quantity"
                      >
                        <option value="0">1</option>
                        <option value="1">2</option>
                        <option value="2">3</option>
                      </select>

                      <svg
                        className="icon select__icon"
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                      >
                        <g strokeWidth="1" stroke="currentColor">
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            points="15.5,4.5 8,12 0.5,4.5 "
                          ></polyline>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <p className="color-contrast-higher">$49.00</p>
                  <button className="dr-cart__remove-btn margin-top-xxxs">
                    Remove
                  </button>
                </div>
              </li>

              <li className="dr-cart__product">
                <a href="#0" className="dr-cart__img">
                  <img
                    src="assets/img/cart-drawer-img-2.jpg"
                    alt="Image description"
                  />
                </a>

                <div>
                  <h2 className="text-base">
                    <a href="#0" className="color-inherit">
                      Product Two
                    </a>
                  </h2>
                  <p className="text-sm color-contrast-medium margin-top-xxxs">
                    Color: Black, Size: M
                  </p>

                  <div className="margin-top-xxxxs">
                    <div className="select dr-cart__select">
                      <select
                        className="select__input form-control"
                        name="selectProductQty2"
                        id="selectProductQty2"
                        data-label="Select product quantity"
                      >
                        <option value="0">1</option>
                        <option value="1">2</option>
                        <option value="2">3</option>
                      </select>

                      <svg
                        className="icon select__icon"
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                      >
                        <g strokeWidth="1" stroke="currentColor">
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            points="15.5,4.5 8,12 0.5,4.5 "
                          ></polyline>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <p className="color-contrast-higher">$49.00</p>
                  <button className="dr-cart__remove-btn margin-top-xxxs">
                    Remove
                  </button>
                </div>
              </li>
            </ol>
          </div>

          <footer className="bg-contrast-lower bg-opacity-30% padding-x-md padding-y-sm flex-shrink-0">
            <p className="flex justify-between">
              <span>Subtotal:</span> <span>$98.00</span>
            </p>
            <a
              href="#0"
              className="btn btn--primary btn--md width-100% margin-y-xs"
            >
              Checkout &rarr;
            </a>
          </footer>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
