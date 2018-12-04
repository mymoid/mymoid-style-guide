import { themr } from 'react-css-themr';
import { MEDIA } from '../identifiers';
import { Media } from './Media';
import theme from './theme.css';

const ThemedMedia = themr(MEDIA, theme)(Media);

export default ThemedMedia;
export { ThemedMedia as Media };
