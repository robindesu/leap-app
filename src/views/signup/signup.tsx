import styles from "./signup.module.css";
import { Field, reduxForm } from "redux-form";

interface SignupProps {}

function Signup() {
  const handleSubmit = () => {};

  return (
    <div className={styles.container}>
      <h2>Signup Page</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name">First Name </label>
        <Field name="name" component="input" type="text" />

        <label htmlFor="surname">Last Name </label>
        <Field name="surname" component="input" type="text" />

        <label htmlFor="surname">Email </label>
        <Field name="email" component="input" type="text" />

        <label htmlFor="surname">Password </label>
        <Field name="password" type="password" component="input" />
      </form>
    </div>
  );
}
export default reduxForm({
  form: "signup",
})(Signup);

// export default Signup;
