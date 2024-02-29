import dynamic from "next/dynamic";
import CvManager from "@/components/dashboard-pages/student-dashboard/cv-manager";

export const metadata = {
  title: "CV Manager || Future Fit International - Job Portal Platform",
  description: "Future Fit International - Job Portal Platform",
};

const index = () => {
  return (
    <>
      <CvManager />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
