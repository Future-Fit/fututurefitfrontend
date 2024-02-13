import dynamic from "next/dynamic";

import Travelvisa from "@/components/pages-menu/travel-visa";

export const metadata = {
  title: 'Travel and Other | Future Fit International Job Portal',
  description:
    'Future Fit International Job Portal',
  
}

const index = () => {
  return (
    <>
      <Travelvisa />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
