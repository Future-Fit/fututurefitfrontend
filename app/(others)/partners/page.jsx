import dynamic from "next/dynamic";

import Partners from "@/components/pages-menu/partners";

export const metadata = {
  title: 'Partners | Future Fit International Job Portal',
  description:
    'Future Fit International Job Portal',
  
}

const index = () => {
  return (
    <>
      <Partners />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
