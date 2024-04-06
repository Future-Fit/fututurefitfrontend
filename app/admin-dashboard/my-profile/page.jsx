import dynamic from "next/dynamic";
import MyProfile from "@/components/dashboard-pages/admin-dashboard/my-profile";

export const metadata = {
  title: "Company Profile || Future Fit International - Job Portal Platform",
  description: "Future Fit International - Job Portal Platform",
};

const index = () => {
  return (
    <>
      <MyProfile />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
