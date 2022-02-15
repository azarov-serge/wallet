import React from 'react';

import { Styled } from './styles';
import { TextProps } from './types';

export const Text: React.FC<TextProps> = (props) => {
    const { children } = props;

    return <Styled.Text {...props}>{children}</Styled.Text>;
};
