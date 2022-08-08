import styles from "./signup.module.css";

interface SignupProps {}

function Signup() {
  return (
    <div className={styles.container}>
      <h2>Signup Page</h2>
      <form className={styles.form}>
        <label htmlFor="name">First Name </label>
        <input type="text" id="name" />

        <label htmlFor="surname">Last Name </label>
        <input type="text" id="surname" />

        <label htmlFor="surname">Email </label>
        <input type="text" id="email" />

        <label htmlFor="surname">Password </label>
        <input type="password" id="password" />
      </form>
    </div>
  );
}

export default Signup;
