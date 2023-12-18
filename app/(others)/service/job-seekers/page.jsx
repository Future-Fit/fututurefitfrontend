import dynamic from "next/dynamic";

import JobSeekers from "@/components/pages-menu/job-seekers";

export const metadata = {
  title: 'Job Seekers | Future Fit International Job Portal',
  description:
    'Future Fit International Job Portal',
  
}

const index = () => {
  return (
    <>
      <JobSeekers />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
