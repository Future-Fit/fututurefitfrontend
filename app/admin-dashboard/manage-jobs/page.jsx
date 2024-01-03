import dynamic from "next/dynamic";
import ManageJobs from "@/components/dashboard-pages/admin-dashboard/manage-jobs";

export const metadata = {
  title: "Manage Jobs || Future Fit International - Job Portal Platform",
  description: "Future Fit International - Job Portal Platform",
};

const index = () => {
  return (
    <>
      <ManageJobs />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
