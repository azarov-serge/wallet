import React, { useContext, useEffect } from 'react';
/** @jsx jsx */
import { jsx, ThemeProvider } from '@emotion/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { dark, light, ThemeName } from '@/components/themes';

export const parameters = {
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
        },
    },
};

export const globalTypes = {
    themeName: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: ThemeName.LIGHT,
        toolbar: {
            icon: 'circlehollow',
            items: [ThemeName.LIGHT, ThemeName.DARK],
            showName: true,
        },
    },
};

// Function to obtain the intended theme
const getTheme = (themeName) => {
    return themeName === ThemeName.LIGHT ? light : dark;
};

const withThemeContext = (Story, context) => {
    const theme = getTheme(context.globals.themeName);

    return (
        <ThemeProvider theme={theme}>
            <Story {...context} />
        </ThemeProvider>
    );
};

export const decorators = [withThemeContext];
