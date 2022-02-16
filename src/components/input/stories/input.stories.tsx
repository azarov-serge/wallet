import React from 'react';
import { Meta } from '@storybook/react';

import { Input } from '../input';
import { InputProps } from '../types';
import { Styled } from './styles';

export default {
    title: 'Components/Input',
    component: Input,
} as Meta;

export const ExampleInputText = (args: InputProps) => {
    const { value } = args;

    return (
        <Styled.Wrapper>
            <Input value={value} />
        </Styled.Wrapper>
    );
};

ExampleInputText.argTypes = {
    value: {
        control: { type: 'text' },
    },
};

ExampleInputText.args = {
    value: 'Example text',
};

export const ExampleInputNumber = (args: InputProps) => {
    const { value } = args;

    return (
        <Styled.Wrapper>
            <Input type="number" value={value} />
        </Styled.Wrapper>
    );
};

ExampleInputNumber.argTypes = {
    value: {
        control: { type: 'text' },
    },
};

ExampleInputNumber.args = {
    value: '1',
};

export const ExampleInputEmail = (args: InputProps) => {
    const { value } = args;

    return (
        <Styled.Wrapper>
            <Input type="email" placeholder="example@email.com" value={value} />
        </Styled.Wrapper>
    );
};

ExampleInputEmail.argTypes = {
    value: {
        control: { type: 'text' },
    },
};

ExampleInputEmail.args = {
    value: 'test@test.test',
};
