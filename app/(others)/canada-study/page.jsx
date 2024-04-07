import dynamic from "next/dynamic";

import StudyCanada from "@/components/pages-menu/canada-study";

export const metadata = {
  title: 'Study in Canada || Future Fit International',
  description:
    'Future Fit International Job and Education Portal',
  
}



const index = () => {
  return (
    <>
      
      <StudyCanada />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
