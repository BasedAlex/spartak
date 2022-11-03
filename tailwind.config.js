/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    maxWidth: {
      'screen-xl': '1440px',
    },
    minWidth: {
      '1/2': '50%',
    },
    fontSize: {
      '3xs': '.55rem',
      xxs: '.65rem',
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '1.5xl': '1.4rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      new: [
        '1.625rem',
        {
          lineHeight: '2rem',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        },
      ],
    },
    extend: {
      backgroundImage: {
        'main-picture': "url('/src/assets/images/team-picture.png')",
        'team-profile': "url('/src/assets/images/bgProfile.png')",
        vector: "url('/src/assets/images/Vector.svg')",
        partnership: "url('/src/assets/images/partnershipBG.svg')",
      },
      fontFamily: {
        lufthansaBold: ['Lufthansa Head'],
        lufthansaRegular: ['Lufthansa Text'],
      },
      height: {
        84: '21rem',
        88: '22rem',
        92: '23rem',
        96: '24rem',
        100: '25rem',
        104: '26rem',
        108: '27rem',
        112: '28rem',
        116: '29rem',
        120: '30rem',
        124: '31rem',
        128: '32rem',
        152: '38rem',
        180: '45rem',
        184: '46rem',
        188: '47rem',
        192: '48rem',
        220: '55rem',
        222: '55.5rem',
        224: '56rem',
        228: '57rem',
        232: '58rem',
        236: '59rem',
        240: '60rem',
        244: '61rem',
        248: '62rem',
        252: '63rem',
        256: '64rem',
        280: '70rem',
        284: '71rem',
        288: '72rem',
        292: '73rem',
        296: '74rem',
        300: '75rem',
      },
      width: {
        88: '22rem',
        92: '23rem',
        96: '24rem',
        100: '25rem',
        104: '26rem',
        108: '27rem',
        112: '28rem',
        116: '29rem',
        120: '30rem',
        124: '31rem',
        128: '32rem',
        152: '38rem',
        180: '45rem',
        184: '46rem',
        188: '47rem',
        192: '48rem',
        220: '55rem',
        222: '55.5rem',
        224: '56rem',
        228: '57rem',
        232: '58rem',
        236: '59rem',
        240: '60rem',
        244: '61rem',
        248: '62rem',
        252: '63rem',
        256: '64rem',
        280: '70rem',
        284: '71rem',
        288: '72rem',
        292: '73rem',
        296: '74rem',
        300: '75rem',
      },
      margin: {
        0.25: '0.063rem',
        100: '25rem',
        104: '26rem',
        108: '27rem',
        112: '28rem',
        116: '29rem',
        120: '30rem',
        124: '31rem',
        128: '32rem',
        192: '48rem',
      },
      gridColumn: {
        'span-1/3': '1 / span 3',
        'span-4/3': '4 / span 3',
      },
      gridRowStart: {
        '2/3': '2 / span 3',
      },
      gridTemplateColumns: {
        // For cart box
        cart: '3fr 1fr 1fr 1fr',
        14: 'repeat(14, minmax(0, 1fr))',
        15: 'repeat(15, minmax(0, 1fr))',
        16: 'repeat(16, minmax(0, 1fr))',
        20: 'repeat(20, minmax(0, 1fr))',
        24: 'repeat(20, minmax(0, 1fr))',
      },
      gridColumnStart: {
        13: '13',
        14: '14',
        15: '15',
        16: '16',
        17: '17',
      },
      gridColumnEnd: {
        13: '13',
        14: '14',
        15: '15',
        16: '16',
        17: '17',
      },
    },
    screens: {
      test: '100px',
      xxs: '400px',
      xs: '640px',
      sm: '860px',
      md: '1040px',
      lg: '1240px',
      xl: '1440px',
      '2xl': '1920px',
    },
  },
  plugins: [],
};