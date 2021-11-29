import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import TransactionService from "../services/TransactionService";

const FormTransaction = () => {
  let { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = (data) =>
    TransactionService.post(data, id)
      .then((response) => {
        console.log(response.data);
        setSuccess(!success);
        if (!success) {
          Swal.fire(
            "Transaction Created!",
            "Please finish your transaction",
            "success"
          ).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/transactions";
            }
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });

  return (
    <div className="formTransaction px-md-5 px-3">
      <h1>Masukkan Nominal Donasi</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="transactionBox my-4 d-flex flex-column align-items-start p-3">
          <p className="m-0 nominasi">Nominal Donasi</p>
          <div className="d-md-flex justify-content-between">
            <p className="m-0 rp">RP.</p>
            <div>
              <input
                {...register("amount", {
                  required: "This field is Required",
                  minLength: {
                    value: 5,
                    message: "Minimum Rp.10000 to Donate",
                  },
                })}
                className="mx-md-3 mx-1"
                type="number"
              ></input>
              {errors.amount && (
                <span className="errorText">{errors.amount.message}</span>
              )}
            </div>
          </div>
        </div>
        <div className="transactionBox d-flex flex-column align-items-start p-3">
          <p className="m-0 nominasi">Pesanmu Singkatmu untuk Event</p>
          <div className="d-md-flex justify-content-between">
            <p className="d-none d-md-block mx-4 rp"></p>
            <div>
              <input
                {...register("message", { required: "This field is Required" })}
                className="mx-md-3 mx-1"
                type="text"
              ></input>
              {errors.message && (
                <span className="errorText">{errors.message.message}</span>
              )}
            </div>
          </div>
        </div>
        <button className="px-md-5 m-5 mx-auto" type="submit">
          Buat Pembayaran
        </button>
      </form>
    </div>
  );
};

export default FormTransaction;
