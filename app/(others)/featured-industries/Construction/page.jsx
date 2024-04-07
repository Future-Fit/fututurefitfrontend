import dynamic from "next/dynamic";

import Construction from "@/components/pages-menu/featured-industries/Construction";

export const metadata = {
  title: 'About | Future Fit International Job Portal',
  description:
    'Future Fit International Job Portal',
  
}

const index = () => {
  return (
    <>
      <Construction />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
