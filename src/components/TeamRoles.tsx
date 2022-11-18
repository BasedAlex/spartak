import React from 'react';
import guardPic from '../assets/images/guardPic.png';
import playerNum from '../assets/images/99.svg';

// import { Slider } from './Slider';

const data = [
  { roleName: 'ЗАЩИТНИКИ' },
  { roleName: 'ПОЛУЗАЩИТНИКИ' },
  { roleName: 'НАПАДАЮЩИЕ' },
  { roleName: 'ВРАТАРИ' },
  { roleName: 'ТРЕНЕРСКИЙ ШТАБ' },
  { roleName: 'ПЕРСОНАЛ' },
];

const TeamRoles = () => {
  return (
    <div className="flex mt-6 gap-x-2.5 mx-16 2xl:w-auto 2xl:max-w-fit	">
      {data.map((item, idX) => {
        return (
          <button
            key={idX}
            className="border border-neutral-800  px-4 place-self-center	place-content-center bg-neutral-800	hover:bg-white	text-neutral-500 hover:text-black rounded-xl	"
          >
            {item.roleName}
          </button>
        );
      })}
    </div>
  );
};

export default TeamRoles;
