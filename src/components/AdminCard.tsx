import React from 'react';
import managerPic from '../assets/images/Manager.png';

const data = [
  {
    lastName: 'Хотимский',
    firstName: 'Дмитрий',
    patronymic: 'Владимирович',
    position: 'УЧРЕДИТЕЛЬ ФК «СПАРТАК» Г. КОСТРОМА ',
    staffPic: managerPic,
    isOwner: false,
  },
  {
    lastName: 'Хотимский',
    firstName: 'Дмитрий',
    patronymic: 'Владимирович',
    position: 'УЧРЕДИТЕЛЬ ФК «СПАРТАК» Г. КОСТРОМА ',
    staffPic: managerPic,
    isOwner: false,
  },
  {
    lastName: 'Хотимский',
    firstName: 'Дмитрий',
    patronymic: 'Владимирович',
    position: 'УЧРЕДИТЕЛЬ ФК «СПАРТАК» Г. КОСТРОМА ',
    staffPic: managerPic,
    isOwner: false,
  },
  {
    lastName: 'Хотимский',
    firstName: 'Дмитрий',
    patronymic: 'Владимирович',
    position: 'УЧРЕДИТЕЛЬ ФК «СПАРТАК» Г. КОСТРОМА ',
    staffPic: managerPic,
    isOwner: false,
  },
];

const AdminCard = () => {
  return (
    <div className="flex flex-row justify-between mt-6 xxs:gap-x-20">
      {data.map((item, idX) => {
        return (
          <div key={idX} className="border border-neutral-800 pt-5 px-5 vector-bg w-1/5 xxs:w-1/2">
            <div className="w-60 m-0 ">
              <h3 className="text-white text-lg	">{item.lastName}</h3>
              <h3 className="text-neutral-500 text-lg	">{item.firstName}</h3>
              <h3 className="text-neutral-500 text-lg">{item.patronymic}</h3>
            </div>

            <div className="text-white text-xs border border-neutral-800 px-1.5 w-fit mt-2.5">
              {item.position}
            </div>
            <img src={item.staffPic} className="self-center mx-auto" />
          </div>
        );
      })}
    </div>
  );
};

export default AdminCard;
