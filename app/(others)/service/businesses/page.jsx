import dynamic from "next/dynamic";

import Business from "@/components/pages-menu/businesses";

export const metadata = {
  title: 'Business | Future Fit International Job Portal',
  description:
    'Future Fit International Job Portal',
  
}

const index = () => {
  return (
    <>
      <Business />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
