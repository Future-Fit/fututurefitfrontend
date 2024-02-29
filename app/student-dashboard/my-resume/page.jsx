import dynamic from "next/dynamic";
import MyResume from "@/components/dashboard-pages/student-dashboard/my-resume";

export const metadata = {
  title: "My Resume || Future Fit International - Job Portal Platform",
  description: "Future Fit International - Job Portal Platform",
};

const index = () => {
  return (
    <>
      <MyResume />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
