const TickSvg = () => {
  return (

      <svg
        id='Tick_Box_24'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect width='24' height='24' stroke='none' fill='#000000' opacity='0' />
        <g transform='matrix(0.91 0 0 0.91 12 12)'>
          <path
            style={{
              stroke: 'none',
              strokeWidth: 1,
              strokeDasharray: 'none',
              strokeLinecap: 'butt',
              strokeDashoffset: 0,
              strokeLinejoin: 'miter',
              strokeMiterlimit: 4,
              fill: '#25D366', // Change fill to WhatsApp green
              fillRule: 'nonzero',
              opacity: 1,
            }}
            transform='translate(-15, -15)'
            d='M 14.147 19.267 C 13.959 19.455 13.705 19.56 13.44 19.56 C 13.175 19.56 12.92 19.455 12.733 19.267 L 9.28 15.814 C 8.889 15.423 8.889 14.791 9.28 14.4 C 9.671 14.009 10.303 14.009 10.694 14.4 L 13.44 17.146 L 25.674 4.911 C 25.318 4.364 24.702 4 24 4 L 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 7.414 L 14.147 19.267 z'
            strokeLinecap='round'
          />
        </g>
      </svg>
  );
};

export default TickSvg;
