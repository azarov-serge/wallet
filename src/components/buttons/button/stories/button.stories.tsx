import React from 'react';
import { Meta } from '@storybook/react';

import { Button } from '../button';
import { buttonKinds } from '../types';
import { StoryButtonProps } from './types';

import { Styled } from './styles';

export default {
    title: 'Components/buttons/Button',
    component: Button,
} as Meta;

export const SimpleButton = (args: StoryButtonProps) => {
    const { kind, text, width, height } = args;

    return (
        <Styled.Wrapper>
            <Button kind={kind} width={width} height={height}>
                {text}
            </Button>
        </Styled.Wrapper>
    );
};

SimpleButton.argTypes = {
    kind: {
        options: buttonKinds,
        control: { type: 'select' },
    },
    text: {
        control: { type: 'text' },
    },
    width: {
        control: { type: 'text' },
    },
    height: {
        control: { type: 'text' },
    },
};

SimpleButton.args = {
    kind: buttonKinds[0],
    text: 'Button',
    width: 'auto',
    height: 'auto',
};

export const Buttons = () => {
    return (
        <Styled.Wrapper>
            {buttonKinds.map((kind) => (
                <Button
                    key={kind}
                    kind={kind}
                >{`Button kind is ${kind}`}</Button>
            ))}
        </Styled.Wrapper>
    );
};
