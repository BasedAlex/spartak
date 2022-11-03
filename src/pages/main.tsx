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

function main() {
  return (
    <>
      <section className=" showBg  ">
        <Navbar />
        <div className="ml-20 w-192 pb-80 mt-60 text-white">
          <img src={flag} className="w-16 h-9" />
          <p className="text-5xl text-start font-bold	">
            {'«Спартак»  — российский футбольний клуб из Костромы'}
          </p>
          <p className="text-base	pt-4">Основан в 1959 году</p>
          <button className="mt-10 w-36 h-12 border">ПОДРОБНЕЕ</button>
        </div>
      </section>
      <section className="mt-24	">
        <div className="flex justify-between mx-16">
          <h3 className="text-2xl	font-bold font-lufthansaBold">СЕЗОН 2022-23</h3>
          <Link to="/" className="flex">
            <p className="text-sm font-bold text-neutral-500 w-28 self-center">ВСЕ МАТЧИ</p>
            <img src={arrowR} />
          </Link>
        </div>

        <Card />
      </section>
      <section className="mt-36 mb-20">
        <div className="flex justify-between mx-16">
          <h3 className=" text-2xl	font-bold ">ТУРНИРНАЯ ТАБЛИЦА</h3>
          <Link to="/" className="flex jusitfy-">
            <p className="text-sm font-bold text-neutral-500 w-44 self-center">СМОТРЕТЬ ПОЛНУЮ</p>
            <img src={arrowR} />
          </Link>
        </div>
        <div>
          <div className="grid grid-cols-15 mt-5 ml-12 mr-12 h-20 border-b content-center	items-center ">
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
          <div className="grid grid-cols-15 ml-12 mr-12 h-20 content-center items-center ">
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
            <div className="justify-self-end col-start-15">В П В Н П _</div>
          </div>
          <div className="grid grid-cols-15 ml-12 mr-12  h-20 content-center items-center ">
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
            <div className="justify-self-end col-start-15 ">В</div>
          </div>
          <div className="bg-slate-200 font-bold">
            <div className="grid grid-cols-15 ml-12 mr-12 h-20 content-center items-center">
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
              <div className="justify-self-end col-start-15">В</div>
            </div>
          </div>
          <div className="grid grid-cols-15 ml-12 mr-12 h-20 content-center items-center">
            <div className="flex justify-between	items-center">
              <div className="justify-self-start w-10">9</div>
              <img src={TVR} className="w-12 h-12 place-self-center	mr-6" />
            </div>

            <div className="col-start-2 col-end-6">ТВЕРЬ</div>
            <div className="justify-self-center">5</div>
            <div className="justify-self-center">2</div>
            <div className="justify-self-center">1</div>
            <div className="justify-self-center">2</div>
            <div className="justify-self-center col-start-10 col-end-12">6-4 (-2)</div>
            <div className="justify-self-center">7</div>
            <div className="justify-self-end col-start-15">В</div>
          </div>
        </div>
      </section>
      <section className="bg-team-profile min-h-screen w-full bg-no-repeat bg-cover">
        <img src={spartakStroke} className="absolute mt-80 right-0	h-36" />
        <img src={kostromaStroke} className="absolute mt-120 left-0	h-36" />
      </section>
      <section className="bg-black h-full">
        <img src={spartakStrokeFull} className="pt-20 px-16 w-300" />
        <div className="flex justify-between  mx-16 pb-20 border-b pt-12">
          <div className=" text-new	text-neutral-400	text-left		">
            <b className="text-white font-normal">Основан в 1959 году,</b> но до 1959 года <br />
            уже существовало три команды костромского <br /> «Спартака». В 1960—2018 годах
            непрерывно <br /> принимал участие в соревнованиях команд <br /> мастеров
            (нелюбительских футбольных клубов).
          </div>
          <img src={kostromaStrokeFull} className="min-w-fit w-280 ml-12 " />
        </div>
        <div className="flex justify-between mx-16 pt-20">
          <h3 className="text-2xl	font-bold text-white ">КОМАНДА</h3>
          <Link to="/" className="flex">
            <p className="text-sm font-bold text-red-700 w-32 self-center">ВСЯ КОМАНДА</p>
            <img src={arrowR} />
          </Link>
        </div>
        <TeamRoles />
        <TeamCard />
        <div className="mt-40 mx-16">
          <div className="text-2xl font-bold text-white">РУКОВОДСТВО</div>
          <StaffCard />
        </div>
        <div className="mt-40 mx-16">
          <div className="text-2xl font-bold text-white">АДМИНИСТРАЦИЯ</div>
          <AdminCard />
        </div>
        <div className="mt-40 mx-16">
          <div className="text-2xl font-bold text-white">КОНТАКТЫ</div>
        </div>
        <div className="flex justify-center mx-auto mt-10 pb-36">
          <div className="">
            <div className="bg-red-700 w-222 pt-10 pl-10 h-84">
              <div className="">
                <h3 className="text-white font-bold w-152 text-xl">ФУТБОЛЬНЫЙ КЛУБ СПАРТАК</h3>
                <p className="text-white text-xl w-152 ">
                  г. Кострома, учебный городок, 37, Караваево, <br /> Костромская обл., 156530
                </p>
              </div>
              <div className="pt-10 pb-20">
                <h3 className="text-white font-bold w-152 text-xl">ДОМАШНИЙ СТАДИОН «УРОЖАЙ»</h3>
                <p className="text-white w-152 text-xl">
                  Адрес: г. Кострома, учебный городок, 37, Караваево, Костромская обл., 156530
                </p>
              </div>
            </div>
            <div className="border-b border-l border-neutral-600 h-84">
              <div className="pt-10 pl-10">
                <h3 className="text-white font-bold w-152 text-xl">СТАДИОН УРОЖАЙ</h3>
                <p className="text-neutral-500 pt-2.51 w-152 text-xl	">
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
          <div className="position:relative;overflow:hidden;">
            <iframe
              src="https://yandex.ru/map-widget/v1/-/CCUZj-w7hD"
              width="888"
              height="672"
              frameBorder="1"
              className="relative"
            ></iframe>
          </div>
        </div>
      </section>
      <section className="mt-32  mx-16">
        <h3 className="font-bold text-2xl">ГЕНЕРАЛЬНЫЙ СПОНСОР</h3>
        <div className="bg-neutral-300 flex mt-6">
          <div className="w-1/2  mt-14 ml-16 ">
            <h4 className="font-bold text-xl ">ПАО «Совкомбанк»</h4>
            <ul className="text-1.5xl mt-2.5 list-disc list-outside w-188 ">
              Совкомбанк — универсальный системно значимый банк федерального масштаба.
              <li className="mt-6 text-1.5xl ml-8">
                Банк занимает девятое место по активам в стране и третье — среди частных банков;
              </li>
              <li className="text-1.5xl mt-2.5 ml-8">
                В банке работает 23 тыс. сотрудников в 2,6 тыс. офисах, расположенных в тысяче
                населенных пунктах в 79 субъектах Российской Федерации;
              </li>
              <li className="text-1.5xl mt-2.5 ml-8">Банк обслуживает 11 миллионов клиентов;</li>
              <li className="text-1.5xl mt-2.5 ml-8">
                С 2017 года Совкомбанк выпускает карту рассрочки «Халва», по которой можно покупать
                товары и услуги в сети партнеров в беспроцентную рассрочку. В 2022 году партнерская
                сеть выросла до 250 тыс. магазинов;
              </li>
              <li className="text-1.5xl mt-2.5 ml-8">
                Держателями карты «Халва» сегодня являются свыше 10 млн человек.
              </li>
            </ul>
            <button className="text-white bg-red-700 font-bold text-xl mt-10 mb-20 px-4 w-72 h-16">
              ОФИЦИАЛЬНЫЙ САЙТ
            </button>
          </div>
          <img src={scb} className="w-1/2 " />
        </div>
      </section>
      <section className="mt-36 mx-16">
        <h3 className="font-bold text-2xl">НАШИ ПАРТНЁРЫ</h3>
        <div className="flex flex-nowrap grow justify-between pt-6">
          <div className="flex w-92 h-40 border place-content-center">
            <img className="place-self-center" src={sportmaster} />
          </div>
          <div className="flex w-92 h-40 border place-content-center">
            <img className="place-self-center" src={rfu} />
          </div>
          <div className="flex w-92 h-40 border place-content-center">
            <img className="place-self-center" src={scblogo} />
          </div>
          <div className="flex w-92 h-40 border place-content-center">
            <img className="place-self-center" src={rfso} />
          </div>
        </div>
      </section>
      <section className="partnership-bg my-36 mx-16 ">
        <div className="flex h-72 justify-between place-items-center px-16">
          <div className="flex-row w-188">
            <h3 className="font-bold text-2xl text-white ">СТАТЬ ПАРТНЁРОМ</h3>
            <p className="text-white text-1.5xl pt-8">
              «Спартак-Кострома» рад предложить вам и вашему бизнесу широкий спектр партнёрских
              программ, включающих в себя все маркетинговые, имиджевые и медиавозможности нашего
              клуба. Подробности по телефону:{' '}
              <em className="underline not-italic	">8 985 350 21 41</em>
            </p>
          </div>
          <button className="bg-black text-white font-bold text-lg mt-20 mb-20 px-4  w-72 h-16">
            ОТПРАВИТЬ ПИСЬМО
          </button>
        </div>
      </section>
      <section className="bg-black px-16">
        <div className=" grid grid-cols-4  py-16 border-b border-zinc-600">
          <div className=" flex flex-col w-64">
            <img src={spkWhite} className="h-16 self-start" />
            <p className="text-lg	text-neutral-400	text-left pt-6">
              Официальный сайт <br /> Футбольного клуба «Спартак» Кострома
            </p>
            <p className="text-lg	text-neutral-400	text-left pt-12">Адрес:</p>
            <h4 className="text-lg	text-white	text-left pt">
              г. Кострома, ул. Московская, 105, помещение 306 А, 156001
            </h4>
            <p className="text-lg	text-neutral-400	text-left pt-6">Телефон:</p>
            <h4 className="text-lg	text-white	text-left pt ">8 985 350 21 41</h4>
            <p className="text-lg	text-neutral-400	text-left pt-6">Почта:</p>
            <h4 className="text-lg	text-white	text-left pt">Info@fcspk.ru</h4>
          </div>
          <div className="flex flex-col w-64">
            <h3 className="text-lg font-bold	text-white	text-left">ФК СПАРТАК</h3>
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
          <div className="flex flex-col w-64">
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
          <div className="flex flex-col w-64">
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
        <div className="flex justify-between ">
          <p className="text-lg	text-neutral-400	text-left py-6 w-220 ">
            2022. FCSPK.ru Футбольный клуб «Спартак» Кострома. При полном или частичном
            использовании материалов, ссылка на официальный сайт ФК «Спартак» Кострома обязательна.
          </p>
          <div className="flex items-center gap-x-6	">
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
