import dynamic from "next/dynamic";
import ShopList from "@/components/shop/shop-list";

export const metadata = {
  title: "Shop List || Future Fit International - Job Portal Platform",
  description: "Future Fit International - Job Portal Platform",
};

const index = () => {
  return (
    <>
      <ShopList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
