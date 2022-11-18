import React from 'react';
import guardPic from '../assets/images/guardPic.png';
import playerNum from '../assets/images/99.svg';
import { Slider } from './Slider';

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
    <div className=" flex flex-row justify-between mx-16 mt-6 xxs:gap-x-20">
      {data.map((item, idX) => {
        return (
          <div key={idX} className="border  border-neutral-800 pt-5 px-5 w-1/5 xxs:w-1/2">
            <div className="flex justify-between ">
              <div className=" w-60 m-0 ">
                <h3 className="text-white text-lg	">{item.lastName}</h3>
                <h3 className="text-neutral-500 text-lg	">{item.firstName}</h3>
                <h3 className="text-neutral-500 text-lg">{item.patronymic}</h3>
              </div>
              <img src={item.playerNumber} className="m-0 w-28 h-20" />
            </div>
            <div className="text-neutral-500 border border-neutral-800 px-1.5 w-fit mt-2.5">
              {item.birthDate}
            </div>
            <img src={item.playerPic} className="self-center mx-auto" />
          </div>
        );
      })}
    </div>
  );
};

export default TeamCard;
