import dynamic from "next/dynamic";

import VisitCanada from "@/components/pages-menu/canada-visit";

export const metadata = {
  title: 'Visit Canada || Future Fit International',
  description:
    'Future Fit International Job and Education Portal',
  
}



const index = () => {
  return (
    <>
      
      <VisitCanada />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
