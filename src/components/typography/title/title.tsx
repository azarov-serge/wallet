import React from 'react';

import { Styled } from './styles';
import { TitleProps } from './types';

export const Title: React.FC<TitleProps> = (props) => {
    const { kind, children } = props;

    switch (kind) {
        case 'title1':
            return <Styled.Title1 {...props}>{children}</Styled.Title1>;
        case 'title2':
            return <Styled.Title2 {...props}>{children}</Styled.Title2>;
        case 'title3':
            return <Styled.Title3 {...props}>{children}</Styled.Title3>;
        default:
            console.error('Unknown kind: ', kind);
            return <Styled.Title1 {...props}>{children}</Styled.Title1>;
    }
};
