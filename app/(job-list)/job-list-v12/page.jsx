import dynamic from "next/dynamic";
import JobList from "@/components/job-listing-pages/job-list-v12";

export const metadata = {
  title: "Job List V12 || Future Fit International - Job Portal Platform",
  description: "Future Fit International - Job Portal Platform",
};

const index = () => {
  return (
    <>
      <JobList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
