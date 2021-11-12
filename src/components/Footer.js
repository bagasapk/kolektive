import React from "react";
import logoKolektive from "../images/logoKolektive.png";
const Footer = () => {
  return (
    <div className="containerFooter">
      <div className="wrapperFooter">
        <div className="rowFooter">
          <div className="columnFooter col-3">
            <div className="titleFooter">TENTANG KOLEKTIVE</div>
            <p className="linkFooter text-uppercase  text-start">
              Kolektive adalah sebuah platform event organizer dan
              crowdfunding khusus untuk event. Galang dana bersama untuk
              mendukung event yang kalian harapkan.
            </p>
          </div>
          <div className="columnFooter">
            <div className="titleFooter"> IKUTI UPDATE KAMI </div>
            <div className="d-flex flex-nowrap">
              <a href="/" className="imageFooter">
                <img
                  alt="Twitter"
                  src="https://i.ibb.co/3sLSSz0/twitter-1.png"
                ></img>
              </a>
              <a href="/" className="imageFooter">
                <img
                  alt="Facebook"
                  src="https://i.ibb.co/PF1798t/facebook-1.png"
                ></img>
              </a>
              <a href="/" className="imageFooter">
                <img
                  alt="Instagram"
                  src="https://i.ibb.co/25mw7Bs/INSTAGRAM.png"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="wrapperFooter">
        <div className="columnFooter">
          <div className="Row2">
            <div className="imagesFooter">
              <img alt="LOGO" src={logoKolektive} />
            </div>
          </div>
          <div className="textFooter">@ 2021KOLEKTIVE.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
