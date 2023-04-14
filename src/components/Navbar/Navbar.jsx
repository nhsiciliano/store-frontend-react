import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss"
import Cart from "../Cart/Cart";
import Favorites from "../Favorites/Favorites";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const [open, setOpen] = useState(false)
  const [favs, setFavs] = useState(false)
  const products = useSelector((state) => state.cart.products);
  const favorites = useSelector((state) => state.favs.favorites);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="hamb" onClick={() => setMenu(!menu)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className="hambmenu" onClick={() => setMenu(false)} style={{right: menu ? "0px" : "-650vw"}}>
          <li>
            <Link className ="link" to="/products/1">Women</Link>
          </li>
          <li>
            <Link className ="link" to="/products/2">Men</Link>
          </li>
          <li>
            <Link className ="link" to="/products/3">Children</Link>
          </li>
        </ul>
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className ="link" to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/3">Children</Link>
          </div>
        </div>
        <div className="center">
          <Link className ="link" to="/">NHSTORE</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className ="link" to="/">Home</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/4">NewSeason</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/5">Accessories</Link>
          </div>
          <div className="icons">
            <Link className="link" to="/results">
              <SearchIcon />
            </Link>
            <div className="cartIcon" onClick={()=>setFavs(!favs)}>
              {
                favorites.length >= 1
                ? <FavoriteOutlinedIcon />
                : <FavoriteBorderOutlinedIcon />
              }
              <span>{favorites.length}</span>
            </div>
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {favs && <Favorites />}
      {open && <Cart/>}
    </div>
  );
};

export default Navbar;
