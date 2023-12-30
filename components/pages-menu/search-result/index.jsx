"use client"
import LoginPopup from "../../common/form/login/LoginPopup";
import MobileMenu from "../../header/MobileMenu";
import DefaulHeader2 from "@/components/header/DefaultHeader";
import FooterDefault from "../../../components/footer/common-footer";
import DashboardCandidatesHeader from "../../header/DashboardCandidatesHeader";
import DashboardHeader from "../../header/DashboardEmployerHeader";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const index = () => {
  const router = useRouter();
  const [searchResults, setSearchResults] = useState([]);

  const [userType, setUserType] = useState();

  useEffect(() => {
    const storedUserType = localStorage.getItem('userType');
    if (storedUserType) {
      setUserType(JSON.parse(storedUserType));
    }
  }, []);

  // Fetch search results based on the query
  useEffect(() => {
    // Check if the query parameter is available
    if (router.isReady) {
      const searchQuery = router.query.query; // Change 'query' to the actual name of your query parameter

      if (searchQuery) {
        const fetchSearchResults = async () => {
          try {
            const response = await axios.get(`https://api.futurefitinternational.com/search?query=${searchQuery}`);
            setSearchResults(response.data);
          } catch (error) {
            console.error('Error fetching search results:', error);
          }
        };

        fetchSearchResults();
      }
    }
  }, [router.isReady, router.query]);

  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <LoginPopup />
      {/* End Login Popup Modal */}

      {userType === 3 && <DashboardHeader />}
      {userType === 4 && <DashboardCandidatesHeader />}
      {userType !== 3 && userType !== 4 && <DefaulHeader2 />}
      {/* <DefaulHeader /> */}
      {/* <!--End Main Header --> */}

      <MobileMenu />

      <section className="search-results-section">
        <div className="container">
          <h2>Search Results</h2>
          <div className="row">
            {searchResults.length > 0 ? (
              searchResults.map((item) => (
                <div className="col-lg-4 col-md-6 col-sm-12" key={item.id}>
                  <div className="job-block">
                    <h4>
                      <Link href={`/job-single-v1/${item.id}`}>
                        {item.jobTitle || item.title}
                      </Link>
                    </h4>
                    {item.location && (
                      <div className="location">
                        <span className="icon flaticon-map-locator"></span>
                        {item.location}
                      </div>
                    )}
                    {/* Additional job details can go here */}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12">
                <p>No results found</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <FooterDefault />
    </>
  );
};

export default index;
