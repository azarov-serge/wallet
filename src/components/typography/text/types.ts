import { ITheme } from '@/components/themes';
import { TTextKind, TTextType } from '@/components/typography/types';

export interface TextProps {
    theme?: ITheme;
    kind?: TTextKind;
    type?: TTextType;
    hidden?: boolean;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
}
