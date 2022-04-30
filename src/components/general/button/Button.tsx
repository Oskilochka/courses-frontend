import React from "react";
import classnames from "classnames";
import styles from "./styles.module.scss";

// TODO: trigger on action
export enum ButtonVariant {
  contained = "contained",
  outlined = "outlined",
  text = "text",
}

export enum ButtonType {
  error = "error",
  submit = "submit",
  text = "text",
  link = "link",
  cancel = "cancel",
  warning = "warning",
}

interface ButtonProps {
  id?: string
  onChange?: (e: React.ChangeEvent<HTMLButtonElement>) => void,

  variant?: ButtonVariant,
  type?: ButtonType,

  disabled?: boolean,
  className?: string,

  icon?: React.ReactNode
  children?: React.ReactNode
}

//  disabled

export const Button = React.memo<ButtonProps>((
  {
    id,
    onChange,

    disabled,
    className,

    variant = ButtonVariant.text,
    type,

    icon,
    children,
  },
) => {
  return (
    <button
      id={id}
      onChange={onChange}
      disabled={disabled}
      className={classnames(styles.root, className, {
        [styles.contained ] : variant === ButtonVariant.contained,
        [styles.outlined ] : variant === ButtonVariant.outlined,
        [styles.variantText ] : variant === ButtonVariant.text,

        [styles.text ] : variant === ButtonVariant.text,
      })}
    >
      {children}
      {!!icon ? icon : null}
    </button>
  );
});

export default Button;
