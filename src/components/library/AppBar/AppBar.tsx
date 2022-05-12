import React from "react";
import { Link } from "react-router-dom";
import { paths } from "../../navigation";
import styles from "./styles.module.scss";

export const AppBar = React.memo(() => {
  return (
    <div className={styles.root}>
      <h3 className={styles.logo}>Courses</h3>
      <div>
        <Link to={paths.courses}>
          Courses
        </Link>
      </div>
      <Link to={paths.login}>
        Login
      </Link>
    </div>
  );
});

