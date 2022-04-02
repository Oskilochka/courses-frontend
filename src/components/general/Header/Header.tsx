import React from "react";
import styles from "./styles.module.scss";

interface TitleProps {
  id?: string
  label?: string,
  type: "h1" | "h2" | "h3" | "h4" | "h5"
}

export const Header = React.memo<TitleProps>((
  {
    id,
    label,
    type,
  },
) => React.createElement(type, { id, className: styles.root }, label));

export default Header;
