import React from 'react';
import { useContext } from 'react';
import { SliderContext } from './Slider-Context';

export const Page = ({ children }) => {
  const { width } = useContext(SliderContext);

  return (
    <div className="h-full" style={{ minWidth: `${width}px`, maxWidth: `${width}px` }}>
      {children}
    </div>
  );
};
