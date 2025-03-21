import dynamic from "next/dynamic";
import AppliedJobs from "@/components/dashboard-pages/candidates-dashboard/applied-jobs";

export const metadata = {
  title: "Applied Jobs || Future Fit International - Job Portal Platform",
  description: "Future Fit International - Job Portal Platform",
};

const index = () => {
  return (
    <>
      <AppliedJobs />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
