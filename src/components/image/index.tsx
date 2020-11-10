/* eslint-disable jsx-a11y/alt-text */
import React, { FC, useEffect, useRef, useState } from "react";
import cx from "classnames";
import "./index.scss";

interface IProps {
  /** ratio: 图片的高/宽 */
  ratio?: number;
}

const Img: FC<React.ImgHTMLAttributes<{}> & IProps> = ({
  src,
  style = {},
  ratio = 1,
  className,
  ...props
}) => {
  const [width, setWidth] = useState<number | undefined>();
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const width = ref.current?.width;
    setWidth(width);
  }, []);
  return (
    <img
      ref={ref}
      className={cx("image", className)}
      onLoad={() => setWidth(undefined)}
      style={{
        width: width,
        height: width && width * ratio,
        ...style,
      }}
      src={src}
      {...props}
    />
  );
};

export default Img;
