import React from "react";
import classnames from "classnames";
import styles from "./styles.module.scss";

interface ProfilePageProps {
}

export const ProfilePage = React.memo<ProfilePageProps>(() => {
  return (
    <div className={classnames(styles.root)}>
      Profile Page
    </div>
  );
});

export default ProfilePage;
