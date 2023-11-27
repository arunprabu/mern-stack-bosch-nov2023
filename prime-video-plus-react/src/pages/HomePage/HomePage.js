const HomePage = () => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold text-body-emphasis">
        Welcome to Prime Video Plus App!
      </h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          convallis ante a blandit aliquet. Nulla justo urna, faucibus in
          hendrerit sed, facilisis luctus tellus
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
            Browse Prime Video
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4"
          >
            Manage Users
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
