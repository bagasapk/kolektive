import React, { useState } from "react";
import Navbar from "../components/Navbar";
import foto from "../images/image-icon.png";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import CampaignService from "../services/CampaignService";

const FormCampaign = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    let file = data.file[0];
    let fd = new FormData();
    fd.append("file", file);
    fd.append("title", data.title);
    fd.append("category", data.category);
    fd.append("desc", data.desc);
    fd.append("date", data.date);
    fd.append("loc", data.loc);
    // console.log(params);
    CampaignService.post(fd)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="campaign">
      <Navbar />
      <div className="text-start mx-5 mt-5 campaignTitle rounded">
        <h1 className="m-0 px-5">BIKIN EVENT</h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="row mx-5"
        encType="multipart/form-data"
      >
        <div className="col-3 mx-5">
          <label
            htmlFor="file"
            className=" text-start my-5 p-2 campaignFoto row rounded"
          >
            <p className="m-0 pb-5 campaignFotoTitle">FOTO</p>
            <img className="img-fluid p-4" alt="foto" src={foto} />
            <p
              style={{ color: "white", fontSize: "0.75rem" }}
              className="text-center py-2"
            >
              Foto Poster
            </p>
            <input
              accept="image/png, image/gif, image/jpeg"
              {...register("file", { required: true })}
              id="file"
              type="file"
              hidden
            />
          </label>
          <h2 className="text-uppercase campaignQuote">Keep Going Booster</h2>
        </div>
        <div className="row col-8 my-5 py-2 campaignInput rounded">
          <label htmlFor="title">Judul</label>
          <input
            {...register("title", { required: true })}
            id="title"
            type="text"
          ></input>
          <label htmlFor="category">Kategori</label>
          <select
            {...register("category", { required: true })}
            id="category"
            type="text"
          >
            <option value="" disabled selected>
              Choose
            </option>
            <option value="musik">Musik</option>
            <option value="edukasi">Edukasi</option>
            <option value="olahraga">Olahraga</option>
            <option value="pameran seni">Pameran Seni</option>
          </select>
          <label htmlFor="desc">Deskripsi/Caption</label>
          <textarea
            {...register("desc", { required: true })}
            id="desc"
            type="text"
          ></textarea>
          <label htmlFor="date">Tanggal</label>
          <input
            {...register("date", { required: true })}
            id="date"
            type="datetime-local"
          />
          <label htmlFor="loc">Lokasi</label>
          <input
            {...register("loc", { required: true })}
            id="loc"
            type="text"
          ></input>
          <button className="mx-auto my-4" type="submit">
            Done
          </button>
        </div>
      </form>
      <div className="campaignDesign2 p-3"></div>
      <div className="campaignDesign p-3"></div>
      <div className="campaignDesign3 p-3 mb-4"></div>
      <Footer></Footer>
    </div>
  );
};

export default FormCampaign;
