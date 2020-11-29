import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import Button from '../button';
import './index.scss';
import Icon from '../icon';
import { IBanner } from '@/service/api/common';

interface IProps {
  data: IBanner[];
}

const baseStyle = {
  marginTop: 200 * 0.1,
  height: 200 * 0.8,
  width: 540 * 0.8,
};

const getSlideStyle = (i: number, index: number, len: number) => {
  // 第一张
  if (index === 0 && i + 1 === len) {
    return {
      left: 0,
      ...baseStyle,
    };
  }
  // 最后一张
  if (index === len - 1 && i === 0) {
    return {
      right: 0,
      ...baseStyle,
    };
  }
  // left
  if (i < index) {
    const offset = index - i - 1;
    return {
      left: offset * 540 * 0.2,
      zIndex: 999 - offset,
      ...baseStyle,
    };
  }
  // right
  if (i > index) {
    const offset = index + 1 - i;
    return {
      right: offset * 300,
      zIndex: 999 + offset,
      ...baseStyle,
    };
  }
  // center
  return {
    left: '50%',
    transform: `translateX(-50%)`,
    zIndex: 1000,
  };
};

const Carousel: React.FC<IProps> = ({ data }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      const i = index === data.length - 1 ? 0 : index + 1;
      setIndex(i);
    }, 5000);
  }, [data.length, index]);

  return (
    <div className='carousel'>
      <ul className='carousel-container'>
        {data.map((item, i) => {
          return (
            <li
              style={getSlideStyle(i, index, data.length)}
              className={classnames('carousel-slide', {
                'carousel-slide-active': index === i,
              })}
              key={item.imageUrl}>
              <img alt='' src={item.imageUrl} />
            </li>
          );
        })}
      </ul>
      <Button className='carousel-button carousel-button-prev'>
        <Icon type='backward' />
      </Button>
      <Button className='carousel-button carousel-button-next'>
        <Icon type='forward' />
      </Button>
      <ul className='carousel-pagination carousel-pagination-bullets'>
        {data.map((item, i) => {
          return (
            <li
              className={classnames('carousel-pagination-bullet', {
                'carousel-pagination-bullet-active': index === i,
              })}
              key={item.imageUrl}></li>
          );
        })}
      </ul>
    </div>
  );
};

export default Carousel;
