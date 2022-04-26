import React from "react";
import styles from "./styles.module.scss";
import { Button, Header, Input, Page } from "../../components";

interface ProfilePageProps {
}

export const ProfilePage = React.memo<ProfilePageProps>(() => {
  return (
    <Page header="Profile Page">
      <img className={styles.img} alt="user-profile" />
      <Header type={"h5"} label={"Name Surname"} />
      <div>
        <Header type={"h4"} label={"Change password"} />
        <Input value={""} label={"Current password"} id={"cur-pass"} />
        <Input value={""} label={"New password"} id={"new-pass"} />
        <div>
          <Button type={"cancel"}>Cancel</Button>
          <Button type={"submit"}>Save</Button>
        </div>
      </div>
    </Page>
  );
});

export default ProfilePage;
