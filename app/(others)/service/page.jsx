import dynamic from "next/dynamic";

import Service from "@/components/pages-menu/service";

export const metadata = {
  title: 'Service | Future Fit International Job Portal',
  description:
    'Future Fit International Job Portal',
  
}

const index = () => {
  return (
    <>
      <Service />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
