import dynamic from "next/dynamic";
import SearchResult from "@/components/pages-menu/search-result";

export const metadata = {
  title: 'Search Result | Future Fit International Job Portal',
  description:
    'Future Fit International Job Portal',
  
}



const index = () => {
  return (
    <>
      
      <SearchResult />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
