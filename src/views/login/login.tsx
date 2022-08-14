import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import Button from "../../components/button/button";
import renderField from "../../components/field/field";
import Header from "../../components/header/header";

import baseStyles from "../../styles/base.module.css";

interface StringByString {
  [key: string]: string;
}

interface FormValues extends StringByString {
  username: string;
  password: string;
}

function Login({ ...props }) {
  const [requestError, setRequestError] = useState();
  const { handleSubmit } = props;
  let navigate = useNavigate();

  const submitForm = (data: FormValues) => {
    setRequestError(undefined);
    axios
      .post("https://frontend-test.getsandbox.com/users/login", data, {
        headers: {
          crossorigin: true,
          "Access-Control-Allow-Credentials": true,
        },
      })
      .catch((error) => {
        setRequestError(error.response?.data?.error?.message);
      })
      .then((data: any) => {
        localStorage.setItem("auth", data.data.session);
        navigate("/");
      });
  };

  return (
    <>
      <Header text="Login Page" />

      <div className={baseStyles.container}>
        <form className={baseStyles.form} onSubmit={handleSubmit(submitForm)}>
          <Field
            name="username"
            component={renderField}
            type="text"
            label="First Name"
          />

          <Field
            name="password"
            component={renderField}
            type="password"
            label="Password"
          />

          <Button type="submit" label="Login" />
          {requestError && <span>{requestError}</span>}
          <p className={baseStyles.link}>
            Don't have account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </>
  );
}

const validate = (values: FormValues) => {
  enum fieldNames {
    "firstname",
    "surname",
    "email",
    "username",
    "password",
  }

  const errors: StringByString = {};

  for (const field in fieldNames) {
    if (!values[field]) {
      errors[field] = "Required";
    }
  }

  return errors;
};

export default reduxForm({
  form: "login",
  validate,
})(Login);
