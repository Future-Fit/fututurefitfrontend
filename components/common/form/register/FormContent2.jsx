const FormContent2 = () => {
  return (
    <form method="post" action="add-parcel.html">
       <div className="form-group">
        <label>Company Name</label>
        <input type="text" name="companyName" placeholder="Company Name" required />
      </div>
      <div className="form-group">
        <label>Contact Name</label>
        <input type="text" name="contactName" placeholder="Contact Name" required />
      </div>
      <div className="form-group">
        <label>Phone Number</label>
        <input type="text" name="phoneNumber" placeholder="Phone Number" required />
      </div>
      <div className="form-group">
        <label>Email Address</label>
        <input type="email" name="username" placeholder="Username" required />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          id="password-field"
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>
      <div className="form-group">
        <label>Confirm Password</label>
        <input
          id="password-field"
          type="Password"
          name="password"
          placeholder="Confirm Password"
        />
      </div>

      <div className="form-group">
        <button className="theme-btn btn-style-one" type="submit">
          Register
        </button>
      </div>
    </form>
  );
};

export default FormContent2;
