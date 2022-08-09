import { Field, reduxForm } from "redux-form";
import axios from "axios";
import Button from "../../components/button/button";
import Header from "../../components/header/header";

import styles from "./signup.module.css";

interface SignupProps {}

function Signup() {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      surname: { value: string };
      email: { value: string };
      password: { value: string };
    };
    axios.post("https://frontend-test.getsandbox.com/users", {
      username: target.name.value,
      surname: target.surname.value,
      email: target.email.value,
      password: target.password.value,
    });
  };

  return (
    <>
      <Header text="Signup Page" />

      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="name">First Name </label>
            <Field name="name" component="input" type="text" />
          </div>

          <div className={styles.field}>
            <label htmlFor="surname">Last Name </label>
            <Field name="surname" component="input" type="text" />
          </div>

          <div className={styles.field}>
            <label htmlFor="surname">Email </label>
            <Field name="email" component="input" type="text" />
          </div>

          <div className={styles.field}>
            <label htmlFor="surname">Password </label>
            <Field name="password" type="password" component="input" />
          </div>

          <Button type="submit" label="Submit" />
        </form>
      </div>
    </>
  );
}
export default reduxForm({
  form: "signup",
})(Signup);

// export default Signup;
