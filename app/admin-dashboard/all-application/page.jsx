import dynamic from "next/dynamic";
import AllApplication from "@/components/dashboard-pages/admin-dashboard/all-application";

export const metadata = {
  title: "All Applicants || Future Fit International - Job Portal Platform",
  description: "Future Fit International - Job Portal Platform",
};

const index = () => {
  return (
    <>
      <AllApplication />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });