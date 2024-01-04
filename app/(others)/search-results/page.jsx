// "use client"
import dynamic from "next/dynamic";
import SearchResult from "@/components/pages-menu/search-result";
 
// import { useEffect } from "react";


const index = () => {
  
  
  async function scrapeWebsite(url) {
    try {
      // Make an HTTP request to the website
      const response = await axios.get(url);
  
      // Load the HTML content into Cheerio
      const $ = cheerio.load(response.data);
  
      // Extract data from the current page
      const pageTitle = $('title').text();
      const pageContent = $('body').text();
  
      // Return the URL and extracted data
      const result = { url, data: { pageTitle, pageContent } };
  
      // Find and follow links to subpages
      const subpageLinks = $('a[href^="/"]');
      const subpagePromises = [];
  
      subpageLinks.each((index, element) => {
        const subpageUrl = new URL(element.attribs.href, url).href;
        subpagePromises.push(scrapeWebsite(subpageUrl));
      });
  
      const subpageResults = await Promise.all(subpagePromises);
      result.subpages = subpageResults;
  
      return result;
    } catch (error) {
      throw new Error('Error during scraping:', error);
    }
  }
  
  return (
    <>

      <SearchResult />
      
    

    </>
  );
};

export default index;
