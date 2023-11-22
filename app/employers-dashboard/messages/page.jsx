import dynamic from "next/dynamic";
import Messages from "@/components/dashboard-pages/employers-dashboard/messages";

export const metadata = {
  title: "Messages || Future Fit International - Job Portal Platform",
  description: "Future Fit International - Job Portal Platform",
};

const index = () => {
  return (
    <>
      <Messages />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
