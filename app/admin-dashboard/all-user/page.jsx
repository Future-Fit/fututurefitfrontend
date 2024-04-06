import dynamic from "next/dynamic";
import AllUser from "@/components/dashboard-pages/admin-dashboard/all-users";

export const metadata = {
  title: "All Applicants || Future Fit International - Job Portal Platform",
  description: "Future Fit International - Job Portal Platform",
};

const index = () => {
  return (
    <>
      <AllUser />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
