import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import AllApplicants from "../../../components/dashboard-pages/employers-dashboard/all-applicants";

export const metadata = {
  title: 'All Applicants || Future Fit International - Job Portal Platform',
  description:
    'Future Fit International - Job Portal Platform',
  
}



const index = () => {
  return (
    <>

      <AllApplicants />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
