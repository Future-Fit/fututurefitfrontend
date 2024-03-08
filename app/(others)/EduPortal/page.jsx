import dynamic from "next/dynamic";

import EduPortal from "@/components/pages-menu/EduPortal";

export const metadata = {
  title: 'Login | Future Fit International - Academic Institutions Portal',
  description:
    'Future Fit International - Academic Institutions Portal',
  
}

const index = () => {
  return (
    <>
      <EduPortal />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

