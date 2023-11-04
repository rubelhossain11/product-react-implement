import { useState } from "react";
import "./Product.css";
const Product = ({ product }) => {
  const { brand, category, discountPercentage, images, price, stock } = product;
  console.log(product);

  const [buyPurchases, setBuyPurchases] = useState(false);

  const handleBuyPurchases = () => {
    setBuyPurchases(!buyPurchases);
  };

  // const totalPrice = (taka) => {
  //   const presentPrice = { product.price };
  //   const discount = { product.discountPercentage };
  //   const paidTotal = presentPrice - discount;
  //   return paidTotal;
  // };

  // const paid = totalPrice(product);
  // console.log(paid);
  return (
    <div className="box">
      <h3>Brand : {brand}</h3>
      <p>{category}</p>
      <img src={images[0]} alt="" />
      <p>Price : {price}$</p>
      <p>Stock : {stock}</p>
      <p>DiscountPercentage : {discountPercentage}</p>
      <button onClick={handleBuyPurchases}>
        {buyPurchases ? "Selled" : "Buy Purchases"}
      </button>
      {buyPurchases ? "Congratulations Booked" : "Buy Now"}
      {/* <button onClick={totalPrice}>Paid total</button> */}
    </div>
  );
};

export default Product;
