import { useEffect, useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    img: "https://picsum.photos/200",
    title: "Sepatu",
    price: 100000,
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    img: "https://picsum.photos/200",
    title: "Sepatu 2",
    price: 200000,
    description: "Lorem ipsum dolor sit amet 2",
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
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
      <div className="grid grid-cols-3">
        <div className="col-span-2 flex">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.img} />
              <CardProduct.Body
                title={product.title}
                price={product.price}
                id={product.id}
                handleCart={handleCart}
              >
                {product.description}
              </CardProduct.Body>
            </CardProduct>
          ))}
        </div>
        <div>
          <p className="text-2xl font-bold text-blue-600 ml-5 mb-2">CART</p>
          <table className="text-left table-auto border-separate border-spacing-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                console.log("item:", item);
                console.log("product:", product);
                return (
                  <tr key={item.id}>
                    <td>{product ? product.title : "Product not found"}</td>
                    <td>
                      Rp
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp
                      {(product.price * item.qty).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={3}>Price</td>
                <td>
                  Rp
                  {totalPrice.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "IDR",
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
