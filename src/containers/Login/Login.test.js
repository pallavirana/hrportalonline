import React from 'react';
import { shallow } from 'enzyme';
import {LoginForm} from './Login.component';


describe('Login', () => {
    const wrapper = shallow(<LoginForm classes={{}} />);
    it('shallow renders without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
