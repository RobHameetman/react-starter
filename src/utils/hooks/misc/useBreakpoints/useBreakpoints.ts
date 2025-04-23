import { useEffect, useState } from 'react';

/**
 * Initialize an instance of DataDog RUM for logging. This hook is used once
 * as the application begins to render in `src/App.tsx`.
 */
export const useBreakpoints = () => {
	const getCurrentBreakpoint = () => {
		const viewportSizes = { XS: 0, SM: 650, MD: 960, LG: 1280, XL: 1440, XXL: 1920 };

		return Object.entries(viewportSizes).reduce((result, [upToBp, atLeast]) => {
			if (window.innerWidth > atLeast) {
				return upToBp;
			}

			return result;
		}, '');
	};

	const breakpoint = getCurrentBreakpoint();

	const [breakpoints, setBreakpoints] = useState({
		isXs: breakpoint === 'XS',
		isSm: breakpoint === 'SM',
		isMd: breakpoint === 'MD',
		isLg: breakpoint === 'LG',
		isXl: breakpoint === 'XL',
		isXxl: breakpoint === 'XXL',
		isMobile: breakpoint === 'XS' || breakpoint === 'SM',
		breakpoint: 'XS',
	});

	const checkBreakpoints = () => {
		const breakpoint = getCurrentBreakpoint();

		setBreakpoints({
			isXs: breakpoint === 'XS',
			isSm: breakpoint === 'SM',
			isMd: breakpoint === 'MD',
			isLg: breakpoint === 'LG',
			isXl: breakpoint === 'XL',
			isXxl: breakpoint === 'XXL',
			isMobile: breakpoint === 'XS' || breakpoint === 'SM',
			breakpoint,
		});
	};

	useEffect(() => {
		window.addEventListener('resize', checkBreakpoints);

		return () => {
			window.removeEventListener('resize', checkBreakpoints);
		};
	}, []);

	return breakpoints;
};
