import React from "react";
import classnames from "classnames";
import styles from "./styles.module.scss";

// TODO: remake later to a general component
// for textarea, textField, timeField, NumberField, PasswordField etc
// Options: Character counter , icon ( eye )

export interface InputProps {
  id?: string
  label?: string,
  value: any,
  onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void,
  placeholder?: string,

  disabled?: boolean,
  className?: string,

  error?: boolean,
  errorText?: string,
}

export const Input = React.memo<InputProps>((
  {
    id,
    label,
    value,
    onChange,
    placeholder = "Type here...",
    error,
    errorText,
    disabled,
    className
  },
) => {
  return (
    <div className={classnames(styles.root, className)}>
      {label && <label htmlFor={id} title={label} />}
      <input
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
      />
      {error && <span>{errorText}</span>}
    </div>
  );
});

export default Input;
