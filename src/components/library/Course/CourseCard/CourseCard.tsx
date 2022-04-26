import React from "react";
import styles from "./styles.module.scss";
import { Button, Header } from "../../../general";
import { Link } from "react-router-dom";
import { paths } from "../../../navigation";

interface CourseCardProps {
  id: string;
  title: string;
  imgUrl?: string;
}

export const CourseCard = React.memo<CourseCardProps>((
  {
    id,
    title,
    imgUrl,
  }) => {
  return (
    <div id={id} className={styles.root}>
      <Header type="h4" label={title} />
      <img className={styles.previewImg} src={imgUrl} alt="courseImg" />
      <Link to={`${paths.courses}${id}`}>
        <Button>
          See more
        </Button>
      </Link>
    </div>
  );
});

export default CourseCard;
