import React from 'react';

interface IProps {
  list: string[]
}

const Swiper: React.FC = () => {
  return (
    <div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div>prev</div>
      <div>next</div>
      <ul>
      </ul>
    </div>
  )
}

export default Swiper;