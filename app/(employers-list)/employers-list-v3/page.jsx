import dynamic from "next/dynamic";
import EmployersList from "@/components/employers-listing-pages/employers-list-v3";

export const metadata = {
  title: "Employers List V3 || Future Fit International - Job Portal Platform",
  description: "Future Fit International - Job Portal Platform",
};

const index = () => {
  return (
    <>
      <EmployersList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
