import { ButtonProps } from '../types';
import { ITheme } from '@/components/themes';

export interface StoryButtonProps extends ButtonProps {
    text: string;
    width?: string;
    height?: string;
}

export interface StyledWrapperProps {
    theme?: ITheme;
}
