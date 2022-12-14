import React from 'react';
import Navbar from '../components/Navbar';
import flag from '../../src/assets/images/flag-ru.png';
// import arrowR from '../../src/assets/images/ArrowRight.svg';
import HMK from '../../src/assets/images/Himik.png';
import SPK from '../../src/assets/images/SpartakKostroma.png';
import TVR from '../../src/assets/images/Tver.png';
import DNM from '../../src/assets/images/DinamoVologda.png';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import spartakStroke from '../../src/assets/images/spartakStroke.svg';
import kostromaStroke from '../../src/assets/images/kostromaStroke.svg';
import spartakStrokeFull from '../../src/assets/images/spartakStrokeFull.svg';
import kostromaStrokeFull from '../../src/assets/images/kostromaStrokeFull.svg';
import TeamCard from '../components/TeamCard';
import TeamRoles from '../components/TeamRoles';
import StaffCard from '../components/StaffCard';
import AdminCard from '../components/AdminCard';
import scb from '../../src/assets/images/scb.png';
import sportmaster from '../assets/images/sportmasterlogo.png';
import rfu from '../../src/assets/images/RFU.png';
import scblogo from '../../src/assets/images/scblogo.svg';
import rfso from '../../src/assets/images/RFSO.png';
import '../App.css';
import spkWhite from '../../src/assets/images/_1.svg';
import vk from '../../src/assets/images/vk.svg';
import ok from '../../src/assets/images/ok.svg';
import tg from '../../src/assets/images/tg.svg';

import strokeRight from '../../src/assets/images/StrokeRight.svg';
import arrowRight from '../../src/assets/images/StrokeRightArrow.svg';

