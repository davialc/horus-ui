import { createStitches, defaultThemeMap } from '@stitches/react';
import {
	colors,
	fontSizes,
	fontWeights,
	fonts,
	lineHeights,
	radii,
	space,
} from '@horus-finance/tokens';

export const {
	styled,
	css,
	globalCss,
	keyframes,
	getCssText,
	theme,
	createTheme,
	config,
} = createStitches({
	themeMap: {
		...defaultThemeMap,
		height: 'space',
		width: 'space',
	},
	theme: {
		colors,
		fontWeights,
		fontSizes,
		radii,
		fonts,
		lineHeights,
		space,
	},
});
