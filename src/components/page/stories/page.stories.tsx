import React from 'react';
import { Meta } from '@storybook/react';

import { Page } from '../page';
import { StoryPageProps } from './types';
import { stylePage } from './styles';

export default {
	title: 'Components/Page',
	component: Page,
} as Meta;

export const ExamplePage = (args: StoryPageProps) => {
	const { text } = args;

	return <Page style={stylePage}>{'width: 1280px | padding: 0 10px | text: ' + text}</Page>;
};

ExamplePage.argTypes = {
	text: {
		control: { type: 'text' },
	},
};

ExamplePage.args = {
	text: 'Example text',
};
