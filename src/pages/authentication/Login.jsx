import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Formik } from "formik";
import * as Yup from "yup";

import { Input } from "../../customComponents/Form/Input";
import { loginFormChangeHandler, loginFormSubmitHandler } from "../../utils";

import "./Authentication.css";
import { useAuth } from "../../hooks";
import { useNotifications } from "reapop";

const Login = () => {
  const navigate = useNavigate();
  const { notify } = useNotifications();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { authState, authDispatch } = useAuth();

  const validator = Yup.object({
    email: Yup.string()
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Enter valid email")
      .required("Required"),
    password: Yup.string()
      .min(6, "Must be 6 to 15 characters")
      .max(15, "Must be 6 to 15 characters")
      .required("Required"),
  });
  const handleSubmit = async (form) => {
    try {
      const login = await loginFormSubmitHandler(form.data, authDispatch);
      console.log(login);
      if (login?.data?.encodedToken) {
        notify({
          title: <h3> Success :)</h3>,
          message: <h5>Logged in successfully </h5>,
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
        navigate("/login");
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
      navigate("/login");
    }
  };
  const handleChange = async (e) =>
    loginFormChangeHandler(e, formData, setFormData);
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
              <p className="h2 text-gray">Login</p>
              <hr />
              <br />
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
                  Login
                </button>
              </div>
              <br />
              <p>
                Not Registered? <Link to="/signup">Sign up</Link>
              </p>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export { Login };
