import { themr } from 'react-css-themr';
import { OTP } from '../identifiers';
import { Code } from './Code';
import theme from './theme.css';

const ThemedOtp = themr(OTP, theme)(Code);

export default ThemedOtp;
export { ThemedOtp as Otp };