function main() {
  return (
    <>
      <section className=" showBg ">
        <div
          className="relative z-50
        "
        >
          <Navbar />
        </div>

        <div className="ml-20  w-2/3 sm:w-152 pb-80 mt-60 text-white 2xl:mx-72 sm:mx-16 test:mx-6">
          <img src={flag} className="w-16 h-9" />
          <p className="2xl:text-4xl xl:text-4xl lg:text-3xl sm:text-5xl  w-full  text-start font-bold	">
            {'??????????????????  ??? ???????????????????? ???????????????????? ???????? ???? ????????????????'}
          </p>
          <p className="text-base	pt-4">?????????????? ?? 1959 ????????</p>
          <button className="mt-10 w-36 h-12 border">??????????????????</button>
        </div>
      </section>
      <section className="mt-24 w-full ">
        <div className="flex justify-between 2xl:mx-72 sm:mx-16 test:mx-6">
          <h3 className="text-2xl	font-bold ">?????????? 2022-23</h3>
          <Link to="/" className="flex">
            <p className="text-sm font-bold text-neutral-500 2xl:w-28 self-center">?????? ??????????</p>
            <div className="my-auto">
              <svg
                width="18"
                height="18"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 14L8 8L2 2" stroke="#A7A8AA" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            </div>
          </Link>
        </div>
        <div className="test:overflow-x-auto">
          <Card />
        </div>
      </section>
      <section className="mt-36 mb-20 ">
        <div className="flex justify-between 2xl:mx-72 sm:mx-16 test:mx-6">
          <h3 className=" text-2xl font-bold ">?????????????????? ??????????????</h3>
          <Link to="/" className="flex jusitfy-">
            <p className="text-sm  font-bold text-neutral-500 2xl:w-44 self-center">
              ???????????????? ????????????
            </p>
            <div className="my-auto">
              <svg
                width="18"
                height="18"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 14L8 8L2 2" stroke="#A7A8AA" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            </div>
          </Link>
        </div>
        <div className="2xl:mx-72 sm:mx-16 test:mx-6">
          <div className="grid xl:grid-cols-15 lg:grid-cols-12 sm:grid-cols-12 xxs:grid-cols-10   2xl:mt-5 xl:mt-5 sm:mt-0 ms:mx-12 test:mx-4 h-20 border-b content-center	items-center ">
            <div className="font-bold text-neutral-400">#</div>
            <div className="font-bold text-neutral-400 sm:col-start-2 xxs:col-start-3 xxs:col-end-6">
              ????????
            </div>
            <div className="font-bold text-neutral-400 justify-self-center">??</div>
            <div className="font-bold text-neutral-400 justify-self-center">??</div>
            <div className="font-bold text-neutral-400 justify-self-center">??</div>
            <div className="font-bold text-neutral-400 justify-self-center">??</div>
            <div className="font-bold text-neutral-400 justify-self-center col-start-10 col-end-12 2xl:block sm:block xxs:hidden ">
              ??
            </div>
            <div className="font-bold text-neutral-400 justify-self-center">??</div>
            <div></div>
            <div></div>
          </div>
          <div className="grid  xl:grid-cols-15 lg:grid-cols-12 sm:grid-cols-12 xxs:grid-cols-10  ms:mx-12 test:mx-4 h-20 content-center items-center ">
            <div className="flex justify-between	items-center">
              <div className="justify-self-start w-10">6</div>
              <img src={HMK} className="w-12 h-12 place-self-center	ms:ml-6 xxs:ml-4 sm:ml-1 mr-6" />
            </div>

            <div className="sm:col-start-2 xxs:col-start-3 xxs:col-end-6">??????????</div>
            <div className="justify-self-center">5</div>
            <div className="justify-self-center">2</div>
            <div className="justify-self-center">1</div>
            <div className="justify-self-center">2</div>
            <div className="justify-self-center col-start-10 col-end-12 2xl:block sm:block xxs:hidden ">
              6-4 (-2)
            </div>
            <div className="justify-self-center">7</div>
            <div className="justify-self-end col-start-15 2xl:block xl:block lg:hidden xxs:hidden">
              ?? ?? ?? ?? ?? _
            </div>
          </div>
          <div className="grid xl:grid-cols-15 lg:grid-cols-12 sm:grid-cols-12 xxs:grid-cols-10   ms:mx-12 test:mx-4  h-20 content-center items-center ">
            <div className="flex justify-between	items-center">
              <div className="justify-self-start w-10">7</div>
              <img src={DNM} className="w-12 h-12 place-self-center	ms:ml-6 xxs:ml-4 sm:ml-1 mr-6" />
            </div>

            <div className="sm:col-start-2 xxs:col-start-3 xxs:col-end-6">???????????? ??????????????</div>
            <div className="justify-self-center">5</div>
            <div className="justify-self-center">2</div>
            <div className="justify-self-center">1</div>
            <div className="justify-self-center">2</div>
            <div className="justify-self-center col-start-10 col-end-12 2xl:block sm:block xxs:hidden ">
              6-4 (-2)
            </div>
            <div className="justify-self-center">7</div>
            <div className="justify-self-end col-start-15 2xl:block xl:block lg:hidden xxs:hidden">
              ??
            </div>
          </div>
          <div className="bg-slate-200 font-bold">
            <div className="grid xl:grid-cols-15 lg:grid-cols-12 sm:grid-cols-12 xxs:grid-cols-10  ms:mx-12 test:mx-4 h-20 content-center items-center">
              <div className="flex justify-between	items-center">
                <div className="justify-self-start w-10">8</div>
                <img
                  src={SPK}
                  className="w-12 h-12 place-self-center	ms:ml-6 xxs:ml-4 sm:ml-1 mr-6"
                />
              </div>
              <div className=" sm:col-start-2 xxs:col-start-3 xxs:col-end-6">??????????????</div>
              <div className="justify-self-center">5</div>
              <div className="justify-self-center">2</div>
              <div className="justify-self-center">1</div>
              <div className="justify-self-center">2</div>
              <div className="justify-self-center sm:col-start-10 sm:col-end-12  2xl:block sm:block xxs:hidden ">
                6-4 (-2)
              </div>
              <div className="justify-self-center">7</div>
              <div className="justify-self-end col-start-15 2xl:block xl:block lg:hidden xxs:hidden">
                ??
              </div>
            </div>
          </div>
          <div className="grid xl:grid-cols-15 lg:grid-cols-12 sm:grid-cols-12 xxs:grid-cols-10  ms:mx-12 test:mx-4 h-20 content-center items-center">
            <div className="flex justify-between	items-center">
              <div className="justify-self-start w-10">9</div>
              <img src={TVR} className="w-12 h-12 place-self-center	ms:ml-6 xxs:ml-4 sm:ml-1 mr-6" />
            </div>

            <div className="sm:col-start-2 xxs:col-start-3 xxs:col-end-6 ">??????????</div>
            <div className="justify-self-center">5</div>
            <div className="justify-self-center">2</div>
            <div className="justify-self-center">1</div>
            <div className="justify-self-center">2</div>
            <div className="justify-self-center col-start-10 col-end-12 2xl:block sm:block xxs:hidden ">
              6-4 (-2)
            </div>
            <div className="justify-self-center">7</div>
            <div className="justify-self-end col-start-15 2xl:block xl:block lg:hidden xxs:hidden">
              ??
            </div>
          </div>
        </div>
      </section>
      <section className="profileBg snap-always hover:snap-normal">
        <div className="h-240">
          <img src={spartakStroke} className="absolute mt-80 right-0 sm:-pr-40	h-36" />
          <img src={kostromaStroke} className="absolute mt-120 left-0	h-36" />
        </div>
      </section>
      <section className="bg-black h-full pt-16">
        <div>
          <img
            src={spartakStrokeFull}
            className=" 2xl:px-72 xl:px-16 lg:px-16 px-8 m-0 h-full 2xl:w-7/12 xl:w-2/3 lg:w-2/3 sm:w-10/12 xs:w-10/12"
          />
          <img
            src={kostromaStrokeFull}
            className="pl-8 pr-12 pt-5 w-full 2xl:hidden xl:hidden lg:hidden"
          />
        </div>
        <div className="flex justify-between 2xl:h-80 xl:h-80 2xl:mx-16 xl:mx-16 lg:mx-16 mx-8 pb-20 border-b pt-12">
          <div className="grid justify-between">
            <div className=" text-new text-xl	text-neutral-400	text-left	 2xl:w-4/6 xl:w-5/6 lg:w-9/12 sm:w-9/12 xs:w-10/12">
              <b className="text-white font-normal">?????????????? ?? 1959 ????????,</b> ???? ???? 1959 ???????? ??????
              ???????????????????????? ?????? ?????????????? ???????????????????????? ????????????????????. <br />?? 1960???2018 ?????????? ????????????????????
              ???????????????? ?????????????? ?? ?????????????????????????? ???????????? ???????????????? (???????????????????????????? ???????????????????? ????????????).
            </div>
            <Link
              to="/"
              className="flex 2xl:hidden xl:hidden lg:hidden self-start justify-self-end"
            >
              <p className="text-lg font-bold text-red-700 2xl:w-32 self-center ">?????????????? ??????????</p>
              <div className="my-auto">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 10 16"
                  fill="red"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current	"
                >
                  <path
                    d="M2 14L8 8L2 2"
                    stroke="#b91c1c"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                </svg>
              </div>
            </Link>
          </div>
          <img
            src={kostromaStrokeFull}
            className=" h-fit 2xl:w-full 2xl:pl-0 xl:pl-16 xl:w-8/12 2xl:block xl:block lg:block sm:hidden test:hidden"
          />
        </div>
        <div className="flex justify-between xl:mx-16 sm:mx-10 xxs:mx-8 pt-20 fill-red-300">
          <h3 className="text-2xl	font-bold text-white ">??????????????</h3>
          <Link to="/" className="flex">
            <p className="text-sm font-bold text-red-700 2xl:w-32 self-center ">?????? ??????????????</p>
            <div className="my-auto">
              <svg
                width="18"
                height="18"
                viewBox="0 0 10 16"
                fill="red"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current	"
              >
                <path d="M2 14L8 8L2 2" stroke="#b91c1c" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            </div>
          </Link>
        </div>
        <div className="sm:overflow-x-auto test:overflow-x-auto">
          <TeamRoles />
        </div>

        <div className="sm:overflow-x-auto test:overflow-x-auto">
          <TeamCard />
        </div>
        <div>
          <div className="mt-40 xl:mx-16 sm:mx-10 xxs:mx-8 text-2xl font-bold text-white">
            ??????????????????????
          </div>
          <div className=" test:overflow-x-auto">
            <StaffCard />
          </div>
        </div>
        <div>
          <div className="mt-40 xl:mx-16 sm:mx-10 xxs:mx-8 text-2xl font-bold text-white">
            ??????????????????????????
          </div>
          <div className="test:overflow-x-auto">
            <AdminCard />
          </div>
        </div>
        <div className="mt-40 xl:mx-16 sm:mx-10 xxs:mx-8">
          <div className="text-2xl font-bold text-white">????????????????</div>
        </div>
        <div className="">
          <div className="flex 2xl:flex-row xl:flex-row lg:flex-col xxs:flex-col md:flex-col justify-center xl:mx-16 sm:mx-10 xxs:mx-8 mt-10 pb-36">
            <div className="w-1/2 2xl:w-1/2 xl:w1/2 lg:w-full sm:w-full md:w-full xxs:w-full">
              <div className="bg-red-700 w-full sm:pt-10 xxs:pt-5 xl:px-10 sm:px-8 xxs:px-4 h-84">
                <div className="">
                  <h3 className="text-white font-bold 2xl:w-152 xl:w-152 xxs:w-full text-xl">
                    ???????????????????? ???????? ??????????????
                  </h3>
                  <p className="text-white  2xl:w-152 xl:w-152 xxs:w-full xl:text-xl sm:text-lg	xxs:text-md">
                    ??. ????????????????, ?????????????? ??????????????, 37, ??????????????????, <br /> ?????????????????????? ??????., 156530
                  </p>
                </div>
                <div className="sm:pt-10 xxs:pt-5 pb-20">
                  <h3 className="text-white font-bold 2xl:w-152 xl:w-152 xxs:w-full text-xl">
                    ???????????????? ?????????????? ????????????????
                  </h3>
                  <p className="text-white 2xl:w-152 xl:w-152 xxs:w-full xl:text-xl sm:text-lg	xxs:text-md">
                    ??????????: ??. ????????????????, ?????????????? ??????????????, 37, ??????????????????, ?????????????????????? ??????., 156530
                  </p>
                </div>
              </div>
              <div className="border-b border-l border-neutral-600 h-84">
                <div className="sm:pt-10 xxs:pt-5 xl:px-10 sm:px-8 xxs:px-4">
                  <h3 className="text-white font-bold 2xl:w-152 xl:w-152 xxs:w-full text-xl">
                    ?????????????? ????????????
                  </h3>
                  <p className="text-neutral-500 pt-2.51 2xl:w-152 xl:w-152 xxs:w-full xl:text-xl sm:text-lg	xxs:text-md">
                    ???????????????????? ???????? ?????????????????? ???????????????? ???????????????? ???????????????? ?????????? ?? ???????????? 2022/23 ????
                    ???????????????? ????????????????.
                    <br />
                    ?????????? ???????????????????? ???? 3150 ????????????????.
                  </p>
                </div>
                <button className="text-white text-base ml-10 xl:mt-24 xxs:mt-10 mb-10 px-4 w-36 h-12 border border-neutral-600">
                  ??????????????????
                </button>
              </div>
            </div>
            <div className="position:relative;overflow:hidden;  w-1/2 2xl:w-1/2 xl:w-1/2 xxs:w-full lg:w-full sm:w-full md:w-full h-168">
              <iframe
                src="https://yandex.ru/map-widget/v1/-/CCUZj-w7hD"
                frameBorder="1"
                className="relative w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-32 xl:mx-16 sm:mx-10 xxs:mx-4 test:mx-2">
        <h3 className="font-bold text-2xl">?????????????????????? ??????????????</h3>
        <div className="bg-neutral-300 scbBg	flex mt-6">
          <div className="2xl:w-1/2 xl:w-1/2 sm:w-full md:w-full lg:w-full xs:w-full  2xl:mt-14 xl:mt-14 lg:mt-8 md:mt-8 sm:mt-8 xs:mt-8  test:ml-4 2xl:mr-0 xl:mr-0 xxs:mr-16 sm:mx-8 ms:mr-8 ms:ml-8 2xl:text-black xl:text-black lg:text-white sm:text-white md:text-white xs:text-white">
            <h4 className="font-bold text-xl ">?????? ????????????????????????</h4>
            <ul className="2xl:text-1.5xl xl:text-1.5xl sm:text-xl xxs:text-md mt-2.5 list-disc list-outside 2xl:w-4/5 xl:w-4/5 xxs:w-full">
              ???????????????????? ??? ?????????????????????????? ???????????????? ???????????????? ???????? ???????????????????????? ????????????????.
              <li className="mt-6 2xl:text-1.5xl xl:text-1.5xl sm:text-xl xxs:text-md ml-8">
                ???????? ???????????????? ?????????????? ?????????? ???? ?????????????? ?? ???????????? ?? ???????????? ??? ?????????? ?????????????? ????????????;
              </li>
              <li className="2xl:text-1.5xl xl:text-1.5xl sm:text-xl xxs:text-md mt-2.5 ml-8">
                ?? ?????????? ???????????????? 23 ??????. ?????????????????????? ?? 2,6 ??????. ????????????, ?????????????????????????? ?? ????????????
                ???????????????????? ?????????????? ?? 79 ?????????????????? ???????????????????? ??????????????????;
              </li>
              <li className="2xl:text-1.5xl xl:text-1.5xl sm:text-xl xxs:text-md mt-2.5 ml-8">
                ???????? ?????????????????????? 11 ?????????????????? ????????????????;
              </li>
              <li className="2xl:text-1.5xl xl:text-1.5xl sm:text-xl xxs:text-md mt-2.5 ml-8">
                ?? 2017 ???????? ???????????????????? ?????????????????? ?????????? ?????????????????? ??????????????, ???? ?????????????? ?????????? ????????????????
                ???????????? ?? ???????????? ?? ???????? ?????????????????? ?? ?????????????????????????? ??????????????????. ?? 2022 ???????? ??????????????????????
                ???????? ?????????????? ???? 250 ??????. ??????????????????;
              </li>
              <li className="2xl:text-1.5xl xl:text-1.5xl sm:text-xl xxs:text-md mt-2.5 ml-8">
                ?????????????????????? ?????????? ?????????????? ?????????????? ???????????????? ?????????? 10 ?????? ??????????????.
              </li>
            </ul>
            <button className="text-white bg-red-700 font-bold text-xl mt-10 2xl:mb-20 xl:mb-20 lg:mb-16 sm:mb-12 md:mb-8  xs:mb-8 px-4 py-4 xxs:w-72 2xl:w-72  test:w-11/12  xl:h-16">
              ?????????????????????? ????????
            </button>
          </div>
          <img
            src={scb}
            className="w-1/2 2xl:block xl:block lg:hidden md:hidden sm:hidden test:hidden "
          />
        </div>
      </section>
      <div className="font-bold     2xl:px-7 xxs:px-0 xl:mx-48 lg:mx-16 sm:mx-10 xxs:mx-8 text-2xl mt-36">
        ???????? ????????????????
      </div>
      <section className=" mx-60 2xl:ml-16 xl:mx-auto lg:mx-16 sm:mx-10 xxs:mx-8 xxs:overflow-x-auto 	z-20 ">
        <div className="xl:w-340 xxs:w-300 mx-auto ">
          <div className="test:overflow-x-auto mx-auto">
            <div className="flex justify-between flex-row gap-x-10 pt-6   xxs:overflow-x-auto ">
              <div className="flex w-60  h-40 border place-content-center">
                <img className="place-self-center" src={sportmaster} />
              </div>

              <div className="flex w-60  h-40 border place-content-center">
                <img className="place-self-center" src={rfu} />
              </div>

              <div className="flex w-60  h-40 border place-content-center">
                <img className="place-self-center" src={scblogo} />
              </div>

              <div className="flex w-60 relative h-40 border place-content-center overflow-hidden	">
                <img className="place-self-center " src={rfso} />
                <button className="arrow absolute -right-2 z-30 py-16	2xl:block xl:block xs:hidden	">
                  <img src={arrowRight} className="absolute  mt-3 ml-3.5" />
                  <img src={strokeRight} className="z-30 w-10" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="partnership-bg my-36 xl:mx-16 xxs:mx-6">
        <div className="2xl:flex xl:flex lg:flex md:flex sm:flex-row xl:h-72 xxs:h-full justify-between place-items-center xl:px-16 sm:px-10 xxs:px-4">
          <div className="flex-row  w-5/12	xl:w-6/12 lg:w-6/12 sm:w-full xs:w-full">
            <h3 className="font-bold text-2xl text-white 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-8 xs:pt-6">
              ?????????? ??????????????????
            </h3>
            <p className="text-white text-1.5xl lg:text-xl sm:text-lg xs:text-base	 md:text-lg 2xl:pt-8 xl:pt-8 lg:pt-6">
              ????????????????-?????????????????? ?????? ???????????????????? ?????? ?? ???????????? ?????????????? ?????????????? ???????????? ??????????????????????
              ????????????????, ???????????????????? ?? ???????? ?????? ??????????????????????????, ?????????????????? ?? ???????????????????????????????? ????????????
              ??????????. ?????????????????????? ???? ????????????????:{' '}
              <em className="underline not-italic	">8 985 350 21 41</em>
            </p>
          </div>
          <button className="bg-black text-white font-bold text-lg 2xl:mt-20 xl:mt-20 md:mt-20 xl:mb-20 xxs:mb-10 px-4 sm:mt-6 xs:mt-4  xl:w-72 h-16">
            ?????????????????? ????????????
          </button>
        </div>
      </section>
      <section className="bg-black ms:px-16 test:px-6">
        <div className="grid xl:grid-cols-4 sm:grid-cols-2 ms:grid-cols-1 py-16 border-b border-zinc-600">
          <div className="flex flex-col xl:w-64 sm:w-full col-start-1 sm:col-end-3 xxs:col-end-2 row-start-1">
            <div className="flex xl:flex-col xxs:flex-row">
              <img src={spkWhite} className="h-16 self-start" />
              <p className="text-lg	text-neutral-400	text-left xl:pt-6 xxs:pt-0 xl:pl-0 xxs:pl-4 ">
                ?????????????????????? ???????? <br /> ?????????????????????? ?????????? ?????????????????? ????????????????
              </p>
            </div>
            <div className="flex xl:flex-col sm:flex-row xxs:flex-col justify-between">
              <div className="cols-start-4 w-1/2">
                <p className="text-lg	text-neutral-400	text-left xl:pt-12 sm:pt-6 xxs:pt-12">
                  ??????????:
                </p>
                <h4 className="text-lg	text-white	text-left pt">
                  ??. ????????????????, ????. ????????????????????, 105, ?????????????????? 306 ??, 156001
                </h4>
              </div>
              <div className="col-start-2 w-1/2">
                <p className="text-lg	text-neutral-400	text-left pt-6">??????????????:</p>
                <h4 className="text-lg	text-white	text-left pt ">8 985 350 21 41</h4>
                <p className="text-lg	text-neutral-400	text-left pt-6">??????????:</p>
                <h4 className="text-lg	text-white	text-left pt">Info@fcspk.ru</h4>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-64 xl:col-start-2 xl:row-start-1 xs:col-start-1 xs:row-start-2 xs:row-end-4 xl:pt-0 xxs:pt-12">
            <h3 className="text-lg font-bold	text-white	text-left">???? ??????????????</h3>
            <Link to="/" className="text-lg	text-neutral-400	text-left pt-6">
              ??????????????
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left ">
              ??????????????????
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              ?????????????????? ??????????????
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              ????????????
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              ???????????????????? ????????
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              ??????????????????????
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              ??????????
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              ??????????????
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              ???????????????? ?? ????????????????
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              ?? ??????????
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              ????????????????
            </Link>
          </div>
          <div className="flex flex-col w-64 xl:col-start-3 xl:row-start-1 sm:col-start-2 sm:row-start-2 xs:col-start-1 xs:row-start-4  xl:pt-0 xxs:pt-12">
            <h3 className="text-lg font-bold	text-white	text-left">????????????</h3>
            <Link to="/" className="text-lg	text-neutral-400	text-left pt-6">
              ???????????????????? ????????????
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              ????????????????????
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              ???????????? ????????????
            </Link>
          </div>
          <div className="flex flex-col w-64 xl:col-start-4 xl:row-start-1 ms:col-start-2 xs:col-start-1 sm:col-start-2 xs:row-start-5 sm:row-start-3 xl:pt-0 xxs:pt-12">
            <h3 className="text-lg font-bold	text-white	text-left ">?????? ????????</h3>
            <Link to="/" className="text-lg	text-neutral-400	text-left pt-6">
              ??????????
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              ????????????
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              ????????????????????
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              ????????????????
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              ?????????? ????????????
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              ????????????????
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              ?????????????? ????????????????
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              ???????????????????? ?? ????????????????
            </Link>
          </div>
        </div>
        <div className="flex xl:flex-row xxs:flex-col justify-between ">
          <p className="text-lg	text-neutral-400	text-left py-6 xl:w-220 xxs:w-full">
            2022. FCSPK.ru ???????????????????? ???????? ?????????????????? ????????????????. ?????? ???????????? ?????? ??????????????????
            ?????????????????????????? ????????????????????, ???????????? ???? ?????????????????????? ???????? ???? ?????????????????? ???????????????? ??????????????????????.
          </p>
          <div className="flex items-center gap-x-6	xl:pb-0 xxs:pb-6">
            <Link to="/" className="rounded-full border py-2 px-1 border-zinc-600 w-8">
              <img src={vk} className="mx-auto px-auto" />
            </Link>
            <Link to="/" className="rounded-full border py-1.5 px-2.5 border-zinc-600 w-8">
              <img src={ok} />
            </Link>
            <Link to="/" className="rounded-full border  py-2 px-2 border-zinc-600 w-8">
              <img src={tg} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default main;
