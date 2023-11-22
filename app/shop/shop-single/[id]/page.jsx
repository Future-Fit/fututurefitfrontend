import ShopDetails from "@/components/shop/shop-single/ShopDetails";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Shop-details || Future Fit International - Job Portal Platform",
  description: "Future Fit International - Job Portal Platform",
};

const ShopSingleDyanmic = ({ params }) => {
  return (
    <>
      <ShopDetails id={params.id} />
    </>
  );
};

export default dynamic(() => Promise.resolve(ShopSingleDyanmic), {
  ssr: false,
});
