import { ITheme } from '@/components/themes';
import { TTitleKind, TTitleType } from '@/components/typography/types';

export interface StyledTitleProps {
    theme?: ITheme;
    type?: TTitleType;
    hidden?: boolean;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
}

export interface TitleProps extends StyledTitleProps{
    kind: TTitleKind;
}
