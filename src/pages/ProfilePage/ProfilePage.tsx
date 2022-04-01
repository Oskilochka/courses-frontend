import React from "react";
import classnames from "classnames";
import styles from "./styles.module.scss";
import { Button, Header, Input } from "../../components";

interface ProfilePageProps {
}

export const ProfilePage = React.memo<ProfilePageProps>(() => {
  return (
    <div className={classnames(styles.root)}>
      <Header type={"h3"} label={"Profile Page"} />
      <img className={styles.img} alt="user-profile" />
      <Header type={"h5"} label={"Name Surname"} />
      <div>
        <Header type={"h4"} label={"Change password"} />
        <Input value={""} label={"Current password"} id={"cur-pass"} />
        <Input value={""} label={"New password"} id={"new-pass"} />
        <div>
          <Button label={"Cancel"} type={"cancel"} />
          <Button label={"Save"} type={"submit"} />
        </div>
      </div>
    </div>
  );
});

export default ProfilePage;
