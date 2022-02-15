import React from 'react';
import { Meta } from '@storybook/react';

import { textKinds, types } from '@/components/typography/types';

import { Text } from '../text';
import { Styled } from './styles';

import type { TextProps } from '../types';

export default {
    title: 'Components/typography/Text',
    component: Text,
} as Meta;

export const SimpleText = (args: TextProps) => {
    const {
        type = types[0],
        kind = textKinds[0],
        hidden = false,
        bold = false,
        italic = false,
        underline = false,
        strikethrough = false,
    } = args;

    return (
        <Styled.Wrapper>
            <Text
                kind={kind}
                type={type}
                hidden={hidden}
                bold={bold}
                italic={italic}
                underline={underline}
                strikethrough={strikethrough}
            >
                {`Tag: <span> | Kind: ${kind} | Type: ${type}`}
            </Text>
        </Styled.Wrapper>
    );
};

SimpleText.argTypes = {
    hidden: {
        options: [true, false],
        control: { type: 'radio' },
    },
    type: {
        options: types,
        control: { type: 'select' },
    },
    kind: {
        options: textKinds,
        control: { type: 'select' },
    },
    bold: {
        options: [true, false],
        control: { type: 'radio' },
    },
    italic: {
        options: [true, false],
        control: { type: 'radio' },
    },
    underline: {
        options: [true, false],
        control: { type: 'radio' },
    },
    strikethrough: {
        options: [true, false],
        control: { type: 'radio' },
    },
};

SimpleText.args = {
    hidden: false,
    type: types[0],
    kind: textKinds[0],
    bold: false,
    italic: false,
    underline: false,
    strikethrough: false,
};

export const Texts = () => {
    return (
        <Styled.Wrapper>
            {textKinds.map((kind) => (
                <React.Fragment key={kind}>
                    {types.map((type) => (
                        <React.Fragment key={type}>
                            <Text
                                key={kind + type + 'normal'}
                                kind={kind}
                                type={type}
                            >
                                {`Tag: <span> | Kind: ${kind} | Type: ${type} | Normal`}
                            </Text>
                            <br />
                            <Text
                                key={kind + type + 'bold'}
                                kind={kind}
                                type={type}
                                bold
                            >
                                {`Tag: <span> | Kind: ${kind} | Type: ${type} | Bold`}
                            </Text>
                            <br />
                            <Text
                                key={kind + type + 'italic'}
                                kind={kind}
                                type={type}
                                italic
                            >
                                {`Tag: <span> | Kind: ${kind} | Type: ${type} | Italic`}
                            </Text>
                            <br />
                            <Text
                                key={kind + type + 'underline'}
                                kind={kind}
                                type={type}
                                underline
                            >
                                {`Tag: <span> | Kind: ${kind} | Type: ${type} | Underline`}
                            </Text>
                            <br />
                            <Text
                                key={kind + type + 'strikethrough'}
                                kind={kind}
                                type={type}
                                strikethrough
                            >
                                {`Tag: <span> | Kind: ${kind} | Type: ${type} | Strikethrough`}
                            </Text>
                            <br />
                            <Text
                                key={kind + type + 'bold' + 'italic'}
                                kind={kind}
                                type={type}
                                bold
                                italic
                            >
                                {`Tag: <span> | Kind: ${kind} | Type: ${type} | Bold + Italic`}
                            </Text>
                            <br />
                            <Text
                                key={
                                    kind +
                                    type +
                                    'bold' +
                                    'italic' +
                                    'underline'
                                }
                                kind={kind}
                                type={type}
                                bold
                                italic
                                underline
                            >
                                {`Tag: <span> | Kind: ${kind} | Type: ${type} | Bold + Italic + Underline`}
                            </Text>
                            <br />
                        </React.Fragment>
                    ))}
                </React.Fragment>
            ))}
        </Styled.Wrapper>
    );
};
