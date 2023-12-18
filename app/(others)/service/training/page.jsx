import dynamic from "next/dynamic";

import Training from "@/components/pages-menu/training";

export const metadata = {
  title: 'Training | Future Fit International Job Portal',
  description:
    'Future Fit International Job Portal',
  
}

const index = () => {
  return (
    <>
      <Training />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
