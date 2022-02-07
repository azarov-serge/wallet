import 'jsdom-global/register';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

import { ErrorBoundary } from './error-boundary';
import { ErrorMessage } from './components';

configure({ adapter: new Adapter() });

const Something = () => null;

describe('ErrorBoundary', () => {
    it('ErrorBoundary work correct', () => {
        const createError = () => {
            throw new Error();
        };

        const testWrapper = mount(
            <ErrorBoundary>
                <Something />
            </ErrorBoundary>
        );

        const error = new Error('test');
        testWrapper.find(Something).simulateError(error);
        expect(testWrapper.contains(<ErrorMessage />)).toEqual(true);
    });
});
