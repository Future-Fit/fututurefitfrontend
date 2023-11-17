import dynamic from "next/dynamic";
import JobList from "@/components/job-listing-pages/job-list-v6";

export const metadata = {
  title: "Jobs | Future Fit International Job Portal",
  description: "Future Fit International Job Portal",
};

const index = () => {
  return (
    <>
      <JobList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
