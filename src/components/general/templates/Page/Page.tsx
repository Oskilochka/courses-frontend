import React from "react";
import classnames from "classnames";
import styles from "./styles.module.scss";
import { Header } from "../../Header";

export interface PageProps {
  children?: React.ReactNode,
  header?: string | React.ReactElement,
  className?: string,
  headerClassName?: string,
  contentClassName?: string,
}

// TODO: add permissions for page or create another page component that will be with permissions

export const Page = React.memo<PageProps>((
  {
    children,
    header,
    className,
    headerClassName,
    contentClassName,
  },
) => {
  return (
    <div className={classnames(styles.root, className)}>
      {
        header && <div className={classnames(styles.header, headerClassName)}>
          {typeof header === "string" ? <Header type={"h2"} label={header} /> : header}
          <hr className={styles.divider} />
        </div>
      }
      <div className={classnames(styles.content, contentClassName)}>
        {children}
      </div>
    </div>
  );
});

export default Page;
