import dynamic from "next/dynamic";

import BusPortal from "@/components/pages-menu/BusPortal";

export const metadata = {
  title: 'Login | Future Fit International - Business Portal',
  description:
    'Future Fit International - Business Portal',
  
}

const index = () => {
  return (
    <>
      <BusPortal />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

