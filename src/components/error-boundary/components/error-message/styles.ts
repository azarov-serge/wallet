import styled from '@emotion/styled';

import { isObjectEmpty } from '@/utils/object';
import { dark } from '@/components/themes';

import { WrapperProps } from './types';

const Wrapper = styled.p<WrapperProps>`
    ${(props) => {
        const theme =
            !props.theme || isObjectEmpty(props.theme) ? dark : props.theme;

        return `
          color: ${theme.palette.error};
          font-family: ${theme.typography.title3.fontFamily};
          font-size: ${theme.typography.title3.fontSize};
          line-height: ${theme.typography.title3.lineHeight};
    `;
    }}
`;

export const Styled = {
    Wrapper,
};
