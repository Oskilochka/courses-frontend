import React from "react";
import classnames from "classnames";
import classNames from "classnames";
import styles from "./styles.module.scss";

// TODO: remake later to a general component
// for textarea, textField, timeField, NumberField, PasswordField etc
// Options: Character counter , icon ( eye )

type TextFieldVariant = "outlined" | "standard"

export interface InputProps {
  id?: string
  label?: string,
  value: string | undefined | number,
  onChange?: (e?: string | undefined | number) => void,
  placeholder?: string,

  required?: boolean,
  variant?: TextFieldVariant,

  type?: string,
  autoComplete?: string,

  showClearBtn?: boolean,

  readOnly?: boolean,

  disabled?: boolean,
  className?: string,

  error?: boolean,
  helperText?: string,

}

export const Input = React.memo<InputProps>((
  {
    id,
    label,
    value,
    onChange,
    placeholder = "Type here...",
    error,
    helperText,
    disabled,
    className,
    variant = "standard",
  },
) => {
  const onChangeHandler = React.useCallback((e) => {
    onChange?.(e.target.value);
  }, [ onChange ]);

  return (
    <div className={classnames(styles.root, className)}>
      {label ? <label className={styles.label} htmlFor={id}>label</label> : null}
      <input
        id={id}
        value={value}
        onChange={onChangeHandler}
        disabled={disabled}
        placeholder={placeholder}
        className={styles.input}
      />
      {helperText && <span className={classNames(styles.helperText, {
        [styles.errorText]: error,
      })}>{helperText}</span>}
    </div>
  );
});

export default Input;
