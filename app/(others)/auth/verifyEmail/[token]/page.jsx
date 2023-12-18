"use client"
import VerifyEmail from '@/components/common/form/login/VerifyEmail';
import { useRouter } from 'next/navigation';


const Index = ({params}) => {
  const router = useRouter();

  // Check if the router is ready before accessing query parameters
  const token = router.query?.token || null;

  console.log("Token from Page:", params.token)

  return (
    <>
      <VerifyEmail token={params.token} />
    </>
  );
};

export default Index;