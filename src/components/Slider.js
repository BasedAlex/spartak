import React, { useEffect, useState, Children, cloneElement, useRef } from 'react';
import './Slider.css';
import strokeLeft from '../../src/assets/images/StrokeLeft.svg';
import arrowLeft from '../../src/assets/images/StrokeLeftArrow.svg';
import strokeRight from '../../src/assets/images/StrokeRight.svg';
import arrowRight from '../../src/assets/images/StrokeRightArrow.svg';
import { Page } from './Page';
import { SliderContext } from './Slider-Context.js';

const PAGE_WIDTH = 512;

export const Slider = ({ children }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);
  const [width, setWidth] = useState(512);
  const windowElRef = useRef();

  useEffect(() => {
    const resizeHandler = () => {
      const _width = windowElRef.current.offsetWidth;
      setWidth(_width);
      setOffset(0);
    };
    resizeHandler();
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  const handleLeft = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + width;
      return Math.min(newOffset, 0);
    });
  };
  const handleRight = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - width;
      const maxOffset = -(width * (children.length - 4));
      return Math.max(newOffset, maxOffset);
    });
  };

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: '100%',
            minWidth: `${width}px`,
            maxWidth: `${width}px`,
          },
        });
      })
    );
  }, []);

  return (
    <SliderContext.Provider value={{ width: PAGE_WIDTH }}>
      <div className="main-container mx-auto">
        <button className="arrow absolute 2xl:left-32 z-40" onClick={handleLeft}>
          <img
            src={arrowLeft}
            className="absolute mt-3 ml-3 xs:hidden sm:hidden lg:hidden xl:block 2xl:block"
          />
          <img
            src={strokeLeft}
            className="z-30 w-10 xs:hidden sm:hidden lg:hidden xl:block 2xl:block"
          />
        </button>
        <div
          className="window justify-between xs:overflow-scroll sm:lg:overflow-scroll lg:overflow-scroll	xl:overflow-hidden 2xl:overflow-hidden	"
          ref={windowElRef}
        >
          <div
            className="items-container gap-x-8 [&:nth-child(4)]:-p-5"
            style={{
              transform: `translateX(${offset}px)`,
            }}
          >
            {pages}
          </div>
        </div>
        <button className="arrow absolute 2xl:right-36 xl:right-32 z-40" onClick={handleRight}>
          <img
            src={arrowRight}
            className="absolute mt-3 ml-3.5 xs:hidden sm:hidden lg:hidden xl:block 2xl:block"
          />
          <img
            src={strokeRight}
            className="z-30 w-10 xs:hidden sm:hidden lg:hidden xl:block 2xl:block"
          />
        </button>
      </div>
    </SliderContext.Provider>
  );
};

Slider.Page = Page;
