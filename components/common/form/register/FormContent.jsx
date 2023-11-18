const FormContent = () => {
  return (
    <form method="post" action="add-parcel.html">
      <div className="form-group">
        <label>Full Name</label>
        <input type="text" name="username" placeholder="Full Name" required />
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
          name="confirmPassword"
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

export default FormContent;
