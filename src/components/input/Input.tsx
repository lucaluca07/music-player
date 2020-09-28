import React, { forwardRef, useRef, useImperativeHandle } from "react";
import classNames from "classnames";
import Icon from "../icon";

interface IProps {
  onEnter?: React.KeyboardEventHandler<HTMLInputElement>;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  allowClear?: boolean;
}

const Input = forwardRef<
  { focus?: () => void; blur?: () => void },
  React.InputHTMLAttributes<any> & IProps
>(
  (
    {
      onEnter,
      allowClear,
      className,
      addonBefore,
      addonAfter,
      style,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(
      ref,
      () => ({
        focus: () => {
          inputRef.current?.focus();
        },
        blur: () => {
          inputRef.current?.blur();
        },
      }),
      [inputRef]
    );

    return (
      <div style={style} className={classNames("input-wrapper", className)}>
        {addonBefore}
        <input
          ref={inputRef}
          className={classNames("input")}
          onKeyDown={(e) => {
            if(!e.repeat && e.key === "Enter") {
              onEnter?.(e);
            }
          }}
          type="text"
          {...props}
        />
        {allowClear && <Icon type="close" />}
        {addonAfter}
      </div>
    );
  }
);

export default Input;
