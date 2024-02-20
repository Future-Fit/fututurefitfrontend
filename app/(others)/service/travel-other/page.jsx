import dynamic from "next/dynamic";

import Travelother from "@/components/pages-menu/travel-other";

export const metadata = {
  title: 'Travel and Other | Future Fit International Job Portal',
  description:
    'Future Fit International Job Portal',
  
}

const index = () => {
  return (
    <>
      <Travelother />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
