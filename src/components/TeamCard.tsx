import React from 'react';
import guardPic from '../assets/images/guardPic.png';
import playerNum from '../assets/images/99.svg';

// import { Slider } from './Slider';

const data = [
  {
    lastName: 'Бабаев',
    firstName: 'Кирилл',
    patronymic: 'Георгиевич',
    playerNumber: playerNum,
    birthDate: '29.01.1990',
    playerPic: guardPic,
    role: 'Guard',
  },
  {
    lastName: 'Бабаев',
    firstName: 'Кирилл',
    patronymic: 'Георгиевич',
    playerNumber: playerNum,
    birthDate: '29.01.1990',
    playerPic: guardPic,
    role: 'Guard',
  },
  {
    lastName: 'Бабаев',
    firstName: 'Кирилл',
    patronymic: 'Георгиевич',
    playerNumber: playerNum,
    birthDate: '29.01.1990',
    playerPic: guardPic,
    role: 'Guard',
  },
  {
    lastName: 'Бабаев',
    firstName: 'Кирилл',
    patronymic: 'Георгиевич',
    playerNumber: playerNum,
    birthDate: '29.01.1990',
    playerPic: guardPic,
    role: 'Guard',
  },
];

const TeamCard = () => {
  return (
    <div className=" flex flex-row justify-between xl:mx-16 sm:mx-10 xxs:mx-8 mt-6 xxs:gap-x-8">
      {data.map((item, idX) => {
        return (
          <div key={idX} className="border  border-neutral-800 pt-5 px-5  w-72  min-w-fit">
            <div className="flex justify-between w-4/6">
              <div className=" xl:w-60 xxs:w-60  m-0  ">
                <h3 className="text-white text-lg">{item.lastName}</h3>
                <h3 className="text-neutral-500 text-lg	">{item.firstName}</h3>
                <h3 className="text-neutral-500 text-lg ">{item.patronymic}</h3>
              </div>
              <img
                src={item.playerNumber}
                className="m-0 xl:w-28 ms:w-3/6 ml-20 xxs:w-4/6 h-20 xxs:h-1/3"
              />
            </div>
            <div className="text-neutral-500 border border-neutral-800 px-1.5 xl:text-lg xxs:text-sm w-fit mt-2.5">
              {item.birthDate}
            </div>
            <img src={item.playerPic} className="self-center mx-auto " />
          </div>
        );
      })}
    </div>
  );
};

export default TeamCard;
