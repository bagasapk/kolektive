import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AdminService from "../services/AdminService";

const Admin = () => {
  const [info, setInfo] = useState();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = () => {
    AdminService.get()
      .then((res) => {
        const allInfo = res.data;
        setInfo(allInfo);
        console.log(allInfo);
      })
      .catch((e) => {
        console.log(e);
        window.location.href = "/";
      });
  };

  const getButtonBayar = (data, id) => {
    if (data !== "in_progress") {
      return null;
    } else {
      return (
        <button
          onClick={() => sendWithdraw(id)}
          style={{ fontSize: "1.5rem" }}
          className="px-5 mx-auto"
          type="submit"
        >
          Approve
        </button>
      );
    }
  };

  const sendWithdraw = (id) => {
    AdminService.put(id)
      .then((res) => {
        const allInfo = res.data.success;
        setInfo(allInfo);
        setSuccess(!success);
        if (!success) {
          Swal.fire("Approved!", "success").then(
            (result) => {
              if (result.isConfirmed) {
                window.location.href = "/admin";
              }
            }
          );
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <div className="campaign">
        <Navbar />
        <h2 className="text-uppercase campaignQuote">Halo Admin Kolektive</h2>
        <div className="text-start mx-5 campaignTitle rounded">
          <h1 className="m-0 px-5">LIST WITHDRAW</h1>
        </div>
        <div className="m-0 mt-4 m-md-5">
          <table class="table w-75 mx-auto transaction tableTransaction rounded">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Paid Date</th>
                <th scope="col">Status</th>
                <th scope="col">Event Id</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {info &&
                info.map((item, index) => (
                  <tr>
                    <th scope="col">{index + 1}</th>
                    <th scope="col">{item.paid_date}</th>
                    <th scope="col">{item.status}</th>
                    <th scope="col">{item.event_id}</th>
                    <th scope="col">{getButtonBayar(item.status, item.id)}</th>
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
    </div>
  );
};

export default Admin;
