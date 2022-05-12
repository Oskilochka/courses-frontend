import React from "react";
import classnames from "classnames";
import styles from "./styles.module.scss";

// TODO: trigger on action
export enum ButtonVariant {
  contained = "contained",
  outlined = "outlined",
  text = "text",
}

interface ButtonProps {
  id?: string
  onChange?: (e: React.ChangeEvent<HTMLButtonElement>) => void,

  variant?: ButtonVariant,

  disabled?: boolean,
  className?: string,

  icon?: React.ReactNode
  children?: React.ReactNode
}


export const Button = React.memo<ButtonProps>((
  {
    id,
    onChange,

    disabled = true,
    className,

    variant = ButtonVariant.outlined,

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
        [styles.contained]: variant === ButtonVariant.contained,
        [styles.outlined]: variant === ButtonVariant.outlined,
        [styles.variantText]: variant === ButtonVariant.text,
        [styles.disabled]: disabled
      })}
    >
      {children}
      {!!icon ? icon : null}
    </button>
  );
});

export default Button;
