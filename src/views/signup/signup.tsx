import { useState } from "react";
import { Field, reduxForm } from "redux-form";
import axios from "axios";
import Button from "../../components/button/button";
import Header from "../../components/header/header";
import renderField from "../../components/field/field";

import baseStyles from "../../styles/base.module.css";
import { Link } from "react-router-dom";

interface StringByString {
  [key: string]: string;
}

interface FormValues extends StringByString {
  firstname: string;
  surname: string;
  email: string;
  username: string;
  password: string;
}

function Signup({ ...props }) {
  const { handleSubmit } = props;
  const [requestError, setRequestError] = useState();

  const submitForm = (data: FormValues) => {
    setRequestError(undefined);
    axios
      .post("https://frontend-test.getsandbox.com/users", data)
      .catch((error) => {
        setRequestError(error.response?.data?.error?.message);
      });
  };

  return (
    <>
      <Header text="Signup Page" />

      <div className={baseStyles.container}>
        <form className={baseStyles.form} onSubmit={handleSubmit(submitForm)}>
          <Field
            name="firstname"
            component={renderField}
            type="text"
            label="First Name"
          />

          <Field
            name="surname"
            component={renderField}
            type="text"
            label="Last Name"
          />

          <Field
            name="email"
            component={renderField}
            type="text"
            label="Email"
          />

          <Field
            name="username"
            component={renderField}
            type="text"
            label="User Name"
          />

          <Field
            name="password"
            component={renderField}
            type="password"
            label="Password"
          />

          <Button type="submit" label="Submit" />
          {requestError && <span>{requestError}</span>}
          <p className={baseStyles.link}>
            Already have an acount? <Link to="/login">Login</Link>
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
  form: "signup",
  validate,
})(Signup);
