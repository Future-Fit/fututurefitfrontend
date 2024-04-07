import dynamic from "next/dynamic";

import WorkCanada from "@/components/pages-menu/canada-work";

export const metadata = {
  title: 'Work in Canada || Future Fit International',
  description:
    'Future Fit International Job and Education Portal',
  
}



const index = () => {
  return (
    <>
      
      <WorkCanada />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
