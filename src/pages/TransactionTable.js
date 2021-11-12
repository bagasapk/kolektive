import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NavbarLP from "../components/NavbarLP";
import DonateService from "../services/DonateService";
import TransactionService from "../services/TransactionService";

const TransactionTable = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    getInfo();
    postDonate();
  }, []);

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
  const getInfo = () => {
    TransactionService.get()
      .then((res) => {
        const allInfo = res.data.success;
        setInfo(allInfo);
        console.log(allInfo);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getStatus = (data) => {
    if (data === null) {
      return "Waiting";
    } else return data;
  };

  const getButtonBayar = (data, id) => {
    if (data === "Processing") {
      return null;
    } else {
      return (
        <button
          onClick={() => postDonate(id)}
          style={{ fontSize: "1.5rem" }}
          className="px-5 mx-auto"
          type="submit"
        >
          Bayar
        </button>
      );
    }
  };

  const postDonate = (id) => {
    DonateService.get(id)
      .then((res) => {
        const allInfo = res.data.success;
        console.log(allInfo);
        sessionStorage.setItem("snapToken", allInfo);
        window.snap.pay(allInfo);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="campaign">
      <NavbarLP />
      <div className="text-start mx-5 campaignTitle rounded">
        <h1 className="m-0 px-5">LIST TRANSAKSI</h1>
      </div>
      <div className="m-5">
        <table class="table w-75 mx-auto transaction tableTransaction rounded">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {info &&
              info.map((item, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{item.amount}</td>
                  <td>{getStatus(item.status)}</td>
                  <td>{getButtonBayar(item.status, item.id)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="campaignDesign2 p-3"></div>
      <div className="campaignDesign p-3"></div>
      <div className="campaignDesign3 p-3 mb-4"></div>
      <Footer></Footer>
    </div>
  );
};

export default TransactionTable;
