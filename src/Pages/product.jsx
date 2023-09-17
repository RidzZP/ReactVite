import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    img: "https://picsum.photos/200",
    title: "Sepatu",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    img: "https://picsum.photos/200",
    title: "Sepatu 2",
    description: "Lorem ipsum dolor sit amet 2",
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <div>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10 gap-4">
        {email}
        <Button
          variant="btn-error"
          title="Logout"
          onClick={handleLogout}
        ></Button>
      </div>
      <div className="flex justify-center py-5 gap-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.img} />
            <CardProduct.Body title={product.title}>
              {product.description}
            </CardProduct.Body>
          </CardProduct>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
