import React from "react";
import classnames from "classnames";
import styles from "./styles.module.scss";

// TODO: trigger on action

type ButtonVariant = "contained" | "outlined" | "text"
type ButtonType = "error" | "submit" | "text" | "link" | "cancel"


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

// hover, disabled, focused, pressed, animation ?

export const Button = React.memo<ButtonProps>((
  {
    id,
    onChange,

    disabled,
    className,

    variant,
    type,

    icon,
    children,
  },
) => {
  return (
    <div className={classnames(styles.root, className)}>
      <button
        id={id}
        onChange={onChange}
        disabled={disabled}
      >
        {children}
        {!!icon ? icon : null}
      </button>
    </div>
  );
});

export default Button;
