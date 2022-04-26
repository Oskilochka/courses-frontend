import React from "react";
import classnames from "classnames";
import { Page } from "../../../components";
import styles from "./styles.module.scss";

interface CoursesPageProps {
}

export const CoursePage = React.memo<CoursesPageProps>(() => {
  return (
    <Page header="Courses Page" className={classnames(styles.root)}>
      Course name
    </Page>
  );
});

export default CoursePage;
