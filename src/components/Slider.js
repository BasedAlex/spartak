import React, { useEffect, useState, Children, cloneElement } from 'react';
import './Slider.css';
import strokeLeft from '../../src/assets/images/StrokeLeft.svg';
import arrowLeft from '../../src/assets/images/StrokeLeftArrow.svg';
import strokeRight from '../../src/assets/images/StrokeRight.svg';
import arrowRight from '../../src/assets/images/StrokeRightArrow.svg';
import { Page } from './Page';

// const PAGE_WIDTH = 512;

const PAGE_WIDTH = 512;

export const Slider = ({ children }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  const handleLeft = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH;
      return Math.min(newOffset, 0);
    });
  };
  const handleRight = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH;
      const maxOffset = -(PAGE_WIDTH * (pages.length - 3));
      return Math.max(newOffset, maxOffset);
    });
  };

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: '100%',
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          },
        });
      })
    );
  }, []);

  return (
    <div className="main-container ">
      <button className="arrow" onClick={handleLeft}>
        <img src={arrowLeft} className="absolute mt-3 ml-3" />
        <img src={strokeLeft} className="z-30 w-10" />
      </button>
      <div className="window">
        <div
          className="items-container justify-center gap-x-10	"
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {pages}
        </div>
      </div>
      <button className="arrow" onClick={handleRight}>
        <img src={arrowRight} className="absolute mt-3 ml-3.5" />
        <img src={strokeRight} className="z-30 w-10" />
      </button>
    </div>
  );
};

Slider.Page = Page;
