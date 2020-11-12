import { Search, ShoppingBasket } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import "./Header.css";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  console.log(basket);

  return (
    <div>
      <nav className="header">
        <Link to="/login">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <Search className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <Link to={!user && "/login"} className="header__link">
            <div onClick={login} className="header__option">
              <span className="header__optionLineOne">Hello {user?.email}</span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
            </div>
          </Link>
          <Link to="/checkout" className="header__link">
            <div className="header__option" className="header__optionBasket">
              <ShoppingBasket />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </nav>
      <nav className="subHeader">
        <div className="subHeader__titles">
          <p>All</p>
          <p>Holiday Deals</p>
          <p>Gift Cards</p>
          <p>Fresh</p>
          <p>Whole Foods</p>
          <p>Prime Video</p>
          <p>Farzad's Amazon.com</p>
          <p>Customer Service</p>
          <p>Best Sellers</p>
          <p>Browsing History</p>
          <p>Find a Gift</p>
          <p>New Releases</p>
          <p>Buy Again</p>
          <p>Pantry</p>
          <p>Coupons</p>
          <p>Registry</p>
          <p>Sell</p>
          <a
            href="https://ko-fi.com/fullstackfarzzy"
            target="_blank"
            className="subHeader__kofi"
          >
            <button className="subHeader__kofi--button">
              <span className="subHeader__kofi--img">
                <img
                  src="https://storage.ko-fi.com/cdn/cup-border.png"
                  className="kofimg"
                  alt="coffee"
                />
              </span>
              Buy Farzad a Ko-Fi
            </button>{" "}
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
