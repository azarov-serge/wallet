import styled from '@emotion/styled';

import { defaultTheme, ITheme } from '@/components/themes';
import { StyledWrapperProps } from './types';

const Wrapper = styled.div<StyledWrapperProps>`
    ${(props) => {
        const theme: ITheme = {
            ...defaultTheme,
            ...(props.theme || {}),
        };

        return `
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            height: 100%;
            padding: 15px;  
            background: ${theme.palette.background};
            font-family: ${theme.typography.text.fontFamily};
            font-size: ${theme.typography.text.fontSize};
        `;
    }}
`;

const IconWrapper = styled.div<StyledWrapperProps>`
    ${(props) => {
        const theme: ITheme = {
            ...defaultTheme,
            ...(props.theme || {}),
        };

        return `
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width:128px;
            height: 128px;
            margin: 10px;
            padding: 5px;
            box-sizing: border-box; 
            border: 1px solid ${theme.palette.border};
            font-size: 32px;
        `;
    }}
`;

const IconText = styled.p`
    ${(props) => {
        const theme: ITheme = {
            ...defaultTheme,
            ...(props.theme || {}),
        };

        return `
            font-family: ${theme.typography.text.fontFamily};
            font-size: ${theme.typography.text.fontSize};
        `;
    }}
`;

export const Styled = {
    Wrapper,
    IconWrapper,
    IconText,
};
