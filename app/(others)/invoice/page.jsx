import dynamic from "next/dynamic";

import Invoice from "@/components/pages-menu/invoice";

export const metadata = {
  title: 'Invoice || Future Fit International - Job Portal Platform',
  description:
    'Future Fit International - Job Portal Platform',
  
}



const index = () => {
  return (
    <>
      
      <Invoice />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
