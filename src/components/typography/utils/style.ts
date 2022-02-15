import { ITheme } from '@/components/themes';
import { TTextKind, TTitleKind } from '../types';
import { HIDDEN_STYLE } from '../constants/common-styles';

export const getKindStyle = (
    theme: ITheme,
    kind: TTitleKind | TTextKind,
    hidden: boolean
) => {
    if (hidden) {
        return HIDDEN_STYLE;
    }

    const textStyle = theme.typography[kind];

    return `
        font-family: ${textStyle.fontFamily};
        font-weight: ${textStyle.fontWeight};
        font-size: ${textStyle.fontSize};
        line-height: ${textStyle.lineHeight};
  `;
};
