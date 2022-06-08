import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { Input } from "../../customComponent/Form/Input";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useNotifications } from "reapop";
import { signup } from "../../services/auth/signup";
import { setUserToken } from "../../redux/auth/AuthSlice";
import CookieHelper from "../../utils/cookies/cookieHelper";

import "./Authentication.css";

const Signup = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const authDispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    contact_no: "",
    password: "",
  });
  const validator = Yup.object({
    username: Yup.string()
      .min(3, "Must be 3 to 15 characters")
      .max(15, "Must be 3 to 15 characters")
      .required("Required"),
    email: Yup.string()
      .matches(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Enter valid email"
      )
      .required("Required"),
    password: Yup.string()
      .min(6, "Must be 6 to 15 characters")
      .max(15, "Must be 6 to 15 characters")
      .required("Required"),
    contact_no: Yup.string()
      .min(10, "Must be 10 characters")
      .max(10, "Must be 10 characters")
      .required("Required"),
  });

  const handleSubmit = async (form) => {
    try {
      const res = await signup(form.data);
      const cookieHelper = new CookieHelper();
      cookieHelper.setCookie({ auth_token: res.data.encodedToken }, null, 2);
      authDispatch(setUserToken(res.data.encodedToken));
      if (res?.data?.encodedToken) {
        notify({
          title: <h3> Success :)</h3>,
          message: <h5>Signed in successfully </h5>,
          status: "success",
          dismissible: true,
          dismissAfter: 5000,
          showDismissButton: true,
          position: "bottom-left",
        });
        navigate("/");
      } else {
        notify({
          title: <h3>Error Occured</h3>,
          message: <h5>Invalid credentials</h5>,
          status: "error",
          dismissible: true,
          dismissAfter: 5000,
          showDismissButton: true,
          position: "bottom-left",
        });
        navigate("/signup");
      }
    } catch (err) {
      console.log(err);
      notify({
        title: <h3>Error Occured</h3>,
        message: <h5>Something went wrong! Refresh and try again</h5>,
        status: "error",
        dismissible: true,
        dismissAfter: 5000,
        showDismissButton: true,
        position: "bottom-left",
      });
      navigate("/signup");
    }
  };
  const handleChange = async (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  return (
    <div className="form-container">
      <div className="auth-card">
        <Formik
          enableReinitialize={true}
          initialValues={formData}
          validationSchema={validator}
          onSubmit={(values, { setErrors, setStatus, resetForm }) =>
            handleSubmit({
              data: values,
              setErrors,
              setStatus,
              resetForm,
            })
          }
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <p className="h2 text-gray">Signup</p>
              <hr />
              <br />
              <Input
                label="Username"
                id="username"
                className="textbox"
                type="text"
                placeholder="Eg.TanayPratap"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              <Input
                label="Email"
                id="email"
                className="textbox"
                type="text"
                placeholder="Eg.neog@gmail.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                label="Contact no"
                id="contact_no"
                className="textbox"
                type="text"
                placeholder="Eg.8286213748"
                name="contact_no"
                value={formData.contact_no}
                onChange={handleChange}
              />
              <Input
                label="Password"
                id="password"
                className="textbox"
                type="text"
                placeholder="Eg.Tom1234"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <div>
                <button
                  className="btn-text btn-primary btn-bg-color"
                  type="submit"
                >
                  Sign up
                </button>
              </div>
              <br />
              <p>
                Already Registered? <Link to="/login">Login</Link>
              </p>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export { Signup };
