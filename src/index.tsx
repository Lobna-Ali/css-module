import * as React from "react";
import { render } from "react-dom";
import Button, { Sizes, Themes } from './components/Button/index'
import styles from "./styles.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Button config={{text: 'Lorem ipsum'}} styling = {{theme: Themes.secondary, size: Sizes.small, fullWidth: true}}></Button>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
