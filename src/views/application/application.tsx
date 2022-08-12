import axios from "axios";
import { Field, reduxForm } from "redux-form";
import Button from "../../components/button/button";
import renderField from "../../components/field/field";
import Header from "../../components/header/header";

import baseStyles from "../../styles/base.module.css";

interface ApplicationT {
  id: number;
  name: string;
  secret: string;
  lang: string;
  version: string;
}

function Application({ ...props }) {
  const { handleSubmit } = props;

  const submitForm = (data: ApplicationT) => {
    axios.post("https://frontend-test.getsandbox.com/applications", data, {
      withCredentials: true,
      headers: {
        crossorigin: true,
        "Access-Control-Allow-Credentials": true,
      },
    });
  };

  return (
    <>
      <Header text="Application" />

      <div className={baseStyles.container}>
        <form className={baseStyles.form} onSubmit={handleSubmit(submitForm)}>
          <Field name="id" component={renderField} type="number" label="ID" />
          <Field name="name" component={renderField} type="text" label="Name" />
          <Field
            name="secrete"
            component={renderField}
            type="text"
            label="Secret"
          />
          <Field
            name="lang"
            component={renderField}
            type="text"
            label="Language"
          />
          <Field
            name="version"
            component={renderField}
            type="text"
            label="Version"
          />

          <Button type="submit" label="Save Application" />
          {/* {requestError && <span>{requestError}</span>} */}
        </form>
      </div>
    </>
  );
}

export default reduxForm({
  form: "application",
  // validate,
})(Application);
