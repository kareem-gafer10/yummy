import { useFormik } from "formik";
import React from "react";
import toast from "react-hot-toast";
import { useNavigate  } from "react-router-dom";
import * as Yup from "yup";

const ContactUs = () => {
  const navigate= useNavigate ();

  const validationSchema=Yup.object({
    name: Yup.string().required("Name is required").min(3, "Name must be more than 3 characters").max(10, "Name can't be more than 10 characers"),
    email: Yup.string().required("email is required").email("Please Enter a valid Email"),
    phone: Yup.string().required("Phone is required").matches(/^01[125][0-9]{8}$/, "Please Enter a valid Phone number"),
    age: Yup.number().required("Age is required").min(18, "You must be 18 at least").max(60, "You must be at most 60 years old"),
    password: Yup.string().required("Password is required").min(5, "password must be at least 5").max(12, "password can't be more than 12").matches(/^[A-Z]/, "Password must start with capital letter"),
    repassword: Yup.string().required("Repassword is required") .oneOf([Yup.ref("password")], "Password and Repassword must be the same"),

  })


  const handleContact=()=>{

    toast.success("success",{duration:2000,className:"text-success px-4 fw-bolder"});
    navigate("/")
    formik.resetForm();
  }




  const formik=useFormik({
    initialValues: {
      name: "",
      email: "",
      age: "",
      phone: "",
      password: "",
      repassword: "",
    },
    validationSchema,
    onSubmit:handleContact
  })


  








  return (
    <form className="  contact" onSubmit={formik.handleSubmit}>
      <div className="row py-5">

        <div className="col-md-6">

          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Your Name"
              className=" form-control"
              name="name"
              id="id"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          {formik.touched.name && formik.errors.name ? (
         <small className=" text-danger d-block  mt-1">{formik.errors.name}</small>
        ) : null}
        </div>

        <div className="col-md-6">
        <div className="form-group">
            <input
              type="email"
              placeholder="Enter Your Email"
              className=" form-control mt-2 mt-md-0"
              name="email"
              id="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
         <small className=" text-danger d-block mt-1">{formik.errors.email}</small>
        ) : null}
        </div>

        <div className="col-md-6">
        <div className="form-group">
            <input
              type="tel"
              placeholder="Enter Your Phone"
              className=" form-control mt-2 "
              name="phone"
              id="phone"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
          </div>

          {formik.touched.phone && formik.errors.phone ? (
         <small className=" text-danger d-block mt-1">{formik.errors.phone}</small>
        ) : null}
        </div>

        <div className="col-md-6">
        <div className="form-group ">
            <input
              type="number"
              placeholder="Enter your Age"
              className=" form-control mt-2"
              name="age"
              id="age"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.age}
            />
          </div>

          {formik.touched.age && formik.errors.age ? (
          <small className=" text-danger d-block mt-1">{formik.errors.age}</small>
          ) : null}
        </div>

        <div className="col-md-6">
        <div className="form-group ">
            <input
              type="password"
              placeholder="Enter Your Password"
              className=" form-control  mt-2"
              autoComplete="off"
              name="password"
              id="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>

          {formik.touched.password && formik.errors.password ? (
         <small className=" text-danger d-block mt-1">{formik.errors.password}</small>
        ) : null}
        </div>

       

        <div className="col-md-6">
        <div className="form-group ">
            <input
              type="password"
              placeholder="RePassword"
              className=" form-control mt-2"
              autoComplete="off"
              name="repassword"
              id="repassword"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.repassword}
            />
          </div>

          {formik.touched.repassword && formik.errors.repassword ? (
          <small className=" text-danger d-block mt-1">{formik.errors.repassword}</small>
           ) : null}

        </div>

      </div>

      <div className=" d-flex justify-content-center">
      <button disabled={!(formik.isValid && formik.dirty)} 
       className=" btn btn-lg btn-danger" type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ContactUs;
