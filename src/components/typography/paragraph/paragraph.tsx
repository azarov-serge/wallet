import React from 'react';

import { Styled } from './styles';
import { ParagraphProps } from './types';

export const Paragraph: React.FC<ParagraphProps> = (props) => {
    const { children } = props;

    return <Styled.Paragraph {...props}>{children}</Styled.Paragraph>;
};
