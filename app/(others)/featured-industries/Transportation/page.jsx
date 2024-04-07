import dynamic from "next/dynamic";

import Transportation from "@/components/pages-menu/featured-industries/Transportation";

export const metadata = {
  title: 'About | Future Fit International Job Portal',
  description:
    'Future Fit International Job Portal',
  
}

const index = () => {
  return (
    <>
      <Transportation />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
