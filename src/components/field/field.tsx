import { InputHTMLAttributes } from "react";

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

export default renderField;
