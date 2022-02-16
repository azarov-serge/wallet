import styled from '@emotion/styled';

import { defaultTheme } from '@/components/themes';
import { TextProps } from './types';
import { getKindStyle } from '@/components/typography/utils/style';

const Text = styled.span<TextProps>`
    ${(props) => {
        const {
            kind = 'text',
            type = 'text',
            hidden = false,
            bold = false,
            italic = false,
            underline = false,
            strikethrough = false,
        } = props;

        const theme = {
            ...defaultTheme,
            ...(props.theme || {}),
        };

        const { palette } = theme;
        let decoration = 'normal';

        if (underline) {
            decoration = 'underline';
        } else if (strikethrough) {
            decoration = 'line-through';
        }

        return `
            ${getKindStyle(theme, kind, hidden)}
            font-weight: ${bold ? 'bold' : 'normal'};
            font-style: ${italic ? 'italic' : 'normal'};
            text-decoration: ${decoration};
            color: ${palette[type]};
        `;
    }}
`;

export const Styled = {
    Text,
};
