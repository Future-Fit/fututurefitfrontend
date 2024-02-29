import dynamic from "next/dynamic";
import JobAlerts from "@/components/dashboard-pages/student-dashboard/job-alerts";

export const metadata = {
  title: "My Job Alerts || Future Fit International - Job Portal Platform",
  description: "Future Fit International - Job Portal Platform",
};

const index = () => {
  return (
    <>
      <JobAlerts />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
