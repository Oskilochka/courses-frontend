import React from "react";
import classnames from "classnames";
import { Button, Header, Page } from "../../../components";
import styles from "./styles.module.scss";
import mock from "./mock.json";

interface CoursesPageProps {
  title?: string,
  image?: string
}

export const CoursePage = React.memo<CoursesPageProps>((
  {
    title,
  }) => {

  // get url id and make request

  return (
    <Page header={mock.title} className={classnames(styles.root)}>
      <div>
        <img className={styles.img} src={mock.imageUrl} alt="logo" />
      </div>
      <p> {mock.description}</p>
      <div>
        Chapters ( parts of course )
        <div>
          List of parts
          <div>
            Part 1
          </div>
          <div>
            Part 2
          </div>
        </div>
      </div>
      <Button>Add to favourite</Button>
      <Button>Add to list ( selects of list ) </Button>
      <Button>Start a course or continue + ( show progress ) </Button>
    </Page>
  );
});

export default CoursePage;
