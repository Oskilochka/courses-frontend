import React from "react";
import classnames from "classnames";
import styles from "./styles.module.scss";

// TODO: trigger on action

type ButtonVariant = "contained" | "outlined" | "text"
type ButtonType = "error" | "submit" | "text"

interface ButtonProps {
  id?: string
  label?: string,
  onChange?: (e: React.ChangeEvent<HTMLButtonElement>) => void,

  variant?: ButtonVariant,
  type?: ButtonType,

  disabled?: boolean,
  className?: string,

  icon?: React.ReactNode
}

// hover, disabled, focused, pressed, animation ?

export const Button = React.memo<ButtonProps>((
  {
    id,
    label,
    onChange,

    disabled,
    className,

    variant,
    type,

    icon,
  },
) => {
  return (
    <div className={classnames(styles.root, className)}>
      <button
        id={id}
        onChange={onChange}
        disabled={disabled}
      >
        {!!icon ? icon : null}
        {label}
      </button>
    </div>
  );
});

export default Button;
