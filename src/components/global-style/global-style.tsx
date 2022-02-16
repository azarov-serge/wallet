import React from 'react';
/** @jsx jsx */
import { jsx, Global, css, useTheme } from '@emotion/react';
import { SerializedStyles } from '@emotion/utils/types';
import { defaultTheme, ITheme } from '@/components/themes';

const getGlobalStyle = (theme: ITheme): SerializedStyles => css`
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: ${theme.palette.background};
        color: ${theme.palette.text};
        box-sizing: border-box;
        font-family: ${theme.typography.text.fontFamily};
        font-size: ${theme.typography.text.fontSize};
        line-height: ${theme.typography.text.lineHeight};
    }

    a {
        color: ${theme.palette.primary};
    }
`;

export const GlobalStyle: React.FC<Record<any, any>> = (props) => {
    const theme = {
        ...defaultTheme,
        ...(props.theme || {}),
    };

    return <Global styles={getGlobalStyle(theme)} />;
};
