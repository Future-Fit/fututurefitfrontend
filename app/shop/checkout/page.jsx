import dynamic from "next/dynamic";
import Checkout from "@/components/shop/checkout";

export const metadata = {
  title: "Checkout || Future Fit International - Job Portal Platform",
  description: "Future Fit International - Job Portal Platform",
};

const index = () => {
  return (
    <>
      <Checkout />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
