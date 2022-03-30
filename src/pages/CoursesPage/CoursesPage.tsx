import React from "react";
import classnames from "classnames";
import styles from "./styles.module.scss";

interface CoursesPageProps {
}

export const CoursesPage = React.memo<CoursesPageProps>(() => {
  return (
    <div className={classnames(styles.root)}>
      Courses Page
    </div>
  );
});

export default CoursesPage;
