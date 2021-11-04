import React, { useEffect } from "react";
import syncfest from "../images/syncfest.png";
import peep from "../images/avatar-5.png";
import Navbar from "../components/NavbarLP";

const Donate = () => {
  useEffect(() => {
    //change this to the script source you want to load, for example this is snap.js sandbox env
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    //change this according to your client-key
    const myMidtransClientKey = "SB-Mid-client-hAgklhCOsxde44UO";

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    // optional if you want to set script attribute
    // for example snap.js have data-client-key attribute
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);
    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  const donateHandleClick = (transaction_id) => {
    window.snap.pay(transaction_id);
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
              src={syncfest}
            ></img>
          </div>
          <h1 className="text-uppercase text-start px-5 py-2">
            Seminar Nasional Ifest
          </h1>
          <div className="d-flex px-5 flex-wrap">
            <h2 className="m-0">Rp. 2.158.000</h2>
            <p
              style={{ fontWeight: "600", color: "#837C7C" }}
              className="m-0 align-self-end px-4"
            >
              Terkumpul dari Rp.2.500.000
            </p>
          </div>
          <div className="px-5 py-2">
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "10%" }}
              ></div>
            </div>
          </div>
          <div className="d-flex justify-content-between px-5">
            <p className="progressDetails">
              1809 <span className="progressDetails2">Booster</span>
            </p>
            <p className="progressDetails">
              26 <span className="progressDetails2">Hari lagi</span>
            </p>
          </div>
          <div className="d-flex justify-content-around mx-5 pb-5">
            <button className="shareEvent rounded">
              <i class="bi bi-share"></i>
              <p className="m-2 mx-4 progressDetails shareEventText">Bagikan</p>
            </button>
            <button onClick={() => donateHandleClick("a")} className="boostNow rounded">
              <p className="m-2 p-1">Boost Sekarang!</p>
            </button>
          </div>
        </div>
        <div className="donateContainer mt-5 pb-5">
          <div className="px-5 pt-5 pb-3 w-md-50">
            <h3 className="p-2 rounded text-center text-uppercase donateSubtitleBox">
              Seminar Nasional Ifest
            </h3>
          </div>
          <div className="donateEventBox mx-3 mx-md-5">
            <div className="d-flex justify-content-between m-4 flex-wrap">
              <div className=" donateEventDesc col-md-8 text-start">
                <h4>Deskripsi Event</h4>
                <p>
                  2021 IEEE International Conference on Artificial Intelligence
                  and Big Data (ICAIBDA) is an international conference that
                  invites experienced speakers in fields relevant to the IFEST
                  theme. ICAIBDA aims to establish a platform and to provide
                  opportunities for academic scientists, researchers, research
                  scholars, practitioners from all over the world to exchange
                  and share their experiences, ideas, knowledge and research
                  results to the latest issues of Artificial Intelligence and
                  Big Data.
                </p>
              </div>
              <div className="donateEventInfo col-md-4 text-start p-2">
                <div>
                  <i className=""></i>
                  <h5 className="m-0">Kategori</h5>
                  <p
                    className="mb-3"
                    style={{ color: "black", fontWeight: "500" }}
                  >
                    Seminar
                  </p>
                </div>
                <div>
                  <i className=""></i>
                  <h5 className="m-0">Tanggal Event</h5>
                  <p
                    className="mb-3"
                    style={{ color: "black", fontWeight: "500" }}
                  >
                    Seminar
                  </p>
                </div>
                <div>
                  <i className=""></i>
                  <h5 className="m-0">Jam Event</h5>
                  <p
                    className="mb-3"
                    style={{ color: "black", fontWeight: "500" }}
                  >
                    Seminar
                  </p>
                </div>
                <div>
                  <i className=""></i>
                  <h5 className="m-0">Tempat</h5>
                  <p
                    className="mb-3"
                    style={{ color: "black", fontWeight: "500" }}
                  >
                    Seminar
                  </p>
                </div>
              </div>
            </div>
            <div className="donateEventDetails text-start mx-4">
              <h4>Detail Event</h4>
              <p>
                🗣️ Pembicara : 1. Dr. H. Vitra Yozi Chaniago, S.E., M.E., Ak.,
                CA (Tax Investigator) 2. Joko Supriyanto, Ak., M.Ak., CA (ex
                Auditor Pemerintah BPKP) ✒️ Moderator : Dr. Surtikanti, S.E.,
                M.Si., Ak., CA (Ketua Prodi Akuntansi S1 Unikom) ........
              </p>
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
                <h4 className="m-0">Bagaskara</h4>
                <p style={{ color: "#7E7B7B" }} className="m-0">
                  Identitas Terverifikasi
                </p>
              </div>
              <i></i>
            </div>
            <p>
              2021 IEEE International Conference on Artificial Intelligence and
              Big Data (ICAIBDA) is an international conference that invites
              experienced speakers in fields relevant to the IFEST theme.
              ICAIBDA aims to establish a platform and to provide opportunities
              for academic scientists, researchers, research scholars,
              practitioners from all over the world to exchange and share their
              experiences, ideas, knowledge and research results to the latest
              issues of Artificial Intelligence and Big Data.
            </p>
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
              <p className="m-0 px-5 py-1">Get Direction</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
