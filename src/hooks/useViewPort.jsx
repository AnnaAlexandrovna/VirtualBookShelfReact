import { viewportContext } from '../utils/providers/viewportProvider';
import { useContext } from 'react';

const useViewport = () => {
    const { width } = useContext(viewportContext);
    return width;
};
export default useViewport;