import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="product-card" onClick={showDetail}>
      <div className="img-box">
        <img className="img" src={item?.img} alt="img" />
        <span className={`${item.new === true ? "new" : ""}`}>
          {item.new === true ? "신제품" : ""}
        </span>
      </div>
      <h4 className="choice">
        {item.choice === true ? "Conscious choice" : ""}
      </h4>
      <h3 className="title">{item?.title}</h3>
      <p className="price">
        <span>₩</span>
        {item?.price}
      </p>
    </div>
  );
};

export default ProductCard;
