import styled from '@emotion/styled';

import { dark } from '@/components/themes';

import type { StyledProps } from './types';

const Wrapper = styled.div<StyledProps>`
    ${(props) => {
    const { theme: { palette } = dark } = props;
    return `
      width: 100%;
      min-width: 300px;
      height: 100%;
      min-height: 300px;
      padding: 5px 20px;
      background: ${palette.background};
    `;
}}
`;

export const Styled = {
    Wrapper,
};
