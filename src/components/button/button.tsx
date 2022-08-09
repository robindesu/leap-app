import { ButtonHTMLAttributes } from "react";

import styles from "./button.module.css";

type ButtonProps = {
  label: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ label, ...props }: ButtonProps) {
  return (
    <button {...props} className={styles.button}>
      {label}
    </button>
  );
}

export default Button;
