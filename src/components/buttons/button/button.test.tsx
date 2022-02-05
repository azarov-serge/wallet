import 'jsdom-global/register';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

import { Button } from './button';

configure({ adapter: new Adapter() });

describe('Button', () => {
    it('Button work correct', () => {
        const buttonCaption = 'Test button';
        const onClick = jest.fn();
        const testWrapper = mount(
            <div>
                <Button onClick={onClick}>{buttonCaption}</Button>
            </div>
        );
        testWrapper.update();
        const testButton = testWrapper.find('button');
        // Button has been rendered
        expect(testButton.text()).toEqual(buttonCaption);
        testButton.simulate('click');
        // Callback has been called
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
