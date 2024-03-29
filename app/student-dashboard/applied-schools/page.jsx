import dynamic from "next/dynamic";
import AppliedSchools from "@/components/dashboard-pages/student-dashboard/applied-schools";

export const metadata = {
  title: "Applied Jobs || Future Fit International - Job Portal Platform",
  description: "Future Fit International - Job Portal Platform",
};

const index = () => {
  return (
    <>
      <AppliedSchools />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
