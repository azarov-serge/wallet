import styled from '@emotion/styled';

import { isObjectEmpty } from '@/utils/object';
import { dark } from '@/components/themes';
import { StyledButtonProps } from './types';

const Button = styled.button<StyledButtonProps>`
    ${(props) => {
        const { kind = 'primary', width = 'auto', height = 'auto' } = props;

        const theme = isObjectEmpty(props.theme) ? dark : props.theme;

        return `
          display: inline-block;
          width: ${width};
          height: ${height};
          padding: 1rem;
          font-weight: 700;
          border-radius: 0.3em;
          cursor: pointer;
          line-height: 1;
          text-decoration: none;
          border: none;
          color: ${theme.palette.caption};
          background-color: ${theme.palette[kind]};
          font-size: ${theme.font.size};
    
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
