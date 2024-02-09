import dynamic from "next/dynamic";

import RegisterForm from "@/components/pages-menu/register";

export const metadata = {
  title: 'Register || Future Fit International Job Portal',
  description:
    'Future Fit International Job Portal',
  
}



const index = () => {
  return (
    <>
      
      <RegisterForm />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
