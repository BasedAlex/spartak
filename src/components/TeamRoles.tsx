import React from 'react';

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
    <div className="flex mt-6 gap-x-2.5 xl:mx-16 sm:mx-10 xxs:mx-8  2xl:w-auto 2xl:max-w-fit	">
      {data.map((item, idX) => {
        return (
          <button
            key={idX}
            className="border border-neutral-800 xl:text-lg	xxs:text-sm px-4 place-self-center	place-content-center bg-neutral-800	hover:bg-white	text-neutral-500 hover:text-black rounded-xl	"
          >
            {item.roleName}
          </button>
        );
      })}
    </div>
  );
};

export default TeamRoles;
