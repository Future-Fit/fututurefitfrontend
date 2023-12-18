import dynamic from "next/dynamic";

import Students from "@/components/pages-menu/students";

export const metadata = {
  title: 'Students | Future Fit International Job Portal',
  description:
    'Future Fit International Job Portal',
  
}

const index = () => {
  return (
    <>
      <Students />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
