import React from "react";
import styles from "./styles.module.scss";
import { Button, Title } from "../../../general";

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
      <Title type="h4" label={title} />
      <img className={styles.img} src={imgUrl} alt="courseImg" />
      <Button label="See more" />
    </div>
  );
});

export default CourseCard;
