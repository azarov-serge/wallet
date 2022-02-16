import React from 'react';
import { Meta } from '@storybook/react';

import { BarChart } from '../bar-chart';
import { CrossMark } from '../cross-mark';
import { Magnifier } from '../magnifier';
import { MoneyBag } from '../money-bag';
import { Shrugging } from '../shrugging';
import { MoneyWithWings } from '../money-with-wings';
import { VerticalEllipsis } from '../vertical-ellipsis';
import { WavingHand } from '../waving-hand';
import { Styled } from './styles';

export default {
    title: 'Components/emoji',
} as Meta;

export const ExampleEmoji = () => {
    return (
        <>
            <Styled.Wrapper>
                <Styled.IconText>The font size of icon is 32px</Styled.IconText>
            </Styled.Wrapper>

            <Styled.Wrapper>
                <Styled.IconWrapper>
                    <BarChart />
                    <Styled.IconText>BarChart</Styled.IconText>
                </Styled.IconWrapper>

                <Styled.IconWrapper>
                    <CrossMark />
                    <Styled.IconText>CrossMark</Styled.IconText>
                </Styled.IconWrapper>

                <Styled.IconWrapper>
                    <Magnifier />
                    <Styled.IconText>Magnifier</Styled.IconText>
                </Styled.IconWrapper>

                <Styled.IconWrapper>
                    <MoneyBag />
                    <Styled.IconText>MoneyBag</Styled.IconText>
                </Styled.IconWrapper>

                <Styled.IconWrapper>
                    <Shrugging />
                    <Styled.IconText>Shrugging</Styled.IconText>
                </Styled.IconWrapper>

                <Styled.IconWrapper>
                    <MoneyWithWings />
                    <Styled.IconText>MoneyWithWings</Styled.IconText>
                </Styled.IconWrapper>

                <Styled.IconWrapper>
                    <VerticalEllipsis />
                    <Styled.IconText>VerticalEllipsis</Styled.IconText>
                </Styled.IconWrapper>

                <Styled.IconWrapper>
                    <WavingHand />
                    <Styled.IconText>WavingHand</Styled.IconText>
                </Styled.IconWrapper>
            </Styled.Wrapper>
        </>
    );
};
