import dynamic from "next/dynamic";

import BlogList from "@/components/blog-meu-pages/blog-list-v2";

export const metadata = {
  title: 'Blog List V2 || Future Fit International - Job Portal Platform',
  description:
    'Future Fit International - Job Portal Platform',
  
}



const index = () => {
  return (
    <>

      <BlogList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });