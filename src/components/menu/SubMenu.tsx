import React, { useContext, useMemo, useEffect, useState, useRef } from "react";
import classNames from "classnames";
import menuContext from "./store";

interface SubMenuProps {
  title: React.ReactNode;
  eventKey: string;
  arrowDisabled?: boolean;
}

const SubMenu: React.FC<SubMenuProps> = ({
  title,
  children,
  eventKey,
  arrowDisabled,
}) => {
  const initRef = useRef(false)
  const { state, dispatch } = useContext(menuContext);
  const [visible, setVisible] = useState(state?.openKeys?.includes(eventKey));
  const isOpen = useMemo(() => {
    return state?.openKeys?.includes(eventKey);
  }, [eventKey, state]);

  const menuRef = useRef<HTMLUListElement>(null);
  // 缓慢展开收起的动画
  useEffect(() => {
    if (arrowDisabled || !menuRef.current || !initRef.current) {
      initRef.current = true;
      return;
    }
    setTimeout(() => {
      setVisible(isOpen);
      menuRef?.current?.setAttribute("style", "");
    }, 300);
    const el = menuRef.current;
    el.style.display = "block";
    el.style.height = "auto";
    const height = window.getComputedStyle(el).height;
    if (isOpen) {
      el.style.height = "0";
      setTimeout(() => {
        el.style.height = height;
        el.style.opacity = "1";
      }, 0);
    } else {
      el.style.height = height;
      setTimeout(() => {
        el.style.height = "0px";
        el.style.opacity = "0";
      }, 0);
    }
  }, [arrowDisabled, isOpen]);

  return (
    <li
      className={classNames("menu-submenu", {
        "menu-submenu-open": arrowDisabled ? true : isOpen,
      })}
    >
      <div
        onClick={() => {
          if (arrowDisabled) return;
          dispatch?.({
            type: "UPDATE_OPEN_KEYS",
            payload: isOpen
              ? state?.openKeys.filter((key) => key !== eventKey)
              : [...(state?.openKeys || []), eventKey],
          });
        }}
        className={classNames("menu-submenu-title")}
      >
        {!arrowDisabled && <i className="menu-submenu-arrow" />}
        <span>{title}</span>
      </div>
      <ul
        ref={menuRef}
        className={classNames("menu", {
          "menu-hidden": arrowDisabled ? false : !visible,
        })}
      >
        {children}
      </ul>
    </li>
  );
};

export default SubMenu;
