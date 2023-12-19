import dynamic from "next/dynamic";

import RegisterForm from "@/components/pages-menu/register";
import Register from "@/components/common/form/register/Register";

export const metadata = {
  title: 'Register || Future Fit International Job Portal',
  description:
    'Future Fit International Job Portal',
  
}



const index = () => {
  return (
    <>
      
      <Register />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
