import React from "react";
import styles from "./styles.module.scss";
import Button from "../../general/button";
import { Input } from "../../general";

interface SearchBlockProps {
}

export const SearchBlock = React.memo<SearchBlockProps>((
  {}) => {
  const [ findText, setFindText ] = React.useState<string | undefined | number>(undefined);

  return (
    <div className={styles.root}>
      <Input value={findText} onChange={setFindText} />
      <Button>Find</Button>
    </div>
  );
});

export default SearchBlock;
