import React from 'react';
import managerPic from '../assets/images/Manager.png';

const data = [
  {
    lastName: 'Хотимский',
    firstName: 'Дмитрий',
    patronymic: 'Владимирович',
    position: 'УЧРЕДИТЕЛЬ ФК «СПАРТАК» Г. КОСТРОМА ',
    staffPic: managerPic,
    isOwner: true,
  },
  {
    lastName: 'Хотимский',
    firstName: 'Дмитрий',
    patronymic: 'Владимирович',
    position: 'УЧРЕДИТЕЛЬ ФК «СПАРТАК» Г. КОСТРОМА ',
    staffPic: managerPic,
    isOwner: true,
  },
  {
    lastName: 'Хотимский',
    firstName: 'Дмитрий',
    patronymic: 'Владимирович',
    position: 'УЧРЕДИТЕЛЬ ФК «СПАРТАК» Г. КОСТРОМА ',
    staffPic: managerPic,
    isOwner: true,
  },
  {
    lastName: 'Хотимский',
    firstName: 'Дмитрий',
    patronymic: 'Владимирович',
    position: 'УЧРЕДИТЕЛЬ ФК «СПАРТАК» Г. КОСТРОМА ',
    staffPic: managerPic,
    isOwner: true,
  },
];

const StaffCard = () => {
  return (
    <div className="flex flex-row justify-between mt-6 xxs:gap-x-8 xl:mx-16 sm:mx-10 xxs:mx-8">
      {data.map((item, idX) => {
        return (
          <div key={idX} className="border border-neutral-800 pt-5 px-5 vector-bg w-72 min-w-fit">
            <div className="xl:w-60 xxs:w-60  m-0  ">
              <h3 className="text-white text-lg	">{item.lastName}</h3>
              <h3 className="text-neutral-500 text-lg	">{item.firstName}</h3>
              <h3 className="text-neutral-500 text-lg	">{item.patronymic}</h3>
            </div>

            <div className="text-white text-xs border xl:text-lg	xxs:text-xs border-neutral-800 px-1.5 w-fit mt-2.5">
              {item.position}
            </div>
            <img src={item.staffPic} className="self-center mx-auto" />
          </div>
        );
      })}
    </div>
  );
};

export default StaffCard;
