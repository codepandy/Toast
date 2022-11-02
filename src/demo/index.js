import React from "react";
import { createRoot } from "react-dom/client";
import Toast from "../index";
import styles from "./index.less";
import icon from "./icon.png";

function Icon() {
  return <img src={icon} alt="" className={styles.icon} />;
}
function Main() {
  const onClick = () => {
    Toast.show("hello,everyone", {
      className: styles.customcss,
      icon: <Icon />,
    });
  };
  return <section onClick={onClick}>hello</section>;
}

const root = createRoot(document.getElementById("root"));
root.render(<Main />);

// ReactDOM.render(<Main />, document.getElementById("root"));
