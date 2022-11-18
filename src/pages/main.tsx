import React from 'react';
import Navbar from '../components/Navbar';
import flag from '../../src/assets/images/flag-ru.png';
import arrowR from '../../src/assets/images/ArrowRight.svg';
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

        <div className="ml-20  w-2/3 sm:w-152 pb-80 mt-60 text-white ">
          <img src={flag} className="w-16 h-9" />
          <p className="2xl:text-5xl xl:text-4xl lg:text-3xl sm:text-5xl  text-start font-bold	">
            {'«Спартак»  — российский футбольний клуб из Костромы'}
          </p>
          <p className="text-base	pt-4">Основан в 1959 году</p>
          <button className="mt-10 w-36 h-12 border">ПОДРОБНЕЕ</button>
        </div>
      </section>
      <section className="mt-24 w-full ">
        <div className="flex justify-between mx-16">
          <h3 className="text-2xl	font-bold ">СЕЗОН 2022-23</h3>
          <Link to="/" className="flex">
            <p className="text-sm font-bold text-neutral-500 2xl:w-28 self-center">ВСЕ МАТЧИ</p>
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
        <div className="flex justify-between sm:mx-16 test:mx-6">
          <h3 className=" text-2xl font-bold ">ТУРНИРНАЯ ТАБЛИЦА</h3>
          <Link to="/" className="flex jusitfy-">
            <p className="text-sm  font-bold text-neutral-500 2xl:w-44 self-center">
              СМОТРЕТЬ ПОЛНУЮ
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
        <div>
          <div className="grid 2xl:grid-cols-15 xl:grid-cols-15 xxs:grid-cols-12  2xl:mt-5 xl:mt-5 sm:mt-0 ms:mx-12 test:mx-6 h-20 border-b content-center	items-center ">
            <div className="font-bold text-neutral-400">#</div>
            <div className="font-bold text-neutral-400 col-start-2 col-end-6">КЛУБ</div>
            <div className="font-bold text-neutral-400 justify-self-center">И</div>
            <div className="font-bold text-neutral-400 justify-self-center">В</div>
            <div className="font-bold text-neutral-400 justify-self-center">Н</div>
            <div className="font-bold text-neutral-400 justify-self-center">П</div>
            <div className="font-bold text-neutral-400 justify-self-center col-start-10 col-end-12">
              М
            </div>
            <div className="font-bold text-neutral-400 justify-self-center">О</div>
            <div></div>
            <div></div>
          </div>
          <div className="grid 2xl:grid-cols-15 xl:grid-cols-15 lg:grid-cols-12 xxs:grid-cols-12  ms:mx-12 test:mx-6 h-20 content-center items-center ">
            <div className="flex justify-between	items-center">
              <div className="justify-self-start w-10">6</div>
              <img src={HMK} className="w-12 h-12 place-self-center	mr-6" />
            </div>

            <div className="col-start-2 col-end-6">ХИМИК</div>
            <div className="justify-self-center">5</div>
            <div className="justify-self-center">2</div>
            <div className="justify-self-center">1</div>
            <div className="justify-self-center">2</div>
            <div className="justify-self-center col-start-10 col-end-12">6-4 (-2)</div>
            <div className="justify-self-center">7</div>
            <div className="justify-self-end col-start-15 2xl:block xl:block lg:hidden xxs:hidden">
              В П В Н П _
            </div>
          </div>
          <div className="grid 2xl:grid-cols-15 xl:grid-cols-15 lg:grid-cols-12  xxs:grid-cols-12   ms:mx-12 test:mx-6  h-20 content-center items-center ">
            <div className="flex justify-between	items-center">
              <div className="justify-self-start w-10">7</div>
              <img src={DNM} className="w-12 h-12 place-self-center	mr-6" />
            </div>

            <div className="col-start-2 col-end-6">ДИНАМО ВОЛОГДА</div>
            <div className="justify-self-center">5</div>
            <div className="justify-self-center">2</div>
            <div className="justify-self-center">1</div>
            <div className="justify-self-center">2</div>
            <div className="justify-self-center col-start-10 col-end-12">6-4 (-2)</div>
            <div className="justify-self-center">7</div>
            <div className="justify-self-end col-start-15 2xl:block xl:block lg:hidden xxs:hidden">
              В
            </div>
          </div>
          <div className="bg-slate-200 font-bold">
            <div className="grid 2xl:grid-cols-15 xl:grid-cols-15 xxs:grid-cols-12 ms:mx-12 test:mx-6 h-20 content-center items-center">
              <div className="flex justify-between	items-center">
                <div className="justify-self-start w-10">8</div>
                <img src={SPK} className="w-12 h-12 place-self-center	mr-6" />
              </div>
              <div className="col-start-2 col-end-6">СПАРТАК</div>
              <div className="justify-self-center">5</div>
              <div className="justify-self-center">2</div>
              <div className="justify-self-center">1</div>
              <div className="justify-self-center">2</div>
              <div className="justify-self-center col-start-10 col-end-12">6-4 (-2)</div>
              <div className="justify-self-center">7</div>
              <div className="justify-self-end col-start-15 2xl:block xl:block lg:hidden xxs:hidden">
                В
              </div>
            </div>
          </div>
          <div className="grid 2xl:grid-cols-15 xl:grid-cols-15 sm:grid-cols-12 xxs:grid-cols-12 ms:mx-12 test:mx-6 h-20 content-center items-center">
            <div className="flex justify-between	items-center">
              <div className="justify-self-start w-10">9</div>
              <img src={TVR} className="w-12 h-12 place-self-center	mr-6" />
            </div>

            <div className="col-start-2 col-end-6 ">ТВЕРЬ</div>
            <div className="justify-self-center">5</div>
            <div className="justify-self-center">2</div>
            <div className="justify-self-center">1</div>
            <div className="justify-self-center">2</div>
            <div className="justify-self-center col-start-10 col-end-12">6-4 (-2)</div>
            <div className="justify-self-center">7</div>
            <div className="justify-self-end col-start-15 2xl:block xl:block lg:hidden xxs:hidden">
              В
            </div>
          </div>
        </div>
      </section>
      <section className="profileBg snap-always hover:snap-normal">
        <div className="h-240">
          <img src={spartakStroke} className="absolute mt-80 right-0	h-36" />
          <img src={kostromaStroke} className="absolute mt-120 left-0	h-36" />
        </div>
      </section>
      <section className="bg-black h-full pt-16">
        <div>
          <img
            src={spartakStrokeFull}
            className=" 2xl:px-16 xl:px-16 lg:px-16 px-8 m-0 h-full 2xl:w-7/12 xl:w-2/3 lg:w-2/3 sm:w-10/12 xs:w-10/12"
          />
          <img
            src={kostromaStrokeFull}
            className="pl-8 pr-12 pt-5 w-full 2xl:hidden xl:hidden lg:hidden"
          />
        </div>
        <div className="flex justify-between 2xl:h-80 xl:h-80 2xl:mx-16 xl:mx-16 lg:mx-16 mx-8 pb-20 border-b pt-12">
          <div className="grid  justify-between">
            <div className=" text-new text-xl	text-neutral-400	text-left	 2xl:w-3/6 xl:w-5/6 lg:w-9/12 sm:w-9/12 xs:w-10/12">
              <b className="text-white font-normal">Основан в 1959 году,</b> но до 1959 года уже
              существовало три команды костромского «Спартака». <br />В 1960—2018 годах непрерывно
              принимал участие в соревнованиях команд мастеров (нелюбительских футбольных клубов).
            </div>
            <Link
              to="/"
              className="flex 2xl:hidden xl:hidden lg:hidden self-start justify-self-end"
            >
              <p className="text-lg font-bold text-red-700 2xl:w-32 self-center ">ИСТОРИЯ КЛУБА</p>
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
        <div className="flex justify-between mx-16 pt-20 fill-red-300">
          <h3 className="text-2xl	font-bold text-white ">КОМАНДА</h3>
          <Link to="/" className="flex">
            <p className="text-sm font-bold text-red-700 2xl:w-32 self-center ">ВСЯ КОМАНДА</p>
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
          <TeamCard />
        </div>
        <div className="mt-40 mx-16 test:overflow-x-auto">
          <div className="text-2xl font-bold text-white">РУКОВОДСТВО</div>
          <StaffCard />
        </div>
        <div className="mt-40 mx-16 test:overflow-x-auto">
          <div className="text-2xl font-bold text-white">АДМИНИСТРАЦИЯ</div>
          <AdminCard />
        </div>
        <div className="mt-40 mx-16">
          <div className="text-2xl font-bold text-white">КОНТАКТЫ</div>
        </div>
        <div className="">
          <div className="flex 2xl:flex-row xl:flex-row lg:flex-col xxs:flex-col md:flex-col justify-center mx-16 mt-10 pb-36">
            <div className="w-1/2 2xl:w-1/2 xl:w1/2 lg:w-full sm:w-full md:w-full xxs:w-full">
              <div className="bg-red-700 w-full pt-10 px-10 h-84">
                <div className="">
                  <h3 className="text-white font-bold 2xl:w-152 xl:w-152 xxs:w-full text-xl">
                    ФУТБОЛЬНЫЙ КЛУБ СПАРТАК
                  </h3>
                  <p className="text-white text-xl 2xl:w-152 xl:w-152 xxs:w-full">
                    г. Кострома, учебный городок, 37, Караваево, <br /> Костромская обл., 156530
                  </p>
                </div>
                <div className="pt-10 pb-20">
                  <h3 className="text-white font-bold 2xl:w-152 xl:w-152 xxs:w-full text-xl">
                    ДОМАШНИЙ СТАДИОН «УРОЖАЙ»
                  </h3>
                  <p className="text-white 2xl:w-152 xl:w-152 xxs:w-full text-xl">
                    Адрес: г. Кострома, учебный городок, 37, Караваево, Костромская обл., 156530
                  </p>
                </div>
              </div>
              <div className="border-b border-l border-neutral-600 h-84">
                <div className="pt-10 px-10">
                  <h3 className="text-white font-bold 2xl:w-152 xl:w-152 xxs:w-full text-xl">
                    СТАДИОН УРОЖАЙ
                  </h3>
                  <p className="text-neutral-500 pt-2.51 2xl:w-152 xl:w-152 xxs:w-fulltext-xl	">
                    Футбольный клуб «Спартак» Кострома проводит домашние матчи в сезоне 2022/23 на
                    стадионе «Урожай».
                    <br />
                    Арена рассчитана на 3150 зрителей.
                  </p>
                </div>
                <button className="text-white text-base ml-10 mt-24 mb-10 px-4 w-36 h-12 border border-neutral-600">
                  ПОДРОБНЕЕ
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
      <section className="mt-32 sm:mx-16 test:mx-6">
        <h3 className="font-bold text-2xl">ГЕНЕРАЛЬНЫЙ СПОНСОР</h3>
        <div className="bg-neutral-300 scbBg	flex mt-6">
          <div className="2xl:w-1/2 xl:w-1/2 sm:w-full md:w-full lg:w-full xs:w-full  2xl:mt-14 xl:mt-14 lg:mt-8 md:mt-8 sm:mt-8 xs:mt-8 ms:ml-16 test:ml-4 2xl:mr-0 xl:mr-0 xxs:mr-16 2xl:text-black xl:text-black lg:text-white sm:text-white md:text-white xs:text-white">
            <h4 className="font-bold text-xl ">ПАО «Совкомбанк»</h4>
            <ul className="2xl:text-1.5xl xl:text-1.5xl sm:text-xl xxs:text-md mt-2.5 list-disc list-outside 2xl:w-4/5 xl:w-4/5 xxs:w-full">
              Совкомбанк — универсальный системно значимый банк федерального масштаба.
              <li className="mt-6 2xl:text-1.5xl xl:text-1.5xl sm:text-xl xxs:text-md ml-8">
                Банк занимает девятое место по активам в стране и третье — среди частных банков;
              </li>
              <li className="2xl:text-1.5xl xl:text-1.5xl sm:text-xl xxs:text-md mt-2.5 ml-8">
                В банке работает 23 тыс. сотрудников в 2,6 тыс. офисах, расположенных в тысяче
                населенных пунктах в 79 субъектах Российской Федерации;
              </li>
              <li className="2xl:text-1.5xl xl:text-1.5xl sm:text-xl xxs:text-md mt-2.5 ml-8">
                Банк обслуживает 11 миллионов клиентов;
              </li>
              <li className="2xl:text-1.5xl xl:text-1.5xl sm:text-xl xxs:text-md mt-2.5 ml-8">
                С 2017 года Совкомбанк выпускает карту рассрочки «Халва», по которой можно покупать
                товары и услуги в сети партнеров в беспроцентную рассрочку. В 2022 году партнерская
                сеть выросла до 250 тыс. магазинов;
              </li>
              <li className="2xl:text-1.5xl xl:text-1.5xl sm:text-xl xxs:text-md mt-2.5 ml-8">
                Держателями карты «Халва» сегодня являются свыше 10 млн человек.
              </li>
            </ul>
            <button className="text-white bg-red-700 font-bold text-xl mt-10 2xl:mb-20 xl:mb-20 lg:mb-16 sm:mb-12 md:mb-8 xs:mb-8 px-4 xl:w-72 test:w-full xl:h-16">
              ОФИЦИАЛЬНЫЙ САЙТ
            </button>
          </div>
          <img
            src={scb}
            className="w-1/2 2xl:block xl:block lg:hidden md:hidden sm:hidden test:hidden "
          />
        </div>
      </section>
      <section className="mt-36 mx-16 xxs:overflow-x-auto 	">
        <h3 className="font-bold text-2xl ">НАШИ ПАРТНЁРЫ</h3>
        <div className="test:overflow-x-auto">
          <div className="flex flex-row justify-between pt-6 xxs:gap-x-20 xxs:overflow-x-auto">
            <div className="flex w-1/5 xxs:w-1/2 h-40 border place-content-center">
              <img className="place-self-center" src={sportmaster} />
            </div>

            <div className="flex w-1/5 xxs:w-1/2 h-40 border place-content-center">
              <img className="place-self-center" src={rfu} />
            </div>

            <div className="flex w-1/5 xxs:w-1/2  h-40 border place-content-center">
              <img className="place-self-center" src={scblogo} />
            </div>

            <div className="flex w-1/5 xxs:w-1/2  h-40 border place-content-center">
              <img className="place-self-center " src={rfso} />
            </div>
          </div>
          <button className="arrow absolute right-12 z-30 py-16	2xl:block xl:block xs:hidden	">
            <img src={arrowRight} className="absolute mt-3 ml-3.5" />
            <img src={strokeRight} className="z-30 w-10" />
          </button>
        </div>
      </section>
      <section className="partnership-bg my-36 xl:mx-16 xxs:mx-6">
        <div className="2xl:flex xl:flex lg:flex md:flex sm:flex-row h-72 justify-between place-items-center xl:px-16 sm:px-10 xxs:px-4">
          <div className="flex-row  w-5/12	xl:w-6/12 lg:w-6/12 sm:w-full xs:w-full">
            <h3 className="font-bold text-2xl text-white 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-8 xs:pt-6">
              СТАТЬ ПАРТНЁРОМ
            </h3>
            <p className="text-white text-1.5xl lg:text-xl sm:text-lg xs:text-base	 md:text-lg 2xl:pt-8 xl:pt-8 lg:pt-6">
              «Спартак-Кострома» рад предложить вам и вашему бизнесу широкий спектр партнёрских
              программ, включающих в себя все маркетинговые, имиджевые и медиавозможности нашего
              клуба. Подробности по телефону:{' '}
              <em className="underline not-italic	">8 985 350 21 41</em>
            </p>
          </div>
          <button className="bg-black text-white font-bold text-lg 2xl:mt-20 xl:mt-20 md:mt-20 xl:mb-20 xxs:mb-10 px-4 sm:mt-6 xs:mt-4  xl:w-72 h-16">
            ОТПРАВИТЬ ПИСЬМО
          </button>
        </div>
      </section>
      <section className="bg-black ms:px-16 test:px-6">
        <div className="grid xl:grid-cols-4 sm:grid-cols-2 ms:grid-cols-1 py-16 border-b border-zinc-600">
          <div className="flex flex-col xl:w-64 sm:w-full col-start-1 sm:col-end-3 xxs:col-end-2 row-start-1">
            <div className="flex xl:flex-col xxs:flex-row">
              <img src={spkWhite} className="h-16 self-start" />
              <p className="text-lg	text-neutral-400	text-left xl:pt-6 xxs:pt-0 xl:pl-0 xxs:pl-4 ">
                Официальный сайт <br /> Футбольного клуба «Спартак» Кострома
              </p>
            </div>
            <div className="flex xl:flex-col sm:flex-row xxs:flex-col justify-between">
              <div className="cols-start-4 w-1/2">
                <p className="text-lg	text-neutral-400	text-left xl:pt-12 sm:pt-6 xxs:pt-12">
                  Адрес:
                </p>
                <h4 className="text-lg	text-white	text-left pt">
                  г. Кострома, ул. Московская, 105, помещение 306 А, 156001
                </h4>
              </div>
              <div className="col-start-2 w-1/2">
                <p className="text-lg	text-neutral-400	text-left pt-6">Телефон:</p>
                <h4 className="text-lg	text-white	text-left pt ">8 985 350 21 41</h4>
                <p className="text-lg	text-neutral-400	text-left pt-6">Почта:</p>
                <h4 className="text-lg	text-white	text-left pt">Info@fcspk.ru</h4>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-64 xl:col-start-2 xl:row-start-1 xs:col-start-1 xs:row-start-2 xs:row-end-4 xl:pt-0 xxs:pt-12">
            <h3 className="text-lg font-bold	text-white	text-left ">ФК СПАРТАК</h3>
            <Link to="/" className="text-lg	text-neutral-400	text-left pt-6">
              Новости
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left ">
              Календарь
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              Турнирная таблица
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              Игроки
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              Тренерский штаб
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              Руководство
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              Медиа
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              Стадион
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              Спонсоры и партнеры
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              О клубе
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              Контакты
            </Link>
          </div>
          <div className="flex flex-col w-64 xl:col-start-3 xl:row-start-1 sm:col-start-2 sm:row-start-2 xs:col-start-1 xs:row-start-4 xxs:row-start-3 xl:pt-0 xxs:pt-12">
            <h3 className="text-lg font-bold	text-white	text-left">БИЛЕТЫ</h3>
            <Link to="/" className="text-lg	text-neutral-400	text-left pt-6">
              Расписание матчей
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              Абонементы
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              Купить билеты
            </Link>
          </div>
          <div className="flex flex-col w-64 xl:col-start-4 xl:row-start-1 ms:col-start-2 xs:col-start-1 sm:col-start-2 xs:row-start-5 sm:row-start-3 xl:pt-0 xxs:pt-12">
            <h3 className="text-lg font-bold	text-white	text-left ">ФАН СТОР</h3>
            <Link to="/" className="text-lg	text-neutral-400	text-left pt-6">
              Форма
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              Одежда
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              Атрибутика
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              Сувениры
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              Режим работы
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              Гарантия
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              Условия возврата
            </Link>
            <Link to="/" className="text-lg	text-neutral-400	text-left">
              Информация о продавце
            </Link>
          </div>
        </div>
        <div className="flex xl:flex-row xxs:flex-col justify-between ">
          <p className="text-lg	text-neutral-400	text-left py-6 xl:w-220 xxs:w-full">
            2022. FCSPK.ru Футбольный клуб «Спартак» Кострома. При полном или частичном
            использовании материалов, ссылка на официальный сайт ФК «Спартак» Кострома обязательна.
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
