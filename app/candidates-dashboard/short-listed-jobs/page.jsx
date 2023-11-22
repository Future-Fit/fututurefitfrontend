import dynamic from "next/dynamic";
import ShortListedJobs from "@/components/dashboard-pages/candidates-dashboard/short-listed-jobs";

export const metadata = {
  title: "Short ListedJobs || Future Fit International - Job Portal Platform",
  description: "Future Fit International - Job Portal Platform",
};

const index = () => {
  return (
    <>
      <ShortListedJobs />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
