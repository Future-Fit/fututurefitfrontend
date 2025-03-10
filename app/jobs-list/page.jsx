import JobsList from "@/components/home/JobsList";
import dynamic from "next/dynamic";


export const metadata = {
    title: "List of Jobs | Future Fit International - Job Portal Platform",
  description: "Future Fit International - Job Portal Platform",
};

const index = () => {
    return (
        <>
            <JobsList />
        </>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });