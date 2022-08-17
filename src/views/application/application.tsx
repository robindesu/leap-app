import axios from "axios";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import Button from "../../components/button/button";
import renderField from "../../components/field/field";
import Header from "../../components/header/header";
import { load as loadData } from "../../store/load";

import baseStyles from "../../styles/base.module.css";

export interface ApplicationT {
  id: string;
  name: string;
  secret: string;
  lang: string;
  version: string;
}

function Application({ ...props }) {
  const { handleSubmit, load } = props;
  let { id } = useParams();

  useEffect(() => {
    console.log(id);
    id &&
      axios
        .get(`https://frontend-test.getsandbox.com/applications/${id}`, {
          withCredentials: true,
          headers: {
            crossorigin: true,
            "Access-Control-Allow-Credentials": true,
          },
        })
        .then((data) => {
          console.log(data.data);

          load(data.data);
        });
  }, [id, load]);

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
          <Field name="id" component={renderField} type="string" label="ID" />
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
            type="number"
            label="Version"
          />

          <Button type="submit" label="Save Application" />
          {/* {requestError && <span>{requestError}</span>} */}
        </form>
      </div>
    </>
  );
}

let ApplicationForm: any = reduxForm({
  form: "application",
  // validate,
})(Application);

ApplicationForm = connect(
  (state: any) => ({
    initialValues: state.load.data,
  }),
  { load: loadData }
)(ApplicationForm);

export default ApplicationForm;
