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
        <title>Home</title>
      </Head>
      <>
        {/* intro */}
        <section
          className="padding-top-header position-relative z-index-1"
          data-theme="dark-1"
        >
          <div className="container max-width-adaptive-lg padding-y-xl position-relative z-index-1">
            <div className="text-center">
              <p className="text-uppercase text-xs letter-spacing-lg color-contrast-medium">
                Shop
              </p>
              <h1 className="text-xxxl text-uppercase">Our Products</h1>
            </div>
          </div>
          <figure
            className="bg-decoration-v2 z-index-1 flip-y"
            aria-hidden="true"
          >
            <svg
              className="bg-decoration-v2__svg color-contrast-higher opacity-10%"
              viewBox="0 0 1920 450"
              fill="none"
            >
              <g stroke="currentColor" stroke-width={2}>
                <path d="M1548 -1C1548 34.0086 1561.91 67.5833 1586.66 92.3381C1611.42 117.093 1644.99 131 1680 131C1715.01 131 1748.58 117.093 1773.34 92.3381C1798.09 67.5833 1812 34.0086 1812 -0.999992L1548 -1Z" />
                <rect
                  x="1609.36"
                  y={330}
                  width="194.334"
                  height="194.334"
                  transform="rotate(-127.521 1609.36 330)"
                />
                <path d="M1486 63C1486 55.5739 1483.05 48.452 1477.8 43.201C1472.55 37.95 1465.43 35 1458 35C1450.57 35 1443.45 37.95 1438.2 43.201C1432.95 48.452 1430 55.5739 1430 63" />
              </g>
            </svg>
          </figure>
        </section>
        {/* products */}
        <section className="adv-filter padding-top-xl padding-bottom-xxl js-adv-filter">
          <div className="container max-width-lg">
            <div className="margin-bottom-md hide@md no-js:is-hidden">
              <button
                className="btn btn--subtle width-100%"
                aria-controls="filter-panel"
              >
                Show filters
              </button>
            </div>
            <div className="flex@md">
              {/* sidebar */}
              <aside
                className="sidebar sidebar--static@md js-sidebar"
                id="filter-panel"
                aria-labelledby="filter-panel-title"
              >
                <div className="sidebar__panel">
                  <header className="sidebar__header z-index-2">
                    <h1
                      className="text-md text-truncate"
                      id="filter-panel-title"
                    >
                      Filters
                    </h1>
                    <button className="reset sidebar__close-btn js-sidebar__close-btn js-tab-focus">
                      <svg className="icon" viewBox="0 0 16 16">
                        <title>Close panel</title>
                        <g
                          stroke-width={1}
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit={10}
                        >
                          <line x1="13.5" y1="2.5" x2="2.5" y2="13.5" />
                          <line x1="2.5" y1="2.5" x2="13.5" y2="13.5" />
                        </g>
                      </svg>
                    </button>
                  </header>
                  <form className="position-relative z-index-1 js-adv-filter__form">
                    <div className="padding-md padding-0@md margin-bottom-sm@md">
                      <button
                        className="reset text-sm color-contrast-high text-underline cursor-pointer margin-bottom-md text-xs@md js-adv-filter__reset js-tab-focus"
                        type="reset"
                      >
                        Reset all filters
                      </button>
                      <div className="search-input search-input--icon-left text-sm@md">
                        <input
                          className="form-control width-100%"
                          type="search"
                          name="search-products"
                          id="search-products"
                          placeholder="Search..."
                          aria-label="Search"
                        />
                        <button className="search-input__btn">
                          <svg className="icon" viewBox="0 0 24 24">
                            <title>Submit</title>
                            <g
                              stroke-linecap="square"
                              stroke-linejoin="miter"
                              stroke-width={2}
                              stroke="currentColor"
                              fill="none"
                              stroke-miterlimit={10}
                            >
                              <line x1={22} y1={22} x2="15.656" y2="15.656" />
                              <circle cx={10} cy={10} r={8} />
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <ul
                      className="accordion js-accordion"
                      data-animation="on"
                      data-multi-items="on"
                    >
                      <li
                        className="accordion__item accordion__item--is-open js-accordion__item js-adv-filter__item"
                        data-default-text="All"
                        data-multi-select-text="{n} filters selected"
                      >
                        <button
                          className="reset accordion__header padding-y-sm padding-x-md padding-x-xs@md js-tab-focus"
                          type="button"
                        >
                          <div>
                            <div className="text-sm@md">Brands</div>
                            <div className="text-sm color-contrast-medium">
                              <i className="sr-only">Active filters: </i>
                              <span className="js-adv-filter__selection">
                                All
                              </span>
                            </div>
                          </div>
                          <svg
                            className="icon accordion__icon-arrow-v2 no-js:is-hidden"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <g
                              className="icon__group"
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="square"
                              stroke-miterlimit={10}
                            >
                              <path d="M2 2l12 12" />
                              <path d="M14 2L2 14" />
                            </g>
                          </svg>
                        </button>
                        <div className="accordion__panel js-accordion__panel">
                          <div className="padding-top-xxxs padding-x-md padding-bottom-md padding-x-xs@md">
                            <div
                              className="adv-filter__checkbox-list flex flex-column gap-xxxs js-read-more"
                              data-btn-labels="Show More, Show Less"
                              data-ellipsis="off"
                              data-btn-class="reset text-sm text-underline cursor-pointer margin-top-xs js-tab-focus"
                            >
                              {/* 👆 data-btn-labels, data-ellipsis, data-btn-class -> read more component */}
                              <div>
                                <input
                                  className="checkbox"
                                  type="checkbox"
                                  id="brand-one"
                                />
                                <label htmlFor="brand-one">Brand One</label>
                              </div>
                              <div>
                                <input
                                  className="checkbox"
                                  type="checkbox"
                                  id="brand-two"
                                />
                                <label htmlFor="brand-two">Brand Two</label>
                              </div>
                              <div className="js-read-more__content">
                                <div className="flex flex-column gap-xxxs">
                                  <div>
                                    <input
                                      className="checkbox"
                                      type="checkbox"
                                      id="brand-three"
                                    />
                                    <label htmlFor="brand-three">
                                      Brand Three
                                    </label>
                                  </div>
                                  <div>
                                    <input
                                      className="checkbox"
                                      type="checkbox"
                                      id="brand-four"
                                    />
                                    <label htmlFor="brand-four">
                                      Brand Four
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        className="accordion__item js-accordion__item js-adv-filter__item"
                        data-default-text="All"
                      >
                        <button
                          className="reset accordion__header padding-y-sm padding-x-md padding-x-xs@md js-tab-focus"
                          type="button"
                        >
                          <div>
                            <div className="text-sm@md">Categories</div>
                            <div className="text-sm color-contrast-medium">
                              <i className="sr-only">Active filters: </i>
                              <span className="js-adv-filter__selection">
                                All
                              </span>
                            </div>
                          </div>
                          <svg
                            className="icon accordion__icon-arrow-v2 no-js:is-hidden"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <g
                              className="icon__group"
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="square"
                              stroke-miterlimit={10}
                            >
                              <path d="M2 2l12 12" />
                              <path d="M14 2L2 14" />
                            </g>
                          </svg>
                        </button>
                        <div className="accordion__panel js-accordion__panel">
                          <div className="padding-top-xxxs padding-x-md padding-bottom-md padding-x-xs@md">
                            <ul className="adv-filter__radio-list flex flex-column gap-xxxs">
                              <li>
                                <input
                                  className="radio"
                                  type="radio"
                                  name="radio-categories"
                                  id="category-all"
                                  defaultChecked
                                />
                                <label htmlFor="category-all">All</label>
                              </li>
                              <li>
                                <input
                                  className="radio"
                                  type="radio"
                                  name="radio-categories"
                                  id="category-clothing"
                                />
                                <label htmlFor="category-clothing">
                                  Clothing
                                </label>
                              </li>
                              <li>
                                <input
                                  className="radio"
                                  type="radio"
                                  name="radio-categories"
                                  id="category-accessories"
                                />
                                <label htmlFor="category-accessories">
                                  Accessories
                                </label>
                              </li>
                              <li>
                                <input
                                  className="radio"
                                  type="radio"
                                  name="radio-categories"
                                  id="category-home"
                                />
                                <label htmlFor="category-home">Home</label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li
                        className="accordion__item accordion__item--is-open js-accordion__item js-adv-filter__item"
                        data-number-format="${n}"
                      >
                        <button
                          className="reset accordion__header padding-y-sm padding-x-md padding-x-xs@md js-tab-focus"
                          type="button"
                        >
                          <div>
                            <div className="text-sm@md">Price</div>
                            <div className="text-sm color-contrast-medium">
                              <i className="sr-only">Active filters: </i>
                              <span className="js-adv-filter__selection">
                                $0 - $100
                              </span>
                            </div>
                          </div>
                          <svg
                            className="icon accordion__icon-arrow-v2 no-js:is-hidden"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <g
                              className="icon__group"
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="square"
                              stroke-miterlimit={10}
                            >
                              <path d="M2 2l12 12" />
                              <path d="M14 2L2 14" />
                            </g>
                          </svg>
                        </button>
                        <div className="accordion__panel js-accordion__panel">
                          <div className="padding-top-xxxs padding-x-md padding-bottom-md padding-x-xs@md flex justify-center">
                            <div className="slider slider--multi-value js-slider">
                              <div className="slider__range">
                                <label
                                  className="sr-only"
                                  htmlFor="slider-min-value"
                                >
                                  Slider min value
                                </label>
                                <input
                                  className="slider__input"
                                  type="range"
                                  id="slider-min-value"
                                  name="slider-min-value"
                                  min={0}
                                  max={100}
                                  step={1}
                                  defaultValue={0}
                                />
                              </div>
                              <div className="slider__range">
                                <label
                                  className="sr-only"
                                  htmlFor="slider-max-value"
                                >
                                  Slider max value
                                </label>
                                <input
                                  className="slider__input"
                                  type="range"
                                  id="slider-max-value"
                                  name="slider-max-value"
                                  min={0}
                                  max={100}
                                  step={1}
                                  defaultValue={100}
                                />
                              </div>
                              <div
                                className="margin-top-xs text-center text-sm"
                                aria-hidden="true"
                              >
                                <span className="slider__value">
                                  $<span className="js-slider__value">0</span> -
                                  $<span className="js-slider__value">100</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        className="accordion__item js-accordion__item js-adv-filter__item"
                        data-default-text="All"
                        data-multi-select-text="{n} filters selected"
                        data-number-format="{n}+"
                      >
                        <button
                          className="reset accordion__header padding-y-sm padding-x-md padding-x-xs@md js-tab-focus"
                          type="button"
                        >
                          <div>
                            <div className="text-sm@md">Quantity</div>
                            <div className="text-sm color-contrast-medium">
                              <i className="sr-only">Active filters: </i>
                              <span className="js-adv-filter__selection">
                                All
                              </span>
                            </div>
                          </div>
                          <svg
                            className="icon accordion__icon-arrow-v2 no-js:is-hidden"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <g
                              className="icon__group"
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="square"
                              stroke-miterlimit={10}
                            >
                              <path d="M2 2l12 12" />
                              <path d="M14 2L2 14" />
                            </g>
                          </svg>
                        </button>
                        <div className="accordion__panel js-accordion__panel">
                          <div className="padding-top-xxxs padding-x-md padding-bottom-md padding-x-xs@md">
                            <div className="flex justify-between items-center">
                              <label className="text-sm" htmlFor="index-value">
                                Quantity
                              </label>
                              <div className="number-input number-input--v2 js-number-input">
                                <input
                                  className="form-control text-sm@md js-number-input__value"
                                  type="number"
                                  name="index-value"
                                  id="index-value"
                                  min={0}
                                  max={10}
                                  step={1}
                                  defaultValue={0}
                                />
                                <button
                                  className="reset number-input__btn number-input__btn--plus js-number-input__btn"
                                  aria-label="Increase Number"
                                >
                                  <svg
                                    className="icon"
                                    viewBox="0 0 12 12"
                                    aria-hidden="true"
                                  >
                                    <path d="M11,5H7V1A1,1,0,0,0,5,1V5H1A1,1,0,0,0,1,7H5v4a1,1,0,0,0,2,0V7h4a1,1,0,0,0,0-2Z" />
                                  </svg>
                                </button>
                                <button
                                  className="reset number-input__btn number-input__btn--minus js-number-input__btn"
                                  aria-label="Decrease Number"
                                >
                                  <svg
                                    className="icon"
                                    viewBox="0 0 12 12"
                                    aria-hidden="true"
                                  >
                                    <path d="M11,7H1A1,1,0,0,1,1,5H11a1,1,0,0,1,0,2Z" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="accordion__item js-accordion__item js-adv-filter__item">
                        <button
                          className="reset accordion__header padding-y-sm padding-x-md padding-x-xs@md js-tab-focus"
                          type="button"
                        >
                          <div>
                            <div className="text-sm@md">Select</div>
                            <div className="text-sm color-contrast-medium">
                              <i className="sr-only">Active filters: </i>
                              <span className="js-adv-filter__selection">
                                All
                              </span>
                            </div>
                          </div>
                          <svg
                            className="icon accordion__icon-arrow-v2 no-js:is-hidden"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <g
                              className="icon__group"
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="square"
                              stroke-miterlimit={10}
                            >
                              <path d="M2 2l12 12" />
                              <path d="M14 2L2 14" />
                            </g>
                          </svg>
                        </button>
                        <div className="accordion__panel js-accordion__panel">
                          <div className="padding-top-xxxs padding-x-md padding-bottom-md padding-x-xs@md flex">
                            <label
                              className="sr-only"
                              htmlFor="select-filter-option"
                            >
                              Select Option:
                            </label>
                            <div
                              className="select width-100% js-select"
                              data-trigger-class="btn btn--subtle flex-grow"
                            >
                              {/* data-trigger-class -> custom select component 👆 */}
                              <select
                                name="select-filter-option"
                                id="select-filter-option"
                              >
                                <option value="*" selected>
                                  All
                                </option>
                                <option value="true">True</option>
                                <option value="false">False</option>
                              </select>
                              <svg
                                className="icon icon--xs margin-left-xxxs"
                                aria-hidden="true"
                                viewBox="0 0 16 16"
                              >
                                <polygon points="3,5 8,11 13,5 " />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </form>
                </div>
              </aside>
              <div className="flex-grow padding-left-xl@md">
                <div className="flex items-center justify-between margin-bottom-sm">
                  <p className="text-sm">
                    <span className="js-adv-filter__results-count">9</span>{" "}
                    results
                  </p>
                  <div className="flex items-baseline">
                    <label
                      className="text-sm color-contrast-medium margin-right-xs"
                      htmlFor="select-sorting"
                    >
                      Sort:
                    </label>
                    <div
                      className="select inline-block js-select"
                      data-trigger-class="reset text-sm color-contrast-high text-underline inline-flex items-center cursor-pointer js-tab-focus"
                    >
                      {/* data-trigger-class -> custom select component 👆 */}
                      <select name="select-sorting" id="select-sorting">
                        <option value="*" selected>
                          No sorting
                        </option>
                        <option value="index">Index</option>
                        <option value="index">Index Desc</option>
                      </select>
                      <svg
                        className="icon icon--xs margin-left-xxxs"
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                      >
                        <polygon points="3,5 8,11 13,5 " />
                      </svg>
                    </div>
                  </div>
                </div>
                <ul className="grid gap-sm js-adv-filter__gallery">
                  <li className="col-6@xs col-4@lg">
                    <div className="prod-card-v2">
                      <span className="prod-card-v2__badge" role="text">
                        New <i className="sr-only">product</i>
                      </span>
                      <a
                        href="#0"
                        className="prod-card-v2__img-link"
                        aria-label="Description of the link"
                      >
                        <figure className="aspect-ratio-4:5">
                          <img
                            src="assets/img/product-card-v2-img-1a.jpg"
                            alt="Product preview image"
                          />
                        </figure>
                      </a>
                      <div className="padding-sm text-center">
                        <h2 className="text-base font-primary">
                          <a href="#0" className="product-card-v2__title">
                            Product Name
                          </a>
                        </h2>
                        <div className="margin-top-xxxs">
                          <span className="prod-card-v2__price">$79</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="col-6@xs col-4@lg">
                    <div className="prod-card-v2">
                      <a
                        href="#0"
                        className="prod-card-v2__img-link"
                        aria-label="Description of the link"
                      >
                        <figure className="aspect-ratio-4:5">
                          <img
                            src="assets/img/product-card-v2-img-2a.jpg"
                            alt="Product preview image"
                          />
                        </figure>
                      </a>
                      <div className="padding-sm text-center">
                        <h2 className="text-base font-primary">
                          <a href="#0" className="product-card-v2__title">
                            Product Name
                          </a>
                        </h2>
                        <div className="margin-top-xxxs">
                          <span className="prod-card-v2__price">$79</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="col-6@xs col-4@lg">
                    <div className="prod-card-v2">
                      <span
                        className="prod-card-v2__badge prod-card-v2__badge--discount"
                        role="text"
                      >
                        50% Off
                      </span>
                      <a
                        href="#0"
                        className="prod-card-v2__img-link"
                        aria-label="Description of the link"
                      >
                        <figure className="aspect-ratio-4:5">
                          <img
                            src="assets/img/product-card-v2-img-3a.jpg"
                            alt="Product preview image"
                          />
                        </figure>
                      </a>
                      <div className="padding-sm text-center">
                        <h2 className="text-base font-primary">
                          <a href="#0" className="product-card-v2__title">
                            Product Name
                          </a>
                        </h2>
                        <div className="margin-top-xxxs">
                          <del className="prod-card-v2__old-price">$79</del>
                          <ins className="prod-card-v2__price">$40</ins>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="col-6@xs col-4@lg">
                    <div className="prod-card-v2">
                      <a
                        href="#0"
                        className="prod-card-v2__img-link"
                        aria-label="Description of the link"
                      >
                        <figure className="aspect-ratio-4:5">
                          <img
                            src="assets/img/product-card-v2-img-4a.jpg"
                            alt="Product preview image"
                          />
                        </figure>
                      </a>
                      <div className="padding-sm text-center">
                        <h2 className="text-base font-primary">
                          <a href="#0" className="product-card-v2__title">
                            Product Name
                          </a>
                        </h2>
                        <div className="margin-top-xxxs">
                          <span className="prod-card-v2__price">$79</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="col-6@xs col-4@lg">
                    <div className="prod-card-v2">
                      <a
                        href="#0"
                        className="prod-card-v2__img-link"
                        aria-label="Description of the link"
                      >
                        <figure className="aspect-ratio-4:5">
                          <img
                            src="assets/img/product-card-v2-img-5a.jpg"
                            alt="Product preview image"
                          />
                        </figure>
                      </a>
                      <div className="padding-sm text-center">
                        <h2 className="text-base font-primary">
                          <a href="#0" className="product-card-v2__title">
                            Product Name
                          </a>
                        </h2>
                        <div className="margin-top-xxxs">
                          <span className="prod-card-v2__price">$79</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="col-6@xs col-4@lg">
                    <div className="prod-card-v2">
                      <a
                        href="#0"
                        className="prod-card-v2__img-link"
                        aria-label="Description of the link"
                      >
                        <figure className="aspect-ratio-4:5">
                          <img
                            src="assets/img/product-card-v2-img-6a.jpg"
                            alt="Product preview image"
                          />
                        </figure>
                      </a>
                      <div className="padding-sm text-center">
                        <h2 className="text-base font-primary">
                          <a href="#0" className="product-card-v2__title">
                            Product Name
                          </a>
                        </h2>
                        <div className="margin-top-xxxs">
                          <span className="prod-card-v2__price">$79</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="col-6@xs col-4@lg">
                    <div className="prod-card-v2">
                      <a
                        href="#0"
                        className="prod-card-v2__img-link"
                        aria-label="Description of the link"
                      >
                        <figure className="aspect-ratio-4:5">
                          <img
                            src="assets/img/product-card-v2-img-7a.jpg"
                            alt="Product preview image"
                          />
                        </figure>
                      </a>
                      <div className="padding-sm text-center">
                        <h2 className="text-base font-primary">
                          <a href="#0" className="product-card-v2__title">
                            Product Name
                          </a>
                        </h2>
                        <div className="margin-top-xxxs">
                          <span className="prod-card-v2__price">$79</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="col-6@xs col-4@lg">
                    <div className="prod-card-v2">
                      <a
                        href="#0"
                        className="prod-card-v2__img-link"
                        aria-label="Description of the link"
                      >
                        <figure className="aspect-ratio-4:5">
                          <img
                            src="assets/img/product-card-v2-img-8a.jpg"
                            alt="Product preview image"
                          />
                        </figure>
                      </a>
                      <div className="padding-sm text-center">
                        <h2 className="text-base font-primary">
                          <a href="#0" className="product-card-v2__title">
                            Product Name
                          </a>
                        </h2>
                        <div className="margin-top-xxxs">
                          <span className="prod-card-v2__price">$79</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="col-6@xs col-4@lg">
                    <div className="prod-card-v2">
                      <a
                        href="#0"
                        className="prod-card-v2__img-link"
                        aria-label="Description of the link"
                      >
                        <figure className="aspect-ratio-4:5">
                          <img
                            src="assets/img/product-card-v2-img-9a.jpg"
                            alt="Product preview image"
                          />
                        </figure>
                      </a>
                      <div className="padding-sm text-center">
                        <h2 className="text-base font-primary">
                          <a href="#0" className="product-card-v2__title">
                            Product Name
                          </a>
                        </h2>
                        <div className="margin-top-xxxs">
                          <span className="prod-card-v2__price">$79</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="text-center margin-top-lg">
                  <button className="btn btn--subtle btn--md">
                    Load More Products
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
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
