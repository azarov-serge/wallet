import styled from '@emotion/styled';

import { isObjectEmpty } from '@/utils/object';
import { dark } from '@/components/themes';

import { WrapperProps } from './types';

const Wrapper = styled.p<WrapperProps>`
    ${(props) => {
        const theme = isObjectEmpty(props.theme) ? dark : props.theme;

        return `
          font-weight: bold;
          color: ${theme.palette.error};
          font-size: ${theme.font.size};
          line-height: ${theme.font.lineHeight};
    `;
    }}
`;

export const Styled = {
    Wrapper,
};
