import React from 'react';

import { Styled } from './styles';
import { ErrorMessageProps } from './types';

export const ErrorMessage: React.FC<ErrorMessageProps> = () => (
    <Styled.Wrapper>Ooooops.... Error 😢 Sorry 🥺</Styled.Wrapper>
);

ErrorMessage.displayName = 'ErrorMessage';
