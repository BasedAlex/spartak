import React from 'react';
import SPK from '../assets/images/SpartakKostroma.png';
import TVR from '../assets/images/Tver.png';
import TOV from '../assets/images/TorpedoVladimir.png';
import TOM2 from '../assets/images//TorpedoM2.png';
import { Slider } from './Slider';

const data = [
  {
    date: '10 АВГУСТА 2022',
    stage: '6 ТУР ВТОРОЙ ЛИГИ',
    team1: 'ТОРПЕДО ВЛАДИМИР',
    logo1: TOV,
    team2: 'СПАРТАК КОСТРОМА',
    logo2: SPK,
    isOver: true,
    score1: '0',
    score2: '3',
    time: '',
    stadium: 'Г. ВЛАДИМИР, СТАДИОН «ТОРПЕДО»',
  },
  {
    date: '10 АВГУСТА 2022',
    stage: '7 ТУР ВТОРОЙ ЛИГИ',
    team1: 'СПАРТАК КОСТРОМА',
    logo1: SPK,
    team2: 'ТВЕРЬ',
    logo2: TVR,
    isOver: false,
    score1: '',
    score2: '',
    time: '18:00',
    stadium: 'Г. ВЛАДИМИР, СТАДИОН «ТОРПЕДО»',
  },
  {
    date: '1 СЕНТЯБРЯ 2022',
    stage: '8 ТУР ВТОРОЙ ЛИГИ',
    team1: 'СПАРТАК КОСТРОМА',
    logo1: SPK,
    team2: 'ТОРПЕДО МОСКВА 2',
    logo2: TOM2,
    isOver: false,
    score1: '',
    score2: '',
    time: '18:00',
    stadium: 'Г. ВЛАДИМИР, СТАДИОН «ТОРПЕДО»',
  },
  {
    date: '1 СЕНТЯБРЯ 2022',
    stage: '8 ТУР ВТОРОЙ ЛИГИ',
    team1: 'СПАРТАК КОСТРОМА',
    logo1: SPK,
    team2: 'ТОРПЕДО МОСКВА 2',
    logo2: TOM2,
    isOver: false,
    score1: '',
    score2: '',
    time: '18:00',
    stadium: 'Г. ВЛАДИМИР, СТАДИОН «ТОРПЕДО»',
  },
];

const Card = () => {
  return (
    <div className="flex flex-row justify-between mx-16 mt-6">
      <Slider>
        {data.map((item, idX) => {
          return (
            <div key={idX} className="border w-128 	">
              <div className="m-10 mb-0">
                <div className="flex justify-between">
                  <h3 className="text-base font-bold">{item.date}</h3>
                  {item.isOver ? '' : <h3 className="text-base font-bold">{item.time}</h3>}
                </div>
                <p className="text-xs	font-normal	text-neutral-500">{item.stage}</p>
                <div className="grid grid-cols-3 items-center mt-5">
                  <div className="flex flex-col place-items-center w-28">
                    <img className="place-self-center" src={item.logo1} />
                    <p className="place-self-center text-center text-lg	mt-2">{item.team1}</p>
                  </div>
                  {item.isOver ? (
                    <div className="flex self-center justify-self-center	text-7xl	font-bold">
                      {item.score1}
                      <p className="text-5xl  self-center justify-self-center text-neutral-400 font-bold ">
                        :
                      </p>{' '}
                      {item.score2}
                    </div>
                  ) : (
                    <div className="text-5xl  self-center justify-self-center text-neutral-400 font-bold">
                      VS
                    </div>
                  )}
                  <div className="flex flex-col place-items-center ">
                    <img className="place-self-center" src={item.logo2} />
                    <p className="place-self-center text-center text-lg	mt-2">{item.team2}</p>
                  </div>
                </div>
                <p className="text-sm text-center text-neutral-500 mt-10 mb-12">{item.stadium}</p>
                {item.isOver ? (
                  <button className="bg-black text-white w-128 -ml-10 h-20 font-bold text-sm">
                    МАТЧ-ЦЕНТР
                  </button>
                ) : (
                  <div className="flex">
                    <button className="bg-black text-white w-64 -ml-10 h-20 font-bold text-sm">
                      МАТЧ-ЦЕНТР
                    </button>
                    <button className="bg-red-700 text-white w-64 -mr-10 h-20 font-bold text-sm ">
                      КУПИТЬ БИЛЕТ
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Card;
