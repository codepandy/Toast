import React from "react";
import * as ClientDOM from "react-dom/client";
import styles from "./index.less";
import classNames from "classnames";

export const Toast = ({ text, className = "", icon }) => {
  return (
    <div className={classNames(styles["wenmu-toast"], className)}>
      {icon ? icon : null}
      {text}
    </div>
  );
};

const toastDIV = document.createElement("div");

let toastRoot = null;
let timerId = null;

export default {
  show: (text, options = { time: 1500 }) => {
    if (timerId) {
      clearTimeout(timerId);
      toastRoot.unmount();
    }

    // 挂载
    toastRoot = ClientDOM.createRoot(toastDIV);
    toastRoot.render(<Toast text={text} {...options} />);
    document.body.appendChild(toastDIV);

    timerId = setTimeout(() => {
      toastRoot.unmount();
      if (document.body.contains(toastDIV)) {
        document.body.removeChild(toastDIV);
      }
      timerId = null;
    }, options.time || 1500);
  },
};
