import React from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
//import FavoriteIcon from '@mui/icons-material/Favorite';
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { addToFavs } from "../../redux/favsReducer";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("image");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className="product">
      {error 
      ? (
        "Something went wrong"
      ) : loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  data?.attributes?.image
                }
                alt=""
                onClick={(e) => setSelectedImg("image")}
              />
              <img
                src={
                  data?.attributes?.image2
                }
                alt=""
                onClick={(e) => setSelectedImg("image2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  data?.attributes[selectedImg]
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">${data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.image,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon 
                  onClick={() =>
                    dispatch(
                      addToFavs({
                        id: data.id,
                        title: data.attributes.title,
                        desc: data.attributes.desc,
                        price: data.attributes.price,
                        img: data.attributes.image,
                      })
                    )} /> ADD TO WISH LIST
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
