import dynamic from "next/dynamic";
import DashboadHome from "@/components/dashboard-pages/admin-dashboard/dashboard";

export const metadata = {
  title: "Employeers Dashboard | Future Fit International",
  description: "Future Fit International",
};

const index = () => {
  return (
    <>
      <DashboadHome />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
