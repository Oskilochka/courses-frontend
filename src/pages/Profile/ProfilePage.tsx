import React from "react";
import styles from "./styles.module.scss";
import { Button, ButtonType, Header, Input, Page } from "../../components";

interface ProfilePageProps {
}

export const ProfilePage = React.memo<ProfilePageProps>(() => {
  return (
    <Page header="Profile Page">
      <img className={styles.img} src={"https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300"} alt="user-profile" />
      <Header type={"h5"} label={"Name Surname"} />
      <div>
        <Header type={"h4"} label={"Change password"} />
        <Input value={""} label={"Current password"} id={"cur-pass"} />
        <Input value={""} label={"New password"} id={"new-pass"} />
        <div>
          <Button type={ButtonType.cancel}>Cancel</Button>
          <Button type={ButtonType.submit}>Save</Button>
        </div>
      </div>
    </Page>
  );
});

export default ProfilePage;
