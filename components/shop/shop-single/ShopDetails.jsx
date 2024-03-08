"use client";

import dynamic from "next/dynamic";
import shopItems from "@/data/shopItems";
import Breadcrumb from "@/components/shop/Breadcrumb";
import LoginPopup from "@/components/common/form/login/LoginPopup";

import MobileMenu from "@/components/header/MobileMenu";
import FooterDefault from "@/components/footer/common-footer";
import ProductInfoTabs from "@/components/shop/shop-single/components/ProductInfoTabs";

import { useEffect, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { useDispatch } from "react-redux";
import { addCart, addQty } from "@/features/shop/shopSlice";
import Image from "next/image";
import DashboardAdminHeader from "../../../components/header/DashboardAdminHeader"
import DashboardEmployeeHeader from "../../../components/header/DashboardEmployerHeader"
import DashboardCandidatesHeader from "../../../components/header/DashboardCandidatesHeader"
import DashboardStudentHeader from "../../../components/header/DashboardStudentsHeader"
import DefaulHeader2 from "@/components/header/DefaultHeader";
import Link from "next/link";


const ShopSingleDyanmic = ({ id }) => {
  const [product, setProducts] = useState({});
  const [getQty, setQty] = useState(1);
  const [userType, setUserType] = useState();
  const dispatch = useDispatch();
  const [relatedProducts, setRelatedProducts] = useState([]);
  const isLoggedIn = typeof window !== 'undefined' && localStorage.getItem('accessToken') !== null; // Check if user is logged in

  useEffect(() => {
    // Fetch product details based on id
    if (!id) <h1>Loading...</h1>;
    else setProducts(shopItems.find((item) => item.id == id) || shopItems[0]);

    // Filter related products based on category
    const related = shopItems.filter(item => item.category === product.category && item.id !== id);
    setRelatedProducts(related.slice(0, 5)); // Limiting to 5 related products

    return () => { };
  }, [id, product.category]);
  useEffect(() => {
    const storedUserType = localStorage.getItem('userType');
    if (storedUserType) {
      setUserType(JSON.parse(storedUserType));
    }
  }, []);


  useEffect(() => {
    if (!id) <h1>Loading...</h1>;
    else setProducts(shopItems.find((item) => item.id == id) || shopItems[0]);

    return () => { };
  }, [id]);

  // add to cart
  const addToCart = () => {
    dispatch(addCart({ product, qty: getQty }));
  };

  // qty handler
  const qtyHandler = (qty) => {
    setQty(qty);
  };

  return (
    <>
      <span className="header-span"></span>

      {/* <!-- Header Span --> */}

      <LoginPopup />
      {/* End Login Popup Modal */}

      {userType === 1 && <DashboardAdminHeader />}
      {userType === 3 && <DashboardEmployeeHeader />}
      {userType === 4 && <DashboardCandidatesHeader />}
      {userType === 5 && <DashboardStudentHeader />}
      {userType !== 1 && userType !== 3 && userType !== 4 && userType !== 5 && <DefaulHeader2 />}

      <MobileMenu />
      {/* End MobileMenu */}

      <Breadcrumb title="FFI - Service Ordering Details" meta={product?.title} />
      {/* <!--End Page Title--> */}

      {/* <!-- Start Shop Single --> */}
      <section className="shop-single">
        <div className="auto-container">
          {/* <!-- Start Product Detail --> */}
          <div className="product-details">
            {/*  <!--Start Basic Details--> */}
            <div className="basic-details">
              <div className="row clearfix">
                <div className="image-column col-md-4">
                  <Gallery>
                    <figure className="image">
                      <Item
                        original={product?.img}
                        thumbnail={product?.img}
                        width={100}
                        height={100}
                      >
                        {({ ref, open }) => (
                          <div
                            className="lightbox-image"
                            ref={ref}
                            onClick={open}
                          >
                            <Image
                              width={100}
                              height={100}
                              src={product?.img}
                              alt="shop single product for job board"
                            />
                            <span className="icon flaticon-magnifying-glass"></span>
                          </div>
                        )}
                      </Item>
                    </figure>
                  </Gallery>
                </div>
                {/* End img-column */}

                <div className="info-column col-md-6 col-sm-12">
                  <div className="inner-column">
                    <h4 className="product-name">
                      {product?.title} - {product?.description}
                    </h4>
                    <div className="text">
                    {product?.details}
                    </div>
                    {/* {isLoggedIn ? (
                      <div className="item-price">
                        ${product?.price}
                        <del>${product?.oldPrice}</del>
                      </div>
                    ) : "To see price details, please sign in."} */}

                    <div className="other-options">
                      <div className="item-quantity">
                        <input
                          type="number"
                          className="qty"
                          name="qty"
                          defaultValue={1}
                          min={1}
                          onChange={(e) => qtyHandler(e.target.value)}
                        />
                        {/* <span className="in-stock">
                          {product?.inStock} Available now
                        </span> */}
                      </div>
                      {/* End item-quantity */}

                      <div className="btn-box">
                        <button
                          onClick={addToCart}
                          type="button"
                          className="theme-btn btn-style-one"
                        >
                          <span className="flaticon-shopping-bag"></span> Add to Cart
                        </button>
                        <button
                          type="button"
                          className="theme-btn btn-style-three bookmark-btn"
                        >
                          <span className="flaticon-bookmark"></span>
                        </button>
                      </div>
                      {/* End add-to-cart-box */}
                    </div>
                    {/* End others-options */}

                    <ul className="product-meta">
                      {/* <li>
                        <span>Sku:</span> RTA-0058
                      </li> */}
                      <li>
                        <span>Category:</span> {product?.category}
                      </li>
                      {/* <li>
                        <span>Tags:</span> Business / Seo
                      </li> */}
                    </ul>
                    {/* End product-meta */}
                  </div>
                  {/* End inner-column */}
                </div>
                {/* End info-column */}
              </div>
              {/* End .row */}
            </div>
            {/*  <!--End Basic Details--> */}

            {/*  <!--Start Product Info Tabs--> */}
            {/* <ProductInfoTabs /> */}
            {/*  <!--End Product Info Tabs--> */}
          </div>
          {/* <!-- End Product Detail --> */}
        </div>
      </section>
      {/* <!-- End Shop Single --> */}

       {/* Related Product Tab */}
       <section className="related-products">
        <div className="auto-container">
        <h3>Related Services</h3>
          <div className="related-products-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
            {relatedProducts.map((item) => (
              <Link key={item.id} href={`/shop/shop-single/${item.id}`} passHref>
                <div className="related-product-item" style={{ marginBottom: '20px', cursor: 'pointer' }}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={50}
                    height={50}
                  />
                  <p>{item.title}</p>
                  <button
                    onClick={() => addToCart(item.id)}
                    className="theme-btn btn-style-one"
                  >
                    <span className="flaticon-shopping-bag"></span> Add to Cart
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* End Related Product Tab */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default dynamic(() => Promise.resolve(ShopSingleDyanmic), {
  ssr: false,
});
