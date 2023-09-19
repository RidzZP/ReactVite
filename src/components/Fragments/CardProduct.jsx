const CardProduct = (props) => {
  const { children } = props;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mx-2 my-2">
        {children}
      </div>
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <figure>
      <img src={image} alt="Shoes" className="w-full h-64" />
    </figure>
  );
};

const Body = (props) => {
  const { price, children, title, handleCart, id } = props;
  return (
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{children}</p>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-2xl font-bold italic ">
            Rp
            {price.toLocaleString("id-ID", {
              styles: "currency",
              currency: "IDR",
            })}
          </p>
        </div>
        <div>
          <button className="btn btn-primary" onClick={() => handleCart(id)}>
            Cart
          </button>
        </div>
      </div>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;

export default CardProduct;
