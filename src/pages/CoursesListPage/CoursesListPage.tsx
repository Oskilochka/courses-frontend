import React from "react";
import classnames from "classnames";
import { CourseCard, Header } from "../../components";
import styles from "./styles.module.scss";

const list = [
  {
    id: "0",
    title: "Title 1",
    imgUrl: "https://www.adazing.com/wp-content/uploads/2019/02/open-book-clipart-03.png",
  },
  {
    id: "1",
    title: "Title 2",
    imgUrl: "https://www.adazing.com/wp-content/uploads/2019/02/open-book-clipart-03.png",
  },
  {
    id: "2",
    title: "Title 3",
    imgUrl: "https://www.adazing.com/wp-content/uploads/2019/02/open-book-clipart-03.png",
  },
];

interface CoursesPageProps {
}

export const CoursesListPage = React.memo<CoursesPageProps>(() => {
  return (
    <div className={classnames(styles.root)}>
      <Header type={"h2"} label={"Courses Page"} />
      <div className={styles.courseCards}>
        {list.map(item => (
          <CourseCard id={item.id} title={item.title} imgUrl={item.imgUrl} />
        ))}
      </div>
    </div>
  );
});

export default CoursesListPage;
