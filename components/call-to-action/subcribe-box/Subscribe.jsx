

'use client'

const Subscribe = ({ btnStyle = "" }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onClick={handleSubmit}>
      <div className="form-group">
        <div className="response"></div>
      </div>
      <div className="form-group">
        <input
          type="text"
          name="search"
          className="email"
          placeholder="search anything"
          required
        />
        <button
          type="button"
          id="subscribe-newslatters"
          className={`theme-btn ${btnStyle}`}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Subscribe;
