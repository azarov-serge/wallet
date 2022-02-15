import React from 'react';
import { Meta } from '@storybook/react';

import { textKinds, types } from '@/components/typography/types';

import { Paragraph } from '../paragraph';
import { Styled } from './styles';

import type { ParagraphProps } from '../types';

export default {
    title: 'Components/typography/Paragraph',
    component: Paragraph,
} as Meta;

export const SimpleParagraph = (args: ParagraphProps) => {
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
            <Paragraph
                kind={kind}
                type={type}
                hidden={hidden}
                bold={bold}
                italic={italic}
                underline={underline}
                strikethrough={strikethrough}
            >
                {`Tag: <p> | Kind: ${kind} | Type: ${type}`}
            </Paragraph>
        </Styled.Wrapper>
    );
};

SimpleParagraph.argTypes = {
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

SimpleParagraph.args = {
    hidden: false,
    type: types[0],
    kind: textKinds[0],
    bold: false,
    italic: false,
    underline: false,
    strikethrough: false,
};

export const Paragraphs = () => {
    return (
        <Styled.Wrapper>
            {textKinds.map((kind) => (
                <React.Fragment key={kind}>
                    {types.map((type) => (
                        <React.Fragment key={type}>
                            <Paragraph
                                key={kind + type + 'normal'}
                                kind={kind}
                                type={type}
                            >
                                {`Tag: <p> | Kind: ${kind} | Type: ${type} | Normal`}
                            </Paragraph>
                            <Paragraph
                                key={kind + type + 'bold'}
                                kind={kind}
                                type={type}
                                bold
                            >
                                {`Tag: <p> | Kind: ${kind} | Type: ${type} | Bold`}
                            </Paragraph>
                            <Paragraph
                                key={kind + type + 'italic'}
                                kind={kind}
                                type={type}
                                italic
                            >
                                {`Tag: <p> | Kind: ${kind} | Type: ${type} | Italic`}
                            </Paragraph>
                            <Paragraph
                                key={kind + type + 'underline'}
                                kind={kind}
                                type={type}
                                underline
                            >
                                {`Tag: <p> | Kind: ${kind} | Type: ${type} | Underline`}
                            </Paragraph>
                            <Paragraph
                                key={kind + type + 'strikethrough'}
                                kind={kind}
                                type={type}
                                strikethrough
                            >
                                {`Tag: <p> | Kind: ${kind} | Type: ${type} | Strikethrough`}
                            </Paragraph>
                            <Paragraph
                                key={kind + type + 'bold' + 'italic'}
                                kind={kind}
                                type={type}
                                bold
                                italic
                            >
                                {`Tag: <p> | Kind: ${kind} | Type: ${type} | Bold + Italic`}
                            </Paragraph>
                            <Paragraph
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
                                {`Tag: <p> | Kind: ${kind} | Type: ${type} | Bold + Italic + Underline`}
                            </Paragraph>
                        </React.Fragment>
                    ))}
                </React.Fragment>
            ))}
        </Styled.Wrapper>
    );
};
