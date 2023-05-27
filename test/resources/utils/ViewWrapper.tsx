import { MemoryRouter, Route, Routes } from 'react-router';
import { FC, Suspense } from 'react';

export const ViewWrapper: FC = ({ children }) => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<MemoryRouter>
				<Routes>
					<Route path="*" element={children} />
				</Routes>
			</MemoryRouter>
		</Suspense>
	);
};
