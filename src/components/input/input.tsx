import React from 'react';

import { Styled } from './styles';
import { InputProps } from './types';

export const Input: React.FC<InputProps> = (props) => {
    return <Styled.Input {...props} />;
};

Input.displayName = 'Input';
