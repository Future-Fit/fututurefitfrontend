import dynamic from "next/dynamic";
import CompanyProfile from "@/components/dashboard-pages/employers-dashboard/company-profile";

export const metadata = {
  title: "Company Profile || Future Fit International - Job Portal Platform",
  description: "Future Fit International - Job Portal Platform",
};

const index = () => {
  return (
    <>
      <CompanyProfile />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
