const CopyIcon = () => {
	return (
		<svg
			id='Copy_24'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect width='24' height='24' stroke='none' fill='#000000' opacity='0' />
			<g transform='matrix(1 0 0 1 12 12)'>
				<path
					style={{
						stroke: 'none',
						border: "2px solid white",
						strokeWidth: 1,
						strokeDasharray: 'none',
						strokeLinecap: 'butt',
						strokeDashoffset: 0,
						strokeLinejoin: 'miter',
						strokeMiterlimit: 4,
						fill: 'white',
						fillRule: 'nonzero',
						opacity: 1,
						transition: 'border 0.3s',
						boxSizing: 'border-box',
					}}
					transform='translate(-12, -12)'
					d='M 4 2 C 2.895 2 2 2.895 2 4 L 2 18 L 4 18 L 4 4 L 18 4 L 18 2 L 4 2 z M 8 6 C 6.895 6 6 6.895 6 8 L 6 20 C 6 21.105 6.895 22 8 22 L 20 22 C 21.105 22 22 21.105 22 20 L 22 8 C 22 6.895 21.105 6 20 6 L 8 6 z M 8 8 L 20 8 L 20 20 L 8 20 L 8 8 z'
					strokeLinecap='round'
				/>
			</g>
		</svg>
	);
};

export default CopyIcon;
