import Image from "next/image";
import Link from "next/link";

const SearchSection = () => {
  return (
    <div className="row" style={{backgroundColor:"#3B578E"}}>
      <div className="image-column col-lg-6 col-md-12 col-sm-12">
        <div className="bg-shape"></div>
        <figure className="image" data-aos="fade-right">
          <Image
            width={477}
            height={556}
            src="/images/resource/banner-img-3.png"
            alt="About"
          />
        </figure>
      </div>
      {/* <!-- Image Column --> */}

      <div className="content-column col-lg-6 col-md-12 col-sm-12">
        <div className="inner-column" data-aos="fade-left">
          <div className="sec-title">
            <h2 style={{color:'white'}}>
              About US
            </h2>
            <div className="text" style={{textAlign:"justify", color:'white'}}>
            Details About FFI
            </div>
          </div>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default SearchSection;
