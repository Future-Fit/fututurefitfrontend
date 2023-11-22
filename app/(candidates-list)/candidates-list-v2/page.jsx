import dynamic from "next/dynamic";

import CandidatesList from "@/components/candidates-listing-pages/candidates-list-v2";

export const metadata = {
  title: 'Candidates List V2 || Future Fit International - Job Portal Platform',
  description:
    'Future Fit International - Job Portal Platform',
  
}


const index = () => {
  return (
    <>
     
      <CandidatesList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
