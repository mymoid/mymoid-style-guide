import { themr } from 'react-css-themr';
import { LAYOUT } from '../identifiers';
import { layoutFactory } from './Layout';
import { Panel } from './Panel';
import { PanelActions } from './PanelActions';
import { PanelTitle } from './PanelTitle';
import { PanelContent } from './PanelContent';
import { navDrawerFactory } from './NavDrawer';
// TODO: make floating as panel with configuration
import { FloatingCenteredPanel } from './FloatingCenteredPanel';
import GradietnLayout from './GradientLayout';
import { Drawer } from '../drawer';
import theme from './theme.css';

const injectTheme = component => themr(LAYOUT, theme)(component);
const ThemedPanel = injectTheme(Panel);
const ThemedFloatingCenteredPanel = injectTheme(FloatingCenteredPanel);
const ThemedPanelContent = injectTheme(PanelContent);
const ThemedNavDrawer = injectTheme(navDrawerFactory(Drawer));
const ThemedLayout = injectTheme(layoutFactory(ThemedNavDrawer));
const ThemedPanelActions = themr(LAYOUT, theme)(PanelActions);
const ThemedPanelTitle = themr(LAYOUT, theme)(PanelTitle);

export default ThemedLayout;
export { ThemedLayout as Layout };
export { GradietnLayout as GradientLayout };
export { ThemedPanel as Panel };
export { ThemedFloatingCenteredPanel as FloatingCenteredPanel };
export { ThemedPanelContent as PanelContent };
export { ThemedPanelActions as PanelActions };
export { ThemedPanelTitle as PanelTitle };
export { ThemedNavDrawer as NavDrawer };
