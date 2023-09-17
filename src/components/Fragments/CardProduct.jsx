const CardProduct = (props) => {
  const { children } = props;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">{children}</div>
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
  const { children, title } = props;
  return (
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{children}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;

export default CardProduct;
