import dynamic from "next/dynamic";

import Engineering from "@/components/pages-menu/featured-industries/Engineering";

export const metadata = {
  title: 'About | Future Fit International Job Portal',
  description:
    'Future Fit International Job Portal',
  
}

const index = () => {
  return (
    <>
      <Engineering />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
