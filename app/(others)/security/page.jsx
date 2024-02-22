import dynamic from "next/dynamic";

import Security from "@/components/pages-menu/security";

export const metadata = {
  title: 'Security & Privacy || Future Fit International - Job & Education Portal Platform',
  description:
    'Future Fit International - Job & Education Portal Platform',
  
}



const index = () => {
  return (
    <>
      
      <Security />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
