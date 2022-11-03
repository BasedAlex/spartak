import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../assets/images/logo-red.png';

function Navbar() {
  return (
    <>
      <nav className=" ">
        <div className="flex justify-center	items-center">
          <div className="basis-5/12 justify-self-center	self-center ">
            <div className="flex justify-start ml-12 gap-x-8 border-b border-zinc-600	h-20 text-white">
              <Link to="/" className="self-center">
                О КЛУБЕ
              </Link>
              <Link to="/" className="self-center">
                КОМАНДА
              </Link>
              <Link to="/" className="self-center">
                О СТАДИОНЕ
              </Link>
              <Link to="/" className="self-center">
                БОЛЕЛЬЩИКАМ
              </Link>
            </div>
          </div>
          <div className="basis-2/12	justify-self-center	self-center text-center h-20 pt-5	">
            <div className="flex justify-center	">
              <img src={logo} className="" />
            </div>
          </div>
          <div className=" basis-5/12  w-full pb-0 text-white ">
            <div className="flex place-items-stretch justify-end	border-zinc-600	border-b	gap-x-8">
              <div className="flex gap-x-8  justify-between  ">
                <Link to="/" className="self-center justify-self-end ">
                  КОНТАКТЫ
                </Link>
                <Link to="/" className="self-center">
                  МАТЧИ
                </Link>
              </div>
              <div className="flex">
                <button className="bg-red-700 w-44 h-20 text-white shadow-md -mb-0.25 ">
                  КУПИТЬ БИЛЕТ
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
