import React from 'react';

import { Styled } from './styles';
import { PageProps } from './types';

export const Page: React.FC<PageProps> = (props) => {
	if (!props.children) {
		return null;
	}

	return <Styled.Page {...props}>{props.children}</Styled.Page>;
};

Page.displayName = 'Page';
