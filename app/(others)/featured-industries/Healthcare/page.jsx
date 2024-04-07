import dynamic from "next/dynamic";

import Healthcare from "@/components/pages-menu/featured-industries/Healthcare";

export const metadata = {
  title: 'About | Future Fit International Job Portal',
  description:
    'Future Fit International Job Portal',
  
}

const index = () => {
  return (
    <>
      <Healthcare />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
