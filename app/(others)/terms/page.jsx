import dynamic from "next/dynamic";

import Terms from "@/components/pages-menu/terms";

export const metadata = {
  title: 'Terms || Future Fit International - Job Portal Platform',
  description:
    'Future Fit International - Job Portal Platform',
  
}



const index = () => {
  return (
    <>
      
      <Terms />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
