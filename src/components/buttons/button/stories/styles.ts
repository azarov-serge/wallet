import styled from '@emotion/styled';

import { dark, ITheme } from '@/components/themes';
import { isObjectEmpty } from '@/utils/object';
import { StyledWrapperProps } from './types';

const Wrapper = styled.div<StyledWrapperProps>`
    ${(props) => {
        const theme: ITheme = isObjectEmpty(props.theme) ? dark : props.theme;

        return `
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: 100%;
          padding: 15px;
          
          background-color: ${theme.palette.background};
    `;
    }}
`;

export const Styled = {
    Wrapper,
};