import "./detailPage.scss";

const DetailPage = ({ listProducts }) => {
  const getStatus = () => {
    return listProducts.isAvailable ? "In Stock" : "Out of Stock";
  };
  return (
    <body>
      <main>
        <div class="card">
          <div class="card__title">
            <div class="icon">
              <a href="#">
                <i class="fa fa-arrow-left"></i>
              </a>
            </div>
            <h3>Products Details</h3>
          </div>
          <div class="card__body">
            <div class="half">
              <div class="featured_text">
                <h1>{listProducts.name}</h1>
                <p class="sub">{listProducts.category}</p>
                <p class="price">
                  {" "}
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(listProducts.price)}
                </p>
              </div>
              <div class="image">
                <img src={listProducts.image} alt={listProducts.name} />
              </div>
              <span class="stock">
                <span>{getStatus()}</span>
              </span>
            </div>
            <div class="half">
              <div class="description">
                <p>
                </p>
              </div>

              <div class="reviews">
                <span></span>
              </div>
            </div>
          </div>
          <div class="card__footer">
            <div class="recommend">
              <h3>Stock: {listProducts.stock}</h3>
              <h3>Discount Quantity : {listProducts.discQty}</h3>
              <p>Discound Percent : {listProducts.discPercent}%</p>
            </div>
            <div class="action">
              <button type="button">Update</button>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
};

export default DetailPage;
