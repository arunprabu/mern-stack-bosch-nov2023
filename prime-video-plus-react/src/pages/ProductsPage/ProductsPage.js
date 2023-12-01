const ProductsPage = () => {
  // API Url: https://fakestoreapi.com/products

  return (
    <div className="row">
      <h1>Shop our Products</h1>

      <div className="col-md-3">
        <div className="card">
          <img src="" className="card-img-top" alt="" height="300" />
          <div className="card-body">
            <h5 className="card-title">Bread | Category</h5>
            <p className="card-text">description</p>
            <p className="card-text">price $ 100</p>
            <button type="button" className="btn btn-primary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
