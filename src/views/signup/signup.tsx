import { InputHTMLAttributes, useState } from "react";
import { Field, reduxForm } from "redux-form";
import axios from "axios";
import Button from "../../components/button/button";
import Header from "../../components/header/header";

import styles from "./signup.module.css";

interface SignupProps {
  handleSubmit: Function;
}

interface StringByString {
  [key: string]: string;
}

interface FormValues extends StringByString {
  username: string;
  surname: string;
  email: string;
  password: string;
}

interface RenderField {
  input: InputHTMLAttributes<HTMLInputElement>;
  label: string;
  type: string;
  meta: {
    touched: boolean;
    error: string;
    warning: string;
  };
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error },
}: RenderField) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

function Signup(props: SignupProps) {
  const { handleSubmit } = props;
  const [requestError, setRequestError] = useState();

  const submitForm = (data: FormValues) => {
    console.log(data);
    axios
      .post("https://frontend-test.getsandbox.com/users", data)
      .catch((error) => {
        setRequestError(error.response?.data?.error?.message);
      });
  };

  return (
    <>
      <Header text="Signup Page" />

      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
          <Field
            name="username"
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
            name="password"
            component={renderField}
            type="password"
            label="Password"
          />

          <Button type="submit" label="Submit" />
          <span>{requestError}</span>
        </form>
      </div>
    </>
  );
}

const validate = (values: FormValues) => {
  enum fieldNames {
    "username",
    "surname",
    "email",
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
