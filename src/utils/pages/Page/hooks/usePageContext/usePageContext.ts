import { useContext } from 'react';
import { PageContext } from '@/utils/pages/Page/contexts/PageContext';

export const usePageContext = () =>
	useContext<PageContext>(PageContext);

export default usePageContext;
