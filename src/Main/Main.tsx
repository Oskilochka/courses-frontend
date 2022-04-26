import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router";
import { AppBar, paths } from "../components";
import { CoursePage, CoursesListPage, LoginPage, ProfilePage } from "../pages";
import { StoryBook } from "../components/StoryBook";

function Main() {
  return (
    <Router>
      <div className="main-root">
        <AppBar />
        <div className="content">
          <Routes>
            <Route path={paths.profile} element={<ProfilePage />} />
            <Route path={paths.courses} element={<CoursesListPage />} />
            <Route path={`${paths.courses}:id`} element={<CoursePage />} />
            <Route path={paths.login} element={<LoginPage />} />

            {/* UI story book */}
            <Route path={paths.storyBook} element={<StoryBook />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Main;
