import React from 'react';
import { ITheme } from '../../themes/types';

export const buttonKinds = [
    'primary',
    'secondary',
    'success',
    'information',
    'error',
] as const;

export type ButtonKind = typeof buttonKinds[number];

export interface StyledButtonProps {
    theme?: ITheme;
    kind?: ButtonKind;
    width?: string;
    height?: string;
}

export interface ButtonProps
    extends StyledButtonProps,
        React.ButtonHTMLAttributes<HTMLButtonElement> {}
