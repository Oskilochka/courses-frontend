import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { paths } from "../../navigation";

export const AppBar = React.memo(() => {
  return (
    <div className={styles.root}>
      <h3 className={styles.logo}>Courses</h3>
      <div>
          <button>
            <Link to={paths.courses}>
              Courses
            </Link>
          </button>
      </div>
      <h3>Login</h3>
    </div>
  );
});

export default AppBar;
