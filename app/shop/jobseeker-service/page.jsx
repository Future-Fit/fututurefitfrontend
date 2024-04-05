import dynamic from "next/dynamic";
import JobSeekerService from "@/components/shop/jobseeker-service";

export const metadata = {
  title: "Shop List || Future Fit International - Job Portal Platform",
  description: "Future Fit International - Job Portal Platform",
};

const index = () => {
  return (
    <>
      <JobSeekerService />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
