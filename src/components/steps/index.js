import { themr } from 'react-css-themr';
import { STEPS } from '../identifiers';
import Steps from './Steps';
import Step from './Step';
import theme from './theme.css';

const ThemedSteps = themr(STEPS, theme)(Steps);
const ThemedStep = themr(STEPS, theme)(Step);

export default ThemedSteps;
export { ThemedSteps as Steps };
export { ThemedStep as Step };
