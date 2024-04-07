import dynamic from "next/dynamic";

import Trade from "@/components/pages-menu/featured-industries/Trade";

export const metadata = {
  title: 'About | Future Fit International Job Portal',
  description:
    'Future Fit International Job Portal',
  
}

const index = () => {
  return (
    <>
      <Trade />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
