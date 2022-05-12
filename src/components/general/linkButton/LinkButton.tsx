import React from "react";
import classnames from "classnames";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

// TODO: trigger on action

interface LinkButtonProps {
  id?: string
  onChange?: (e: React.ChangeEvent<HTMLButtonElement>) => void,

  // variant?: ButtonVariant,

  disabled?: boolean,
  className?: string,

  icon?: React.ReactNode
  children?: React.ReactNode,

  to: string
}


export const LinkButton = React.memo<LinkButtonProps>((
  {
    id,
    to,
    onChange,

    disabled = true,
    className,

    icon,
    children,
  },
) => {
  return (
    <Link to={to}>
      <button
        id={id}
        // onChange={onChange}
        disabled={disabled}
        className={classnames(styles.root, className, {
          [styles.disabled]: disabled
        })}
      >
        {children}
        {!!icon ? icon : null}
      </button>
    </Link>

  );
});

export default LinkButton;
