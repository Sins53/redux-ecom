import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Validation from "../../Components/Error";


const initialValues = {
  name: "",
  email: "",
  phone: "",
  address: "",
};
const validationSchema = Yup.object({
  name: Yup.string().required("Please Enter Name"),
  email: Yup.string()
    .email("Must be a valid email")
    .required("Please enter Email"),
  phone: Yup.string()
    .min(10, "Min value 10.")
    .max(10, "Must be below 10")
    .required(),
    address: Yup.string().required("Please Enter Address"),
});


const CheckoutForm = (props) => {
  const {setFormSubmit} =props
  const { values, errors, handleChange, handleSubmit } = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit: () => {
      // alert("submitted");
       setFormSubmit(false)
    },
  });

  return (
    <>
    
      <form className="Checkout-form mt-5" onSubmit={handleSubmit}>
          <div className="Checkout-form-contact">
            <div>
            <h2>Contact Details</h2>
              <label className="mt-5"> Enter Name</label>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Enter First Name"
              />
              <Validation errors={errors} name="name" />
            </div>
            <div>
              <label> Phone</label>
              <input
                type="number"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                placeholder="Phone"
              />
              <Validation errors={errors} name="phone" />
            </div>
            <div>
              <label> Email</label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <Validation errors={errors} name="email" />
            </div>
          </div>
          <div className="Checkout-form-address mt-5">
            <div>
              <h2>Shipping informations</h2>
            </div>
            <div className="mt-3">
              <label> Address </label>
              <input
                type="text"
                name="address"
                value={values.address}
                onChange={handleChange}
                placeholder="Address"
              />
              <Validation errors={errors} name="address" />
            </div>
          </div>
          <button> Confirm</button>
        </form>  
    </>
  );
};

export default CheckoutForm;
