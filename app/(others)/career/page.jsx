import dynamic from "next/dynamic";

import Career from "@/components/pages-menu/career";

export const metadata = {
  title: 'Career | Future Fit International Job Portal',
  description:
    'Future Fit International Job Portal',
  
}

const index = () => {
  return (
    <>
      <Career />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
