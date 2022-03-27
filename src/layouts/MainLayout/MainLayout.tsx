import React from "react";
import classnames from "classnames";
import { AppBar } from "../../components";
import styles from "./styles.module.scss";

interface MainLayoutProps {
}

export const MainLayout = React.memo<MainLayoutProps>(() => {
  return (
    <div className={classnames(styles.root)}>
      <AppBar />
      {/*<MainConten />*/}
      {/*<SideBar />*/}
    </div>
  );
});

export default MainLayout;
