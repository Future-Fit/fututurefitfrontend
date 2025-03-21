import dynamic from "next/dynamic";

import Contact from "@/components/pages-menu/contact";

export const metadata = {
  title: 'Contact | Future Fit International Job Portal',
  description:
    'Future Fit International Job Portal',
  
}

const index = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
