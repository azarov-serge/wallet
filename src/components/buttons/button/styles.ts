import styled from '@emotion/styled';

import { defaultTheme } from '@/components/themes';
import { StyledButtonProps } from './types';

const Button = styled.button<StyledButtonProps>`
    ${(props) => {
        const { kind = 'primary', width = 'auto', height = 'auto' } = props;

        const theme = {
            ...defaultTheme,
            ...(props.theme || {}),
        };
        const { palette, typography } = theme;

        return `
          display: inline-block;
          width: ${width};
          height: ${height};
          padding: 1rem;
          border-radius: 0.3em;
          cursor: pointer;
          line-height: 1;
          text-decoration: none;
          border: none;
          color: ${palette.caption};
          background-color: ${palette[kind]};
          font-family: ${typography.text.fontFamily};
          font-size: ${typography.text.fontSize};
          font-weight: 700;
    
          &:hover {
            outline: none;
            opacity: 0.6;
          }
    
          &:disabled {
            opacity: 0.3;
            cursor: not-allowed;
          }
        `;
    }}
`;

export const Styled = {
    Button,
};
