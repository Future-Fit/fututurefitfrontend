import dynamic from "next/dynamic";
import Packages from "@/components/dashboard-pages/jobseeker-dashboard/packages";

export const metadata = {
  title: "Packages || Future Fit International - Job Portal Platform",
  description: "Future Fit International - Job Portal Platform",
};

const index = () => {
  return (
    <>
      <Packages />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
