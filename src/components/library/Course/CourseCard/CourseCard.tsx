import React from "react";
import { Button, Header } from "../../../general";
import { Link } from "react-router-dom";
import { paths } from "../../../navigation";
import styles from "./styles.module.scss";
import { FavouriteButton } from "../../buttons";

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
      <FavouriteButton />
      <img className={styles.previewImg} src={imgUrl} alt="courseImg" />
      <Header type="h4" label={title} />
      <Link to={`${paths.courses}${id}`}>
        <Button className={styles.btn}>
          See more
        </Button>
      </Link>
    </div>
  );
});

export default CourseCard;
