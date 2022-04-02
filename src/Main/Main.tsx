import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router";
import { AppBar, paths } from "../components";
import { LoginPage, CoursesListPage, ProfilePage } from "../pages";
import { StoryBook } from "../pages/StoryBook";

function Main() {
  return (
    <Router>
      <div className="main-root">
        <AppBar />
        <div className="content">
          <Routes>
            <Route path={paths.profile} element={<ProfilePage />} />
            <Route path={paths.courses} element={<CoursesListPage />} />
            <Route path={paths.login} element={<LoginPage />} />

            {/* UI story book */}
            <Route path={paths.storyBook} element={<StoryBook />} />
          </Routes>

        </div>

        {/*Switch*/}
        {/*<Redirect exact from="/" to="/story-book" />*/}
        {/*<UnauthorizedRoute exact path="/login" render={() => (*/}
        {/*  <Layout subSystemName={"Mimic"}>*/}
        {/*    <DefaultLoginHandler component={LoginForm} />*/}
        {/*  </Layout>*/}
        {/*)} />*/}
        {/*<ProtectedRoute exact={false} unAuthPath={"/login"} path="/" render={() => {*/}
        {/*  return (*/}
        {/*    <MainLayout>*/}
        {/*      <StoryBook />*/}
        {/*    </MainLayout>*/}
        {/*  );*/}
        {/*}} />*/}
      </div>
    </Router>
  );
}


export default Main;
