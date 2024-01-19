import { $FC, Suspense } from 'react';
import { MemoryRouter, Route, Routes } from 'react-router';

export const ViewWrapper: $FC = ({ children }) => {
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
