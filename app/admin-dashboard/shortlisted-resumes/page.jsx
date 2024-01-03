import dynamic from "next/dynamic";
import ShortlistedResumes from "@/components/dashboard-pages/admin-dashboard/shortlisted-resumes";

export const metadata = {
  title: "Shortlisted Resumes || Future Fit International - Job Portal Platform",
  description: "Future Fit International - Job Portal Platform",
};

const index = () => {
  return (
    <>
      <ShortlistedResumes />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
