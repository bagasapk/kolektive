import React, { useState, useEffect } from "react";
import CarouselImg from "../components/CarouselImg";
import NavbarLP from "../components/NavbarLP";
import { CarouselData } from "../components/CarouselData";
import Footer from "../components/Footer";
import { AiOutlineSearch } from "react-icons/ai";
import EventService from "../services/EventService";

const Event = () => {
  const baseURL = "https://pacific-springs-44512.herokuapp.com/public/files/";
  const [info, setInfo] = useState([]);
  var [operatorClicked, setOperatorClicked] = useState(0);
  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = () => {
    EventService.get()
      .then((res) => {
        const allInfo = res.data;
        setInfo(allInfo);
        console.log(allInfo);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const indexOperator = () => {
    var index = 6;
    do {
      if (operatorClicked >= 1) {
        for (let i = 0; i < 10; i++) {
          return index * 2;
        }
      }
      return index;
    } while (operatorClicked >= 1);
  };

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <NavbarLP />
      <CarouselImg slides={CarouselData} />
      <div className="searchEvt mx-auto flex-wrap flex-lg-nowrap">
        <div
          className="searchBoxEvt row col-12 col-lg-4"
          style={{ justifyContent: "center", display: "flex" }}
        >
          <p>Looking For</p>
          <input
            type="text"
            style={{ width: "90%" }}
            className="inputBox"
            placeholder="Playlist Festival"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <button
        onClick={() => (window.location.href = "/campaign")}
        className="button2 button2Event"
      >
        BIKIN CAMPAIGN{" "}
      </button>
      <div className="upcomingEvents mx-auto">
        <div className="txtUpcoming flex-wrap flex-lg-nowrap mb-5 mx-xl-3 justify-content-xl-around">
          <p>UPCOMING EVENTS</p>
        </div>
      </div>

      <div class="card-group justify-content-center">
        {info &&
          info
            .slice(0, indexOperator())
            .filter((item) => {
              if (searchTerm === "") {
                return item;
              } else if (
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item) => (
              <button
                onClick={() => (window.location.href = "/event/" + item.id)}
                key={item.id}
                className="card col-3"
                style={{ margin: "20px 50px", alignItems: "center" }}
              >
                <img
                  // style={{ maxWidth: "100%" }}
                  class="card-img-top"
                  src={baseURL + item.path}
                  alt={item.id}
                />
                <div class="card-body">
                  <h5 class="card-title">{item.title}</h5>
                  <p class="card-text">{item.desc}</p>
                  <p class="card-text">
                    <small class="text-muted">{item.date}</small>
                  </p>
                </div>
              </button>
            ))}
      </div>
      <button
        onClick={() => setOperatorClicked(operatorClicked++)}
        className="col-11 col-md-4 col-xl-3 btnLoadEvent mx-auto"
      >
        Load More Event
      </button>
      <Footer />
    </div>
  );
};

export default Event;
