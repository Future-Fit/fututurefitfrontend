import dynamic from "next/dynamic";

import Hospitality from "@/components/pages-menu/featured-industries/Hospitality";

export const metadata = {
  title: 'About | Future Fit International Job Portal',
  description:
    'Future Fit International Job Portal',
  
}

const index = () => {
  return (
    <>
      <Hospitality />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
