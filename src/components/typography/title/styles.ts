import styled from '@emotion/styled';

import { defaultTheme } from '@/components/themes';
import { StyledTitleProps } from './types';
import { getKindStyle } from '@/components/typography/utils/style';
import { TTitleKind } from '@/components/typography/types';

const createTitleStyle = (
    props: StyledTitleProps,
    kind: TTitleKind
): string => {
    const {
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
            color: ${palette[type]};
            font-weight: ${bold ? 'bold' : 'normal'};
            font-style: ${italic ? 'italic' : 'normal'};
            text-decoration: ${decoration};
            color: ${palette[type]};
        `;
};

const Title1 = styled.h1<StyledTitleProps>`
    ${(props) => {
        return createTitleStyle(props, 'title1');
    }}
`;

const Title2 = styled.h2<StyledTitleProps>`
    ${(props) => {
        return createTitleStyle(props, 'title2');
    }}
`;

const Title3 = styled.h3<StyledTitleProps>`
    ${(props) => {
        return createTitleStyle(props, 'title3');
    }}
`;

export const Styled = {
    Title1,
    Title2,
    Title3,
};
