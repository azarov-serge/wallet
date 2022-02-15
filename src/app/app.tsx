import React from 'react';
import { jsx, ThemeProvider } from '@emotion/react';
import { Button } from '@/components/buttons/button';
import { GlobalStyle } from '@/components/global-style';
import { dark } from '@/components/themes';

export const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyle />
            <Button>Hello world</Button>
        </ThemeProvider>
    );
};

App.displayName = 'App';
