import dynamic from "next/dynamic";

import University from "@/components/pages-menu/universities-colleges";

export const metadata = {
  title: 'University and Colleges | Future Fit International Job Portal',
  description:
    'Future Fit International Job Portal',
  
}

const index = () => {
  return (
    <>
      <University />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
