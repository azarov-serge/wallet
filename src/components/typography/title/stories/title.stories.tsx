import React from 'react';
import { Meta } from '@storybook/react';

import { titleKinds, types } from '@/components/typography/types';

import { Title } from '../title';
import { Styled } from './styles';

import type { TitleProps } from '../types';

export default {
    title: 'Components/typography/Title',
    component: Title,
} as Meta;

export const SimpleTitle = (args: TitleProps) => {
    const {
        type = types[0],
        kind = titleKinds[0],
        hidden = false,
        bold = true,
        italic = false,
        underline = false,
        strikethrough = false,
    } = args;

    return (
        <Styled.Wrapper>
            <Title
                kind={kind}
                type={type}
                hidden={hidden}
                bold={bold}
                italic={italic}
                underline={underline}
                strikethrough={strikethrough}
            >
                {`Tag: <h${kind.slice(-1)}> | Kind: ${kind} | Type: ${type}`}
            </Title>
        </Styled.Wrapper>
    );
};

SimpleTitle.argTypes = {
    hidden: {
        options: [true, false],
        control: { type: 'radio' },
    },
    type: {
        options: types,
        control: { type: 'select' },
    },
    kind: {
        options: titleKinds,
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

SimpleTitle.args = {
    hidden: false,
    type: types[0],
    kind: titleKinds[0],
    bold: true,
    italic: false,
    underline: false,
    strikethrough: false,
};

export const Titles = () => {
    return (
        <Styled.Wrapper>
            {titleKinds.map((kind) => (
                <React.Fragment key={kind}>
                    {types.map((type) => (
                        <React.Fragment key={type}>
                            <Title key={kind + type + 'normal'} kind={kind} type={type}>
                                {`Tag: <h${kind.slice(-1)}> | Kind: ${kind} | Type: ${type} | Normal`}
                            </Title>
                            <Title
                                key={kind + type + 'bold'}
                                kind={kind}
                                type={type}
                                bold
                            >
                                {`Tag: <h${kind.slice(-1)}> | Kind: ${kind} | Type: ${type} | Bold`}
                            </Title>
                            <Title
                                key={kind + type + 'italic'}
                                kind={kind}
                                type={type}
                                italic
                            >
                                {`Tag: <h${kind.slice(-1)}> | Kind: ${kind} | Type: ${type} | Italic`}
                            </Title>
                            <Title
                                key={kind + type + 'underline'}
                                kind={kind}
                                type={type}
                                underline
                            >
                                {`Tag: <h${kind.slice(-1)}> | Kind: ${kind} | Type: ${type} | Underline`}
                            </Title>
                            <Title
                                key={kind + type + 'strikethrough'}
                                kind={kind}
                                type={type}
                                strikethrough
                            >
                                {`Tag: <h${kind.slice(-1)}> | Kind: ${kind} | Type: ${type} | Strikethrough`}
                            </Title>
                            <Title
                                key={kind + type + 'bold' + 'italic'}
                                kind={kind}
                                type={type}
                                bold
                                italic
                            >
                                {`Tag: <h${kind.slice(-1)}> | Kind: ${kind} | Type: ${type} | Bold + Italic`}
                            </Title>
                            <Title
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
                                {`Tag: <h${kind.slice(-1)}> | Kind: ${kind} | Type: ${type} | Bold + Italic + Underline`}
                            </Title>
                        </React.Fragment>
                    ))}
                </React.Fragment>
            ))}
        </Styled.Wrapper>
    );
};
