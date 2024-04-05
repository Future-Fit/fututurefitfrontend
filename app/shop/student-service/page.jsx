import dynamic from "next/dynamic";
import StudentList from "@/components/shop/student-service";

export const metadata = {
  title: "Shop List || Future Fit International - Job Portal Platform",
  description: "Future Fit International - Job Portal Platform",
};

const index = () => {
  return (
    <>
      <StudentList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
