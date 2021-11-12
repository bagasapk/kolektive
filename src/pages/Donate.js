import React, { useEffect, useState } from "react";
import peep from "../images/avatar-5.png";
import Navbar from "../components/NavbarLP";
import EventService from "../services/EventService";
import { useParams } from "react-router-dom";
import Popup from "../components/Popup";
import FormTransaction from "./FormTransaction";
import DonateService from "../services/DonateService";

const Donate = () => {
  let { id } = useParams();

  const baseURL = "https://pacific-springs-44512.herokuapp.com/public/files/";
  const mapURL = "https://www.google.co.id/maps/place/";
  const [info, setInfo] = useState("");
  const [info2, setInfo2] = useState("");
  const [infoWithdraw, setInfoWithdraw] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getInfo();
    getWithdraw();
  }, []);

  const getInfo = () => {
    EventService.getById(id)
      .then((res) => {
        const eventInfo = res.data.success;
        const userInfo = res.data.user;
        setInfo(eventInfo);
        console.log(eventInfo);
        setInfo2(userInfo);
        console.log(userInfo);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const verifikasiTranslate = (data) => {
    if (data === null) {
      return "Belum Terverifikasi";
    } else {
      return "Identitas Terverifikasi";
    }
  };

  const getWithdraw = () => {
    DonateService.getWithdraw(id)
      .then((res) => {
        const allInfo = res.data.success;
        setInfoWithdraw(allInfo);
        console.log(allInfo);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const buttonWithdraw = () => {
    if (info2.id === info.user_id && infoWithdraw.request_status != 1) {
      return (
        <button
          onClick={() => postWithdraw(info.id)}
          className="withdrawButton"
        >
          Request Withdraw
        </button>
      );
    }else{
      return null;
    }
  };

  const postWithdraw = (id) => {
    DonateService.postWithdraw(id)
      .then((res) => {
        const allInfo = res.data.success;
        console.log(allInfo);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="donate px-md-5">
        {/* <nav className=""></nav> */}
        <div className="donateContainer rounded">
          <div className="px-5 pt-5">
            <img
              className="w-100 rounded img-fluid donateEventPic"
              alt="poster"
              src={baseURL + info.path}
            ></img>
          </div>
          <h1 className="text-uppercase text-start px-5 py-2">{info.title}</h1>
          {/* <div className="d-flex px-5 flex-wrap">
            <h2 className="m-0">Rp. 2.158.000</h2>
            <p
              style={{ fontWeight: "600", color: "#837C7C" }}
              className="m-0 align-self-end px-4"
            >
              Terkumpul dari Rp.2.500.000
            </p>
          </div> */}
          <div className="px-5 py-2">
            {/* <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "10%" }}
              ></div>
            </div> */}
          </div>
          <div className="d-flex justify-content-between px-5">
            {/* <p className="progressDetails">
              1809 <span className="progressDetails2">Booster</span>
            </p> */}
            <p className="progressDetails">
              Tanggal : <span className="progressDetails2">{info.date}</span>
            </p>
          </div>
          <div className="d-flex justify-content-around mx-5 pb-5">
            <button className="shareEvent rounded">
              <i class="bi bi-share"></i>
              <p className="m-2 mx-4 progressDetails shareEventText">Bagikan</p>
            </button>
            <button onClick={togglePopup} className="boostNow rounded">
              <p className="m-2 p-1">Boost Sekarang!</p>
            </button>
            {buttonWithdraw()}
          </div>
        </div>
        <div className="donateContainer mt-5 pb-5">
          <div className="px-5 pt-5 pb-3 w-md-50">
            <h3 className="p-2 rounded text-center text-uppercase donateSubtitleBox">
              {info.title}
            </h3>
          </div>
          <div className="donateEventBox mx-3 mx-md-5">
            <div className="d-flex justify-content-between m-4 flex-wrap">
              <div className=" donateEventDesc col-md-8 text-start">
                <h4>Deskripsi Event</h4>
                <p>{info.desc}</p>
              </div>
              <div className="donateEventInfo col-md-4 text-start p-2">
                <div>
                  <i className=""></i>
                  <h5 className="m-0">Kategori</h5>
                  <p
                    className="mb-3"
                    style={{ color: "black", fontWeight: "500" }}
                  >
                    {info.category}
                  </p>
                </div>
                <div>
                  <i className=""></i>
                  <h5 className="m-0">Tanggal dan Jam Event</h5>
                  <p
                    className="mb-3"
                    style={{ color: "black", fontWeight: "500" }}
                  >
                    {info.date}
                  </p>
                </div>
                <div>
                  <i className=""></i>
                  <h5 className="m-0">Tempat</h5>
                  <p
                    className="mb-3"
                    style={{ color: "black", fontWeight: "500" }}
                  >
                    {info.loc}
                  </p>
                </div>
              </div>
            </div>
            <button className="donateLearnMore mb-4">
              <span>Learn More</span>
            </button>
          </div>
        </div>
        <div className="donateContainer my-5 text-start pb-5">
          <div className="px-5 pt-5 pb-3 w-md-50">
            <h3 className="p-2 rounded text-center text-uppercase donateSubtitleBox">
              Kolega Event
            </h3>
          </div>
          <div className="donateKolegaBox mx-3 mx-md-5 px-4">
            <div className="d-flex align-items-center my-4">
              <img className="img-fluid" alt="avatar" src={peep}></img>
              <div className="mx-3">
                <h4 className="m-0">{info2.name}</h4>
                <p style={{ color: "#7E7B7B" }} className="m-0">
                  {verifikasiTranslate(info2.email_verified_at)}
                </p>
              </div>
              <i></i>
            </div>
            {/* <p>
              2021 IEEE International Conference on Artificial Intelligence and
              Big Data (ICAIBDA) is an international conference that invites
              experienced speakers in fields relevant to the IFEST theme.
              ICAIBDA aims to establish a platform and to provide opportunities
              for academic scientists, researchers, research scholars,
              practitioners from all over the world to exchange and share their
              experiences, ideas, knowledge and research results to the latest
              issues of Artificial Intelligence and Big Data.
            </p> */}
          </div>
        </div>
        <div className="donateContainer text-start">
          <div className="px-5 pt-5 pb-3 w-md-50">
            <h3 className="p-2 rounded text-center text-uppercase donateSubtitleBox">
              Lokasi Event
            </h3>
          </div>
          <div className="donateLocBox">
            {/* <iframe
            width="600"
            height="450"
            // style="border:0"
            loading="lazy"
            allowfullscreen
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDZTQ8SFm60PLVzx6r8z_9zm3szeIidNSE
    &q=Space+Needle,Seattle+WA"
          ></iframe> */}
            <button className="donateGetDir rounded mb-4 mx-5">
              <a href={mapURL + info.loc} className="m-0 px-5 py-1 donateMap">
                Get Direction
              </a>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <Popup
          content={
            <>
              <FormTransaction></FormTransaction>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
};

export default Donate;
