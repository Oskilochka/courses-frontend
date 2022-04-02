import React from "react";
import { Button, Input } from "../../components";
import styles from "./styles.module.scss";

export const StoryBook = React.memo(() => {
  return (
    <div className={styles.wrap}>
      <Block title="Inputs">
        <Input value={"dfsdf"} />
      </Block>
      <Block title="Buttons">
        <Button label={"Btn"} />
      </Block>
    </div>
  );
});

const Block = React.memo<{ title?: string, children: React.ReactNode }>((
  {
    title,
    children,
  }) => {
  return (
    <div className={styles.block}>
      <h2>{title}</h2>
      <div>
        {children}
      </div>
    </div>
  );
});

export default StoryBook;
