import { themr } from 'react-css-themr';
import { APP_BAR } from '../identifiers';
import { appBarFactory } from './AppBar';
import { IconButton } from '../button';
import productionTheme from './productionTheme.css';
import theme from './theme.css';

const AppBar = appBarFactory(IconButton);
const BaseThemedAppBar = themr(APP_BAR, theme)(AppBar);
const ProductionThemedAppBar = themr(APP_BAR, productionTheme)(AppBar);

export default BaseThemedAppBar;
export { BaseThemedAppBar as AppBar };
export { BaseThemedAppBar as SandboxAppBar };
export { ProductionThemedAppBar as ProductionAppBar };
