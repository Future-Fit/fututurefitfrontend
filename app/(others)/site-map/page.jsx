import dynamic from "next/dynamic";

import SiteMaps from "@/components/pages-menu/site-map";

export const metadata = {
  title: 'Site Maps || Future Fit International - Job Portal Platform',
  description:
    'Future Fit International - Job Portal Platform',
  
}



const index = () => {
  return (
    <>
      
      <SiteMaps />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
