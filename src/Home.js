import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="12321341"
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          price={24.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
        />
        <Product
          id="12321341"
          title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Plum Sengled Bluetooth bulb"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61lBcVENQQL._AC_SL1000_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321341"
          title="Logitech M570 Wireless Trackball Mouse – Ergonomic Design with Sculpted Right-Hand Shape, Compatible with Apple Mac and Microsoft Windows Computers, USB Unifying Receiver, Dark Gray"
          price={29.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61QrqZ8uurL._AC_SL1500_.jpg"
        />
        <Product
          id="1234567"
          title="Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa voice control - Black"
          price={199.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81%2BjNVOUsJL._AC_SL1500_.jpg"
        />
        <Product
          id="1234561"
          title="BalanceFrom GoYoga All-Purpose 1/2-Inch Extra Thick High Density Anti-Tear Exercise Yoga Mat with Carrying Strap"
          price={23.86}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/91bwlFTZrgL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12234"
          title="SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC & FreeSync | LC49G95TSSNXZA Model"
          price={199.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg"
        />
      </div>

      {/* Product id, title, price, rating, image*/}
    </div>
  );
}

export default Home;
