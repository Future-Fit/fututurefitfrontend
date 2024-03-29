import dynamic from "next/dynamic";
import DashboardHome from "@/components/dashboard-pages/jobseeker-dashboard/dashboard";

export const metadata = {
  title: "Job Seeker Dashboard | Future Fit International",
  description: "Future Fit International",
};

const index = () => {
  return (
    <>
      <DashboardHome />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
