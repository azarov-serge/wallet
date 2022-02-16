import React from 'react';
import { Meta } from '@storybook/react';

import { Loader } from '../loader';
import { LoaderProp } from '../types';
import { Styled } from './styles';

export default {
	title: 'Components/Loader',
	component: Loader,
} as Meta;

export const ExampleLoader = (args: LoaderProp) => {
	const { isAnimate = false } = args;

	return (
		<Styled.Wrapper>
			<Loader isAnimate={isAnimate} />
		</Styled.Wrapper>
	);
};

ExampleLoader.argTypes = {
	isAnimate: {
		options: [true, false],
		control: { type: 'radio' },
	},
};

ExampleLoader.args = {
	isAnimate: false,
};
