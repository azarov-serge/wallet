import React from 'react';

import { Styled } from './styles';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = (props) => {
    return <Styled.Button {...props}>{props.children}</Styled.Button>;
};

Button.displayName = 'Button';
