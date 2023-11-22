import dynamic from "next/dynamic";

import Pricing from "@/components/pages-menu/pricing";

export const metadata = {
  title: 'Pricing || Future Fit International - Job Portal Platform',
  description:
    'Future Fit International - Job Portal Platform',
  
}



const index = () => {
  return (
    <>
      
      <Pricing />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
