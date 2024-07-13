import React from "react";
import "./AddAddress.css"
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { setInLocalStorage, getFromLocalStorage } from "../utils";
import { AddressList } from "../Constants";

const AddAddressDialog = (props) => {
  const { closeModal } = props;
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    const savedAdress = getFromLocalStorage(AddressList) || [];
    const addresObject = {
      ...data,
      state: "Delhi",
      city: "Delhi",
      isSelected: true
    }
    const updatePreviousAddress = savedAdress.map((item) => {
      return { ...item, isSelected: false}
    });

    const updatedAddres = [addresObject, ...updatePreviousAddress]
    setInLocalStorage(AddressList, updatedAddres)
    console.log(data);
    closeModal()
  };

  return (
    <>
    <div className="headerContainer">
      <div className="backArrowStyle" onClick={() => {closeModal()}}>
        <BiArrowBack />
      </div>
    </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="addAdressContainer">
          <div className="form-control">
            <label>Name</label>
            <input 
              type="text" 
              name="username"
              {...register("username", {
                required: "Name is required",
              })}
            />
            {errors.username && <p className="errorMsg">{errors.username.message}</p>}
          </div>
          <div className="form-control">
            <label>Email</label>
            <input 
              type="text" 
              name="mail"
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email is not valid."
                }
              })}
            />
            {errors.email && <p className="errorMsg">{errors.email.message}</p>}
          </div>
          <div className="form-control">
            <label>Address</label>
            <input 
              type="text" 
              name="address"
              {...register("address", {
                required: "Address is required",
              })}
            />
            {errors.address && <p className="errorMsg">{errors.address.message}</p>}
          </div>
          <div className="form-control">
            <label>Pincode</label>
            <input 
              type="number" 
              name="pincode"
              {...register("pincode", {
                required: "Pincode is required",
                validate: {
                  checkLength: (value) => value.length === 6,
                }
              })}
            />
            {errors.pincode && <p className="errorMsg">{errors.pincode.message}</p>}
            {
              errors.pincode?.type === "checkLength" && (
                <p className="errorMsg">
                  Pincode Must of be 6 digit
                </p>
            )}
          </div>
          <div className="form-control">
            <label>Mobile no.</label>
            <input 
              type="number" 
              name="mobile"
              minLength={1}
              maxLength={6}
              {...register("mobile", {
                required: "Mobile number is required",
                validate: {
                  checkLength: (value) => value.length === 10,
                }
              })}
            />
            {errors.mobile && <p className="errorMsg">{errors.mobile.message}</p>}
            {
              errors.mobile?.type === "checkLength" && (
                <p className="errorMsg">
                  Mobile nuber must be of 10 digit
                </p>
            )}
          </div>
          <div className="form-control">
            <label>City</label>
            <input 
              type="text" 
              name="city"
              value="Delhi"
              disabled={true}
            />
          </div>
          <div className="form-control">
            <label>State</label>
            <input 
              type="text" 
              name="state"
              value="Delhi"
              disabled={true}
            />
          </div>
        </div>
        <div className="footerAddAddress">
          <button type="submit" className="footerAddAddresHeading">Save</button>  
        </div>
      </form>
    </>
  )
}

export default AddAddressDialog;