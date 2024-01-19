import { useEffect, useState } from 'react';

/**
 * Initialize an instance of DataDog RUM for logging. This hook is used once
 * as the application begins to render in `src/App.tsx`.
 */
export const useBreakpoints = () => {
	const [breakpoints, setBreakpoints] = useState({
		isXs: false,
		isSm: false,
		isMd: false,
		isLg: false,
		isXl: false,
		isXxl: false,
		isMobile: false,
		breakpoint: 'XL',
	});

	useEffect(() => {
		const checkBreakpoints = () => {
			const isXs = window.innerWidth <= 650;
			const isSm = window.innerWidth > 650 && window.innerWidth <= 960;
			const isMd = window.innerWidth > 960 && window.innerWidth <= 1280;
			const isLg = window.innerWidth > 1280 && window.innerWidth <= 1440;
			const isXl = window.innerWidth > 1440 && window.innerWidth <= 1920;
			const isXxl = window.innerWidth > 1920;

			const isMobile = window.innerWidth <= 960;
			let breakpoint = '';

			if (isXs) {
				breakpoint = 'XS';
			} else if (isSm) {
				breakpoint = 'SM';
			} else if (isMd) {
				breakpoint = 'MD';
			} else if (isLg) {
				breakpoint = 'LG';
			} else if (isXl) {
				breakpoint = 'XL';
			} else if (isXxl) {
				breakpoint = 'XXL';
			}

			setBreakpoints({
				isXs,
				isSm,
				isMd,
				isLg,
				isXl,
				isXxl,
				isMobile,
				breakpoint,
			});
		};

		checkBreakpoints();

		window.addEventListener('resize', checkBreakpoints);

		return () => {
			window.removeEventListener('resize', checkBreakpoints);
		};
	}, []);

	return breakpoints;
};
