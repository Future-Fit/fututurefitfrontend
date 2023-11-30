'use client'

import { useRouter } from "next/navigation";

const SearchForm3 = () => {
    const router = useRouter()
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onClick={handleSubmit}>
      <div className="row">
        {/* <!-- Form Group --> */}
        <div className="form-group col-lg-4 col-md-12 col-sm-12">
          <span className="icon flaticon-search-1"></span>
          <input
            type="text"
            name="field_name"
            placeholder="Search by Keyword, Company, Job Title, etc."
          />
        </div>

        {/* <!-- Form Group --> */}
        <div className="form-group col-lg-3 col-md-12 col-sm-12 location">
          <span className="icon flaticon-map-locator"></span>
          <input type="text" name="field_name" placeholder="Filter by City/Country" />
        </div>

        {/* <!-- Form Group --> */}
        <div className="form-group col-lg-3 col-md-12 col-sm-12 category">
          <span className="icon flaticon-briefcase"></span>
          <select className="chosen-single form-select">
            <option defaultValue="">All Categories</option>
            <option defaultValue="44">Jobs/Careers</option>
            <option defaultValue="106">Businesses</option>
            <option defaultValue="46">Education/Universities</option>
            <option defaultValue="48">Courses/Training</option>
            <option defaultValue="47">Travel/Visa</option>
            <option defaultValue="45">Other</option>
            {/* <option defaultValue="105">Marketing</option> */}
            {/* <option value="107">Project Management</option> */}
          </select>
        </div>

        {/* <!-- Form Group --> */}
        <div className="form-group col-lg-2 col-md-12 col-sm-12 text-right d-flex align-items-center justify-content-center">
          <button
            type="submit"
            className="theme-btn btn-style-one"
            onClick={() => router.push("/job-list-v6")}
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm3;
