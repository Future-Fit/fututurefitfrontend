import dynamic from "next/dynamic";

import Aviation from "@/components/pages-menu/featured-industries/Aviation";

export const metadata = {
  title: 'About | Future Fit International Job Portal',
  description:
    'Future Fit International Job Portal',
  
}

const index = () => {
  return (
    <>
      <Aviation/>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
