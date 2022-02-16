import styled from '@emotion/styled';

import { defaultTheme } from '@/components/themes';

const Input = styled.input`
    ${(props) => {
        const theme = {
            ...defaultTheme,
            ...(props.theme || {}),
        };

        const { palette, typography } = theme;

        return `
            width: 100%;
            background: ${palette.background};
            border: 1px solid  ${palette.border};
            padding: 1em;
            margin: 1em 0;
            color: ${palette.text};
            font-family: ${typography.text.fontFamily};
            font-size: ${typography.text.fontSize};
            line-height: ${typography.text.lineHeight};
            box-sizing: border-box;
        `;
    }}
`;

export const Styled = {
    Input,
};
