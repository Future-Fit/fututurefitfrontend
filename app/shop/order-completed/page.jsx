import dynamic from "next/dynamic";
import OrderCompleted from "@/components/shop/order-completed";

export const metadata = {
  title: "Order Completed || Future Fit International - Job Portal Platform",
  description: "Future Fit International - Job Portal Platform",
};

const index = () => {
  return (
    <>
      <OrderCompleted />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
