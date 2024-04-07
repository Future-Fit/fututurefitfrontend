import dynamic from "next/dynamic";

import Manufacturing from "@/components/pages-menu/featured-industries/Manufacturing";

export const metadata = {
  title: 'About | Future Fit International Job Portal',
  description:
    'Future Fit International Job Portal',
  
}

const index = () => {
  return (
    <>
      <Manufacturing />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
