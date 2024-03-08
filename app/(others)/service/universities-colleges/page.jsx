import dynamic from "next/dynamic";

import College from "@/components/pages-menu/universities-colleges";

export const metadata = {
  title: 'University and Colleges | Future Fit International Job Portal',
  description:
    'Future Fit International Job Portal',
  
}

const index = () => {
  return (
    <>
      <College />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
