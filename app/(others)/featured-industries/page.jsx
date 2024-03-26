import dynamic from "next/dynamic";

import FeaturedIndustries from "@/components/pages-menu/featured-industries";

export const metadata = {
  title: 'About | Future Fit International Job Portal',
  description:
    'Future Fit International Job Portal',
  
}

const index = () => {
  return (
    <>
      <FeaturedIndustries />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
