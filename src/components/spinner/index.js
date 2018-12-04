import { themr } from 'react-css-themr';
import { SPINNER } from '../identifiers';
import Dots from './Dots';
import theme from './theme.css';

const ThemedDots = themr(SPINNER, theme)(Dots);
export default ThemedDots;
export { ThemedDots as SpinnerDots };
