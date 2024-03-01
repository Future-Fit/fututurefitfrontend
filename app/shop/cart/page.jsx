import dynamic from "next/dynamic";
import Cart from "@/components/shop/cart";

export const metadata = {
  title: "Cart || Future Fit International - Job Portal Platform",
  description: "Future Fit International - Job Portal Platform",
};

const index = () => {
  return (
    <>
      <Cart />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
