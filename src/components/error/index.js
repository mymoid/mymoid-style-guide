import { themr } from 'react-css-themr';
import { ERROR } from '../identifiers';
import { Error } from './Error';
import theme from './theme.css';

const ThemedError = themr(ERROR, theme)(Error);

export default ThemedError;
export { ThemedError as Error };
