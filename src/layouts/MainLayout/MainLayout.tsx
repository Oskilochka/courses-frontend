import React from "react";
import { Route, Routes } from "react-router";
import classnames from "classnames";
import { AppBar, paths } from "../../components";
import { CoursesPage, ProfilePage } from "../../pages";
import styles from "./styles.module.scss";

interface MainLayoutProps {
}

export const MainLayout = React.memo<MainLayoutProps>(() => {
  return (
    <div className={classnames(styles.root)}>
      <AppBar />
      <div>
        <Routes>
          <Route path={paths.profile} element={<ProfilePage /> } />
          <Route path={paths.courses} element={<CoursesPage /> } />
        </Routes>
      </div>
    </div>
  );
});

export default MainLayout;
