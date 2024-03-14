import Map from "../../../Map";

const ContactInfoBox = () => {
  return (
    <form className="default-form">
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Country</label>
          <select className="chosen-single form-select" required>
            <option disabled>Select Country</option>
            <option>Algeria</option>
            <option>Angola</option>
            <option>Benin</option>
            <option>Botswana</option>
            <option>Burkina Faso</option>
            <option>Burundi</option>
            <option>Cabo Verde</option>
            <option>Cameroon</option>
            <option>Central African Republic</option>
            <option>Chad</option>
            <option>Comoros</option>
            <option>Congo, Democratic Republic of the</option>
            <option>Cote d'Ivoire</option>
            <option>Djibouti</option>
            <option>Egypt</option>
            <option>Equatorial Guinea</option>
            <option>Eritrea</option>
            <option>Eswatini</option>
            <option>Ethiopia</option>
            <option>Gabon</option>
            <option>Gambia</option>
            <option>Ghana</option>
            <option>Guinea</option>
            <option>Guinea-Bissau</option>
            <option>Kenya</option>
            <option>Lesotho</option>
            <option>Liberia</option>
            <option>Libya</option>
            <option>Madagascar</option>
            <option>Malawi</option>
            <option>Mali</option>
            <option>Mauritania</option>
            <option>Mauritius</option>
            <option>Morocco</option>
            <option>Mozambique</option>
            <option>Namibia</option>
            <option>Niger</option>
            <option>Nigeria</option>
            <option>Rwanda</option>
            <option>Sao Tome and Principe</option>
            <option>Senegal</option>
            <option>Seychelles</option>
            <option>Sierra Leone</option>
            <option>Somalia</option>
            <option>South Africa</option>
            <option>South Sudan</option>
            <option>Sudan</option>
            <option>Tanzania</option>
            <option>Togo</option>
            <option>Tunisia</option>
            <option>Uganda</option>
            <option>Zambia</option>
            <option>Zimbabwe</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>City</label>
          <input
            type="text"
            name="name"
            placeholder=""
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Full Address</label>
          <input
            type="text"
            name="name"
            placeholder="Include Street Name and Postal Code"
            required
          />
        </div>

        {/* <!-- Input --> */}
        {/* <div className="form-group col-lg-6 col-md-12">
          <label>Find On Map</label>
          <input
            type="text"
            name="name"
            placeholder=""
            required
          />
        </div> */}

        {/* <!-- Input --> */}
        {/* <div className="form-group col-lg-3 col-md-12">
          <label>Latitude</label>
          <input type="text" name="name" placeholder="Melbourne" required />
        </div> */}

        {/* <!-- Input --> */}
        {/* <div className="form-group col-lg-3 col-md-12">
          <label>Longitude</label>
          <input type="text" name="name" placeholder="Melbourne" required />
        </div> */}

        {/* <!-- Input --> */}
        {/* <div className="form-group col-lg-12 col-md-12">
          <button className="theme-btn btn-style-three">Search Location</button>
        </div> */}

        {/* <div className="form-group col-lg-12 col-md-12">
          <div className="map-outer">
            <div style={{ height: "420px", width: "100%" }}>
              <Map />
            </div>
          </div>
        </div> */}
        {/* End MapBox */}

        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactInfoBox;
