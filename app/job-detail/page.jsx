import JobDetails from "@/components/home/JobDetails";

import dynamic from "next/dynamic";


export const metadata = {
    title: "Jobs Detail | Future Fit International - Job Portal Platform",
  description: "Future Fit International - Job Portal Platform",
};

const index = () => {
    return (
        <>
            <JobDetails />
        </>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });