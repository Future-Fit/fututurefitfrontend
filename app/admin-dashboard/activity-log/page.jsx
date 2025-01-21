import dynamic from "next/dynamic";
import ActivityLog from "@/components/dashboard-pages/admin-dashboard/activity-log";

export const metadata = {
  title: "All Applicants || Future Fit International - Job Portal Platform",
  description: "Future Fit International - Job Portal Platform",
};

const index = () => {
  return (
    <>
      <ActivityLog />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
