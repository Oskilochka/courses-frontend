import React from "react";
import classnames from "classnames";
import styles from "./styles.module.scss";
import { AuthForm } from "./form";

interface AuthPageProps {
}

export const AuthPage = React.memo<AuthPageProps>(() => {
  return (
    <div className={classnames(styles.root)}>
      <h4> Welcome on platform</h4>
      <AuthForm />
    </div>
  );
});

export default AuthPage;
