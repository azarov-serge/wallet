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
            justify-content: space-between;
            width: 100%;
            height: 100%;
            padding: 15px;  
            background: ${theme.palette.background};
        `;
    }}
`;

export const Styled = {
    Wrapper,
};
