import React from "react";
import "./index.scss";

const codeMsgMap = {
  default: "网络出错，轻触屏幕重新加载",
  "BULLET-0": "加载超时，请点击重试",
};

interface IProps {
  code?: keyof typeof codeMsgMap;
  msg?: string;
  onClick?: () => void;
}

const FailedPage: React.FC<IProps> = ({
  msg = "",
  code = "default",
  onClick = () => {
    window.location.reload();
  },
}) => {
  return (
    <div className="page-failed-component" onClick={onClick}>
      <div className="error-bg"></div>
      <div className="error-msg">{msg || codeMsgMap[code]}</div>
    </div>
  );
};

export default FailedPage;
