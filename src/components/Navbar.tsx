import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './../assets/images/logo-red.png';
import Ticket from '../assets/images/Ticket.svg';
import Closed from '../assets/images/Closed.svg';
import Open from '../assets/images/Open.svg';
import League from '../assets/images/2League.png';

// <ul className="2xl:hidden xl:hidden lg:hidden sm:flex 2xl:text-xl justify-center items-center space-y-8 xs:space-x-6 xs:space-y-0"></ul>;

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav className={`${toggle ? 'bg-black fixed w-screen h-screen inset-0' : ''} `}>
        <img src={League} className="w-full " />
        <div className={`flex justify-center	items-center `}>
          <div className="basis-5/12 justify-self-center	self-center ">
            <div className="flex justify-start ml-12 gap-x-8 border-b border-zinc-600	h-20 text-white sm:h-16">
              <Link
                to="/"
                className="self-center 2xl:block xl:block lg:block sm:hidden test:hidden "
              >
                О КЛУБЕ
              </Link>
              <Link
                to="/"
                className="self-center 2xl:block xl:block lg:block sm:hidden test:hidden  "
              >
                КОМАНДА
              </Link>
              <Link
                to="/"
                className="self-center 2xl:block xl:block lg:block sm:hidden test:hidden  "
              >
                О СТАДИОНЕ
              </Link>
              <Link
                to="/"
                className="self-center 2xl:block xl:block lg:block sm:hidden test:hidden  "
              >
                БОЛЕЛЬЩИКАМ
              </Link>
              <button
                className="2xl:hidden xl:hidden lg:hidden sm:block xs:block"
                onClick={handleToggle}
              >
                {!toggle ? (
                  <img src={Closed} className="transition-all duration-200		" />
                ) : (
                  <img src={Open} className="transition-all duration-200		" />
                )}
              </button>
            </div>
          </div>
          <div className="basis-2/12	justify-self-center	self-center text-center h-20 pt-5	sm:h-16 ">
            <div className="flex justify-center	">
              <img src={logo} className="sm:h" />
            </div>
          </div>
          <div className=" basis-5/12  w-full pb-0 text-white ">
            <div className="flex place-items-stretch justify-end	border-zinc-600	border-b	gap-x-8">
              <div className="flex gap-x-8  justify-between  ">
                <Link
                  to="/"
                  className="self-center justify-self-end 2xl:block xl:block lg:block sm:hidden test:hidden "
                >
                  КОНТАКТЫ
                </Link>
                <Link
                  to="/"
                  className="self-center 2xl:block xl:block lg:block sm:hidden test:hidden "
                >
                  МАТЧИ
                </Link>
              </div>
              <div className="flex ">
                <button className="bg-red-700 w-44 h-20 sm:h-16 text-white shadow-md -mb-0.25 2xl:block xl:block lg:block sm:hidden test:hidden ">
                  КУПИТЬ БИЛЕТ
                </button>
                <button className="bg-red-700 w-20 h-16 2xl:hidden xl:hidden lg:hidden sm:block xs:block">
                  <img src={Ticket} className="mx-auto" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {toggle ? (
          <div className="text-white font-bold text-2xl flex flex-col gap-y-5 bg-black w-full min-h-screen h-full pt-5 pl-12 	overscroll-none overflow-hidden	">
            <Link to="/">О КЛУБЕ</Link>
            <Link to="/">КОМАНДА</Link>
            <Link to="/">О СТАДИОНЕ</Link>
            <Link to="/">БОЛЕЛЬЩИКАМ</Link>
            <Link to="/">КОНТАКТЫ</Link>
            <Link to="/">МАТЧИ</Link>
          </div>
        ) : (
          ''
        )}
      </nav>
    </>
  );
}

export default Navbar;
